from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from database import get_db
from services.analytics import calculate_analytics

router = APIRouter(prefix="/analytics", tags=["Analytics"])


@router.get("/")
def get_analytics(db: Session = Depends(get_db)):
    return calculate_analytics(db)