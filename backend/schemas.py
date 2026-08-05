from pydantic import BaseModel, Field


class ProductBase(BaseModel):
    """Fields shared by create, update, and output schemas."""
    name: str = Field(..., min_length=1)
    description: str | None = None
    price: float = Field(..., gt=0)
    quantity: int = Field(..., ge=0)


class ProductCreate(ProductBase):
    """
    Shape expected in the body of POST /products.
    Deliberately has NO 'id' field — the database assigns that,
    so a client can never set/overwrite it.
    """
    pass


class ProductUpdate(ProductBase):
    """Shape expected in the body of PUT /products/{id}. Same rules as create."""
    pass


class ProductOut(ProductBase):
    """
    Shape returned to the client. Includes 'id' since the client
    needs it to know which product they're looking at.
    """
    id: int

    class Config:
        # Allows this schema to be built directly from a SQLAlchemy
        # object (db_product) rather than only from a dict.
        from_attributes = True