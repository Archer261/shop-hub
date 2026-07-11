import { getProducts } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const products = getProducts();

  return (
    <div className="page">
      <div className="home-hero">
        <h1 className="home-title">Welcome to ShopHub</h1>
        <p className="home-subtitle">
          discover amazing products at great prices
        </p>
      </div>
      <div className="container">
        <h2 className="page-title">Our Products</h2>
        <div className="product-grid">
          {products.map((p) => (
            <ProductCard product={p} key={p.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
