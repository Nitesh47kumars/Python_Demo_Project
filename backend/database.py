import os
from dotenv import load_dotenv
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base

# Load variables from .env into the environment
load_dotenv()

DB_URL = os.getenv("DATABASE_URL")

if not DB_URL:
    raise RuntimeError(
        "DATABASE_URL is not set. Create a .env file (see .env.example)."
    )

# The engine manages the actual connection pool to PostgreSQL
engine = create_engine(DB_URL)

# Each request gets its own Session from this factory
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# All SQLAlchemy models (in database_models.py) will inherit from this Base.
# There must only be ONE Base in the whole project, or table metadata
# gets split across two registries and create_all() won't see everything.
Base = declarative_base()


def get_db():
    """
    FastAPI dependency. Opens one DB session per request and
    guarantees it's closed afterwards, even if an error occurs.
    Used in routes like: db: Session = Depends(get_db)
    """
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()