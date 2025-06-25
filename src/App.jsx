import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import products from "./products";

function App() {
  return (
    <Layout>
      <Cart />
      <Products products={products} />
      <Notification />
    </Layout>
  );
}

export default App;
