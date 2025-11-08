# backend/main.py

# --- Standard imports ---
import os
import json
from typing import List

# --- FastAPI & CORS ---
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# --- Pydantic models ---
from pydantic import BaseModel

# --- Env loader ---
from dotenv import load_dotenv

# --- OpenAI client ---
from openai import OpenAI

# Load environment variables from backend/.env (and parent .env if present)
load_dotenv()  # looks in current working dir; good for Codespaces/local

# Create FastAPI app
app = FastAPI(title="SNTheAIMaster API", version="1.0.0")

# CORS (open in dev; tighten in prod)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, set to your domains only
    allow_methods=["*"],
    allow_headers=["*"],
)

# ---------- Data models ----------

class LeadIn(BaseModel):
    name: str
    email: str   # keep as str to avoid email-validator dependency
    topic: str

class ChatMsg(BaseModel):
    role: str
    content: str

class ChatBody(BaseModel):
    messages: List[ChatMsg]

# ---------- Storage helpers ----------

LEADS_FILE = os.path.join(os.path.dirname(__file__), "leads.json")

def load_leads() -> list:
    if not os.path.exists(LEADS_FILE):
        return []
    with open(LEADS_FILE, "r", encoding="utf-8") as f:
        try:
            return json.load(f)
        except json.JSONDecodeError:
            return []

def save_leads(leads: list) -> None:
    with open(LEADS_FILE, "w", encoding="utf-8") as f:
        json.dump(leads, f, indent=2, ensure_ascii=False)

# ---------- OpenAI client ----------

OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
client = OpenAI(api_key=OPENAI_API_KEY) if OPENAI_API_KEY else None

# ---------- Routes ----------

@app.get("/ping")
def ping():
    return {"ok": True}

@app.get("/leads")
def get_leads():
    return load_leads()

@app.post("/leads")
def post_lead(lead: LeadIn):
    data = load_leads()
    data.append(lead.model_dump())
    save_leads(data)
    return {"status": "ok"}

@app.post("/chat")
def chat(body: ChatBody):
    """
    Proxy chat to OpenAI through the server (keeps your key secret).
    Expects: { "messages": [ { "role": "user"|"system"|"assistant", "content": "..." }, ... ] }
    """
    if client is None:
        return {"error": "Missing OPENAI_API_KEY"}
    try:
        resp = client.chat.completions.create(
            model="gpt-4o-mini",          # fast & cost-effective; change if you prefer
            temperature=0.6,
            messages=[
                {"role": "system", "content": (
                    "You are the helpful site assistant for SNTheAIMaster.com. "
                    "Be concise, friendly, and helpful about projects, data stories, and services."
                )},
                *[m.model_dump() for m in body.messages],
            ],
        )
        return {"reply": resp.choices[0].message.content}
    except Exception as e:
        return {"error": str(e)}

@app.get("/health")
def health():
    """
    Health endpoint for the frontend status light:
    - api: FastAPI is up
    - openai: API key present and OpenAI reachable
    """
    api_ok = True
    openai_ok = False
    if client is not None:
        try:
            # Lightweight call to verify key/connectivity (no prompt tokens billed)
            _ = client.models.list()
            openai_ok = True
        except Exception:
            openai_ok = False
    return {"api": api_ok, "openai": openai_ok}
