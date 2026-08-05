from sqlalchemy import Column, Integer, String, Float
from database import Base


class Product(Base):
    """
    SQLAlchemy model = the actual PostgreSQL table shape.
    This class is ONLY used for talking to the database.
    It is never used directly as a FastAPI request/response type —
    that job belongs to schemas.py.
    """

    __tablename__ = "products"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    description = Column(String, nullable=True)
    price = Column(Float, nullable=False)
    quantity = Column(Integer, nullable=False)