
import { Suspense } from "react";
import "./product.css";

async function ProductList() {
    const response = await fetch(
        "https://fakestoreapi.com/products"
    );

    const data = await response.json();

    return (
        <main className="product-page">
            
            <h1 className="product-heading">
    Shop<span>Ex.</span>
</h1>
<p className="product-tagline">Find your style. Love your look.</p>

            <div className="product-container">
                {data.map((prod: any) => (
                    <div className="product-card" key={prod.id}>
                        <div className="product-image-box">
                            <img
                                className="product-image"
                                src={prod.image}
                                alt={prod.title}
                            />
                        </div>

                        <div className="product-info">
                            <h3 className="product-title">
                                {prod.title}
                            </h3>

                            <p className="product-description">
                                {prod.description}
                            </p>

                            <div className="product-rating">
                                ⭐ {prod.rating.rate}
                                <span> ({prod.rating.count} reviews)</span>
                            </div>

                            <div className="product-bottom">
                                <h2 className="product-price">
                                    ${prod.price}
                                </h2>

                                <button
                                    className="product-button"
                                    type="button"
                                >
                                    View More
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}

export default function Home() {
    return (
        <Suspense fallback={<p className="loading">Loading products...</p>}>
            <ProductList />
        </Suspense>
    );
}
