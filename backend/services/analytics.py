import pandas as pd
import numpy as np

import database_models as database_models


def calculate_analytics(db):
    """
    Pulls all products from the database, loads them into a Pandas
    DataFrame, and computes summary statistics + a simple insight.
    Returns a plain dict, ready to be sent back as JSON.
    """
    products = db.query(database_models.Product).all()

    if not products:
        return {
            "total_products": 0,
            "total_inventory_value": 0,
            "average_price": 0,
            "highest_price": 0,
            "insight": "No products yet. Add some to see analytics.",
        }

    data = [
        {
            "id": p.id,
            "name": p.name,
            "price": p.price,
            "quantity": p.quantity,
        }
        for p in products
    ]
    df = pd.DataFrame(data)

    total_inventory_value = float((df["price"] * df["quantity"]).sum())

    average_price = float(np.mean(df["price"]))
    highest_price = float(np.max(df["price"]))

    total_products = int(len(df))

    most_expensive = df.loc[df["price"].idxmax(), "name"]
    low_stock = df[df["quantity"] < 5]

    if not low_stock.empty:
        insight = f"{len(low_stock)} product(s) are running low on stock (under 5 units)."
    else:
        insight = f"'{most_expensive}' is currently your highest-priced product."

    return {
        "total_products": total_products,
        "total_inventory_value": round(total_inventory_value, 2),
        "average_price": round(average_price, 2),
        "highest_price": round(highest_price, 2),
        "insight": insight,
    }