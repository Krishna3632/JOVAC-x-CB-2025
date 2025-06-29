from flask import Flask, jsonify
from data import products
from flask_cors import CORS

app = Flask(__name__)

# Option 1: Enable CORS for all routes (simple)
CORS(app)

# Sample data - replace with your actual 74 items
PRODUCTS_DATA = products

@app.route("/")
def data():
    return jsonify(PRODUCTS_DATA)

@app.route("/products")
def get_products():
    return jsonify(PRODUCTS_DATA)

@app.route("/products/<int:product_id>")
def get_product(product_id):
    product = next((p for p in PRODUCTS_DATA if p["id"] == product_id), None)
    if product:
        return jsonify(product)
    return jsonify({"error": "Product not found"}), 404

@app.route("/products/count")
def get_product_count():
    return jsonify({"count": len(PRODUCTS_DATA)})

if __name__ == "__main__":
    app.run(debug=True)
   