# ✦ Python Demo Project — Inventory Analytics Dashboard

A modern inventory management dashboard that combines a **Python FastAPI backend**
with a **React frontend** to make product and inventory information easy to
understand and manage.

The project demonstrates how a real application can connect a backend,
database, analytics layer, and modern user interface together.

---

## 🚀 What This Project Does

The application helps users manage and understand their inventory.

You can:

- 📦 Add products
- ✏️ Edit products
- 🗑️ Delete products
- 💰 View product prices
- 📊 View inventory analytics
- 📈 Compare product prices visually
- ⚠️ Identify low-stock products
- 💡 Get inventory insights
- 🏷️ Automatically categorize products by price

The goal is simple:

> **Turn raw inventory data into information that is easy to understand
> and act on.**

---

# 🏗️ Project Structure

```text
Python_Demo_Project/
│
├── backend/
│   │
│   ├── main.py
│   ├── database.py
│   ├── database_models.py
│   ├── schemas.py
│   ├── seed.py
│   │
│   ├── requirements.txt
│   ├── .env
│   ├── .env.example
│   ├── .gitignore
│   │
│   ├── routes/
│   │   ├── __init__.py
│   │   └── products.py
│   │
│   └── services/
│       ├── __init__.py
│       └── analytics.py
│
├── frontend/
│   │
│   └── src/
│       │
│       ├── App.jsx
│       │
│       ├── components/
│       │   ├── Navbar.jsx
│       │   ├── SummaryCards.jsx
│       │   ├── InsightCard.jsx
│       │   ├── ProductChart.jsx
│       │   ├── ProductList.jsx
│       │   ├── ProductItem.jsx
│       │   ├── ProductForm.jsx
│       │   └── ConfirmDialog.jsx
│       │
│       ├── services/
│       │   └── api.js
│       │
│       └── utils/
│           └── tier.js
│
├── .gitignore
└── README.md