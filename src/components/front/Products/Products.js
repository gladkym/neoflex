import "./Products.css";

const ProductSection = ({ title, products, handleAddProduct }) => (
  <>
    <h2>{title}</h2>
    <section className="products-section">
      {products.map((productItem) => (
        <div key={productItem.id} className="card">
          <img
        className="product-image"
        src={process.env.PUBLIC_URL + productItem.image}
        alt={productItem.name}
      />
          
            {/* <img
              className="product-image"
              src={productItem.image}
              alt={productItem.name}
            /> */}

          <div className="product-info">
            <div>
              <h3 className="product-name">{productItem.name}</h3>
            </div>
            <div className="product-price">{productItem.price} ₽</div>
            <div className="product-rating">
              <img
                src={process.env.PUBLIC_URL + "/pics/rating.svg"}
                alt="Рейтинг"
              />
              {productItem.rating}
            </div>
            <div>
              <button
                className="product-add-button"
                onClick={() => handleAddProduct(productItem)}
              >
                Купить
              </button>
            </div>
          </div>
        </div>
      ))}
    </section>
  </>
);

const Products = ({ productItems, handleAddProduct }) => {
  const wiredProducts = productItems.filter(
    (product) => product.type === "wired"
  );
  const wirelessProducts = productItems.filter(
    (product) => product.type === "wireless"
  );

  return (
    <div className="products">
      <ProductSection
        title="Проводные наушники"
        products={wiredProducts}
        handleAddProduct={handleAddProduct}
      />
      <ProductSection
        title="Беспроводные наушники"
        products={wirelessProducts}
        handleAddProduct={handleAddProduct}
      />
    </div>
  );
};

export default Products;