from fastapi import FastAPI
from .db_models.db import engine, Base
from app.api.auth.auth_view import router as user_router
from sqlalchemy import inspect

app = FastAPI()

app.include_router(user_router, prefix="/api")

def initialize_database():
    inspector = inspect(engine)
    if "users" not in inspector.get_table_names():
        try:
            Base.metadata.create_all(bind=engine)
        except Exception as e:
            print("Error creating tables:", e)
    else:
        print("Table 'users' already exists.")

@app.on_event("startup")
def on_startup():
    initialize_database()

@app.get("/")
def read_root():
    return {"message": "Welcome to the Membership Registration API"}