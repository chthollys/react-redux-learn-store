import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = ({ products }) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <div className={classes["products-container"]}>
        {products.map((product) => (
          <ProductItem
            key={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
            image={product.image}
          />
        ))}
      </div>
    </section>
  );
};

export default Products;
