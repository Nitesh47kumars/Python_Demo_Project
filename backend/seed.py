from database import SessionLocal
import database_models as database_models

SAMPLE_PRODUCTS = [
    {"name": "iPhone 15", "description": "Apple smartphone with A16 Bionic chip and 48MP camera", "price": 69999, "quantity": 12},
    {"name": "Samsung Galaxy S24", "description": "Premium Android smartphone with AMOLED display", "price": 74999, "quantity": 8},
    {"name": "Google Pixel 8", "description": "AI-powered smartphone with advanced camera system", "price": 59999, "quantity": 15},
    {"name": "OnePlus 12", "description": "High-performance Android smartphone with 120Hz display", "price": 64999, "quantity": 10},
    {"name": "Redmi Note 13", "description": "Affordable smartphone with AMOLED display and fast charging", "price": 17999, "quantity": 25},

    {"name": "MacBook Air M3", "description": "Lightweight Apple laptop with M3 chip and Retina display", "price": 114999, "quantity": 6},
    {"name": "Dell XPS 15", "description": "Premium Windows laptop for productivity and development", "price": 139999, "quantity": 4},
    {"name": "HP Pavilion 15", "description": "Everyday laptop for work, study, and entertainment", "price": 64999, "quantity": 11},
    {"name": "Lenovo Legion 5", "description": "Gaming laptop with dedicated graphics and high refresh rate", "price": 104999, "quantity": 7},
    {"name": "ASUS ROG Strix G16", "description": "High-performance gaming laptop with RTX graphics", "price": 149999, "quantity": 5},

    {"name": "LG UltraGear 27", "description": "27-inch gaming monitor with high refresh rate", "price": 29999, "quantity": 9},
    {"name": "Samsung Odyssey G5", "description": "Curved gaming monitor with QHD resolution", "price": 27999, "quantity": 13},
    {"name": "Dell 24 Monitor", "description": "Full HD business monitor with IPS panel", "price": 14999, "quantity": 18},

    {"name": "Apple AirPods Pro 2", "description": "Wireless earbuds with active noise cancellation", "price": 24999, "quantity": 20},
    {"name": "Sony WH-1000XM5", "description": "Premium wireless headphones with noise cancellation", "price": 29999, "quantity": 14},
    {"name": "JBL Tune 770NC", "description": "Wireless headphones with adaptive noise cancellation", "price": 7999, "quantity": 30},

    {"name": "Logitech MX Master 3S", "description": "Premium wireless productivity mouse", "price": 8999, "quantity": 22},
    {"name": "Logitech K380 Keyboard", "description": "Compact wireless Bluetooth keyboard", "price": 2999, "quantity": 35},
    {"name": "Razer DeathAdder V3", "description": "Ergonomic high-performance gaming mouse", "price": 6999, "quantity": 17},

    {"name": "Samsung 55-inch 4K TV", "description": "Smart 4K UHD television with HDR support", "price": 54999, "quantity": 7},
    {"name": "LG 43-inch Smart TV", "description": "4K smart television with webOS platform", "price": 37999, "quantity": 10},

    {"name": "Sony Bluetooth Speaker", "description": "Portable wireless speaker with powerful bass", "price": 12999, "quantity": 16},
    {"name": "Amazon Echo Dot", "description": "Compact smart speaker with Alexa", "price": 5499, "quantity": 28},
    {"name": "Google Nest Mini", "description": "Compact smart home speaker with Google Assistant", "price": 4499, "quantity": 24},

    {"name": "Canon EOS R50", "description": "Mirrorless camera designed for photography and video", "price": 68999, "quantity": 5},
    {"name": "GoPro HERO 12", "description": "Action camera with 5.3K video recording", "price": 39999, "quantity": 8},

    {"name": "Apple Watch Series 9", "description": "Smartwatch with health tracking and fitness features", "price": 42999, "quantity": 9},
    {"name": "Samsung Galaxy Watch 6", "description": "Android smartwatch with health and fitness tracking", "price": 24999, "quantity": 13},

    {"name": "Anker Power Bank 20000mAh", "description": "High-capacity portable charger with fast charging", "price": 3999, "quantity": 40},
    {"name": "TP-Link WiFi 6 Router", "description": "Dual-band wireless router with WiFi 6 support", "price": 6999, "quantity": 19},
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