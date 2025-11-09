# 🌐 **SNTheAIMaster – AI Automation & Data Storytelling Portfolio**

**Author:** [Sudipta Nath](https://www.linkedin.com/in/sudipta-nath-ai)  
**Tech Stack:** React + Tailwind + Vite + FastAPI + OpenAI GPT-4o + Render + Hostinger  
**License:** MIT  

---

## 🚀 Overview

**SNTheAIMaster.com** is my personal **AI engineering and data storytelling hub**, built as a full-stack GenAI portfolio.  
It demonstrates how AI systems, automation, and storytelling can converge in production-grade projects.

The platform serves as a **central showcase** for:

- 🧠 AI & automation projects  
- 📊 Interactive data stories (Tableau & Power BI embeds)  
- 💼 Kaggle notebooks & datasets  
- 🤖 An integrated OpenAI-powered chatbot  
- 💬 Contact and lead-capture workflows  

---

## 🧱 Architecture

\`\`\`
SNTheAIMaster/
├── frontend/          # React + Tailwind + Vite
│   ├── src/
│   │   ├── pages/     # Home, Stories, Projects, Kaggle, About, Contact
│   │   ├── components/# Hero, Navbar, Chatbot, Cards, etc.
│   │   └── assets/
│   ├── public/
│   └── package.json
│
├── backend/           # FastAPI server (Python 3.12)
│   ├── main.py        # Entry point + routes
│   ├── api/           # Chatbot, leads, health endpoints
│   ├── genai/         # OpenAI, RAG, logging modules
│   ├── .env           # OPENAI_API_KEY (excluded)
│   └── requirements.txt
│
├── content/           # JSON data (projects, stories, kaggle, etc.)
├── .gitignore
└── README.md
\`\`\`

---

## 💬 Key Features

| Feature | Description |
|----------|-------------|
| 🧠 **OpenAI Chatbot** | Conversational assistant that greets visitors, answers portfolio questions, and captures leads |
| 📊 **Data Stories Blog** | Long-form Tableau/Power BI storytelling with insights, biases, and key takeaways |
| 🤖 **AI Automation Projects** | Showcases of RAG, automation, and GPT-driven systems |
| 📈 **Kaggle Integration** | Embedded notebooks and dataset summaries |
| 👤 **About & Timeline** | Skill matrix, achievements, and contact section |
| 📬 **Lead Capture System** | Chatbot + form submissions stored via FastAPI backend |

---

## 🧠 Tech Stack

### **Frontend**
- React 19 + Vite  
- Tailwind CSS v4  
- Framer Motion  
- Lucide Icons  
- React Router v7  

### **Backend**
- FastAPI  
- Python 3.12  
- Pydantic v2  
- \`python-dotenv\`  
- OpenAI Python SDK  
- Uvicorn ASGI  

### **Integration**
- Tableau Public / Power BI iframe  
- Google Analytics + Search Console  
- Render (backend hosting)  
- Hostinger (domain + deployment)

---

## ⚙️ Local Setup

### 🧩 1. Clone the repo
\`\`\`bash
git clone https://github.com/SN1604129/sntheaimaster.git
cd sntheaimaster
\`\`\`

### 🧩 2. Backend setup
\`\`\`bash
cd backend
python -m venv venv
source venv/bin/activate  # (Windows: venv\Scripts\activate)
pip install -r requirements.txt
\`\`\`

Create \`.env\` inside \`/backend\`:
\`\`\`
OPENAI_API_KEY=sk-your-secret-key
\`\`\`

Run backend:
\`\`\`bash
uvicorn main:app --host 0.0.0.0 --port 8000
\`\`\`

### 🧩 3. Frontend setup
\`\`\`bash
cd ../frontend
npm install
npm run dev
\`\`\`

Access site:  
👉 \`http://localhost:5173\`

---

## 🔒 Environment Variables

| Key | Purpose |
|-----|----------|
| \`OPENAI_API_KEY\` | Required for chatbot and AI demos |
| \`VITE_API_URL\` | Backend URL used by frontend |

**Important:** \`.env\` and secrets are never committed.  
They are provided through environment variables during deployment.

---

## 🤝 Project Phase Plan

| Phase | Focus | Example Tools |
|--------|--------|---------------|
| **1. Portfolio Core** | Resume Generator • Review Verifier | GPT + FastAPI |
| **2. Domain AI Tools** | Legal AI • Gym Planner • Script Generator | RAG + Agents |
| **3. Research Grade** | ForecastAI (public health) | Prophet + GPT |
| **4. Experimental** | TaleGenie • Sign Lang Translator • F4I | Vision + Speech + Unity |

Each will live in its own repository but integrate under **SNTheAIMaster.com**.

---

## 🧰 Development Scripts

| Command | Action |
|----------|--------|
| \`npm run dev\` | Run frontend (Vite) |
| \`uvicorn main:app\` | Run backend |
| \`pnpm dev\` | Run both concurrently |
| \`npm run build\` | Build frontend for production |

---

## 🧠 Security Notes

- \`.env\` files are **ignored** via \`.gitignore\`.  
- OpenAI keys are stored **only in server environments** (Render/Vercel).  
- Frontend never calls OpenAI directly.  
- API rate-limiting and moderation are applied at backend level.

---

## 🧩 Deployment Plan

| Component | Platform | URL / Notes |
|------------|-----------|-------------|
| **Frontend** | Vercel / Hostinger | \`https://sntheaimaster.com\` |
| **Backend** | Render (FastAPI) | \`https://api.sntheaimaster.com\` |
| **DB / Storage** | Supabase (optional) | For user leads / uploads |
| **Monitoring** | Render logs + OpenAI usage | |

---

## 📚 Future Expansion

✅ Add RAG pipelines for advanced GenAI projects  
✅ Integrate model evals, logging, and caching  
✅ Add signup & newsletter automation  
✅ Launch 8 independent GenAI tools (resume, legal, gym, health, etc.)

---

## 🧑‍💻 Author

**Sudipta Nath**  
Master of Information Technology (AI) – Macquarie University, Australia  
📍 Sydney • AI Engineer • Data Storyteller • Founder @ SNTheAIMaster  

🌐 [https://sntheaimaster.com](https://sntheaimaster.com)  
💼 [LinkedIn](https://www.linkedin.com/in/sudipta-nath-ai)  
📧 sudipta1604129@gmail.com  

---

## 🧾 License
MIT License © 2025 Sudipta Nath  
