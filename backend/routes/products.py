from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

import database_models as database_models
import schemas as schemas
from database import get_db

router = APIRouter(prefix="/products", tags=["Products"])


@router.get("/", response_model=list[schemas.ProductOut])
def get_all_products(db: Session = Depends(get_db)):
    return db.query(database_models.Product).all()


@router.get("/{id}", response_model=schemas.ProductOut)
def get_product_by_id(id: int, db: Session = Depends(get_db)):
    db_product = db.query(database_models.Product).filter(
        database_models.Product.id == id
    ).first()

    if not db_product:
        raise HTTPException(status_code=404, detail="Product not found")

    return db_product


@router.post("/", response_model=schemas.ProductOut, status_code=201)
def add_product(product: schemas.ProductCreate, db: Session = Depends(get_db)):
    db_product = database_models.Product(**product.model_dump())
    db.add(db_product)
    db.commit()
    db.refresh(db_product)  # pulls the new auto-generated id back into db_product
    return db_product


@router.put("/{id}", response_model=schemas.ProductOut)
def update_product(id: int, product: schemas.ProductUpdate, db: Session = Depends(get_db)):
    db_product = db.query(database_models.Product).filter(
        database_models.Product.id == id
    ).first()

    if not db_product:
        raise HTTPException(status_code=404, detail="Product not found")

    db_product.name = product.name
    db_product.description = product.description
    db_product.price = product.price
    db_product.quantity = product.quantity

    db.commit()
    db.refresh(db_product)
    return db_product


@router.delete("/{id}")
def delete_product(id: int, db: Session = Depends(get_db)):
    db_product = db.query(database_models.Product).filter(
        database_models.Product.id == id
    ).first()

    if not db_product:
        raise HTTPException(status_code=404, detail="Product not found")

    db.delete(db_product)
    db.commit()
    return {"detail": "Product deleted"}