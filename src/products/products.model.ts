type Product = {
  id: string;
  description: string;
  price: number;
  reviews: Array<Review>;
};
type Review = {
  rating: number;
  comment?: string;
};
const products: Array<Product> = [
  { id: "redshoe", description: "Red Shoe", price: 42.12, reviews: [] },
  { id: "bulejean", description: "Blue Jeans", price: 55.55, reviews: [] },
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

function addNewProduct(id: string, description: string, price: number) {
  // * return undefined if product exist
  if (getProductsById(id)) return;

  const newProduct: Product = { id, description, price, reviews: [] };
  products.push(newProduct);
  return newProduct;
}

function addNewProductReview(id: string, rating: number, comment?: string) {
  // * return undefined if product not exist
  const targetProduct = getProductsById(id);
  if (!targetProduct) return;

  const newReview: Review = { rating, comment };
  targetProduct.reviews.push(newReview);
  return targetProduct;
}

export {
  getAllProducts,
  getProductsByPrice,
  getProductsById,
  addNewProduct,
  addNewProductReview,
};
