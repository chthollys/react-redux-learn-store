import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import products from "./products";

function App() {
  return (
    <Layout>
      <Cart />
      <Products products={products} />
    </Layout>
  );
}

export default App;
