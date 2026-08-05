from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routes import products
import database_models as database_models
from database import engine
from routes import analytics

app = FastAPI(title="Python_demo_project API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://python-demo-project-frontend.onrender.com"],
    allow_methods=["*"],
    allow_headers=["*"],
)

database_models.Base.metadata.create_all(bind=engine)

app.include_router(products.router)
app.include_router(analytics.router)


@app.get("/")
def greet():
    return {"message": "Welcome to the Python_demo_project API"}