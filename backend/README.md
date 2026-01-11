# Backend Setup
Steps for backend Python Setup

## Virtual envirnment creation
```bash
python3 -m venv venv
pip install -r requirements.txt
```

## Run With Uvicorn
Setup and .env file for local variables

```bash
uvicorn app.main:app --reload --env-file .env
```