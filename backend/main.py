from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from typing import List
import json, os, time

app = FastAPI(title="SNTheAIMaster API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # tighten later
    allow_methods=["*"],
    allow_headers=["*"],
)

DATA_FILE = "leads.json"

class LeadIn(BaseModel):
    name: str
    email: EmailStr
    topic: str

class Lead(LeadIn):
    ts: float

def _load() -> List[Lead]:
    if not os.path.exists(DATA_FILE):
        return []
    with open(DATA_FILE, "r", encoding="utf-8") as f:
        return json.load(f)

def _save(items: List[Lead]):
    with open(DATA_FILE, "w", encoding="utf-8") as f:
        json.dump(items, f, ensure_ascii=False, indent=2)

@app.get("/ping")
def ping():
    return {"ok": True}

@app.get("/leads")
def list_leads():
    return _load()

@app.post("/leads")
def create_lead(payload: LeadIn):
    items = _load()
    item = payload.model_dump()
    item["ts"] = time.time()
    items.append(item)
    _save(items)
    return {"saved": True, "count": len(items)}
