const products = [
  { id: "redshoe", description: "Red Shoe", price: 42.12 },
  { id: "bulejean", description: "Blue Jeans", price: 55.55 },
];

function getAllProducts() {
  return products;
}

function getProductsByPrice(min: number, max: number) {
  return products.filter((p) => p.price >= min && p.price <= max);
}

function getProductsById(id: string) {
  return products.find((p) => p.id === id);
}

export { getAllProducts, getProductsByPrice, getProductsById };
