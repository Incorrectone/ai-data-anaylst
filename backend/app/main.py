from fastapi import FastAPI
from app.core.database import engine, Base
from app.models.dataset import Dataset, AnalysisJob

Base.metadata.create_all(engine)

app = FastAPI(title="AI Data Analyst API")

@app.get("/")
def read_root():
    return {"status": "active", "service": "AI Data Analyst"}