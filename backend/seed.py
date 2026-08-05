from database import SessionLocal
import database_models as database_models

SAMPLE_PRODUCTS = [
    {"name": "Phone", "description": "Budget phone", "price": 99, "quantity": 10},
    {"name": "Laptop", "description": "Gaming laptop", "price": 999, "quantity": 6},
    {"name": "Smart Phone", "description": "Average phone", "price": 550, "quantity": 18},
    {"name": "Cylinder", "description": "Powerful cylinder", "price": 120, "quantity": 525},
]


def seed():
    db = SessionLocal()
    try:
        count = db.query(database_models.Product).count()
        if count > 0:
            print(f"Skipping seed — {count} product(s) already exist.")
            return

        for item in SAMPLE_PRODUCTS:
            db.add(database_models.Product(**item))

        db.commit()
        print(f"Seeded {len(SAMPLE_PRODUCTS)} products.")
    finally:
        db.close()


if __name__ == "__main__":
    seed()