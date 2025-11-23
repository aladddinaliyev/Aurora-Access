from fastapi import FastAPI
from pydantic import BaseModel
import secrets
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title='Aurora Access — Backend')
app.add_middleware(CORSMiddleware, allow_origins=["*"], allow_methods=["*"], allow_headers=["*"])

class AuroraCreateResp(BaseModel):
    aurora_id: str
    message: str

@app.post('/api/aurora/create', response_model=AuroraCreateResp)
async def create_aurora():
    # simple Aurora ID generator (prototype)
    key = secrets.token_urlsafe(24)
    return {"aurora_id": f"aurora_{key}", "message":"Aurora ID created (prototype). Store it locally."}

@app.get('/api/health')
async def health():
    return {"status":"ok"}
