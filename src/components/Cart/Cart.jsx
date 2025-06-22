import Card from "../UI/Card";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../store/index";

const Cart = () => {
  const { cartOngoing: isOpen, cartedItems } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(userActions.hideCart());
  };

  let cartInterface = <p>Your shoping cart is empty, shop now.</p>;

  if (cartedItems.length > 0) {
    cartInterface = cartedItems.map((item) => (
      <CartItem key={item.id} item={item} />
    ));
  }

  return (
    <Modal open={isOpen} onClose={handleClose}>
      <Card className={classes.cart}>
        <h2>Your Shopping Cart</h2>
        <ul>{cartInterface}</ul>
      </Card>
      <div className={classes.actions}>
        <button onClick={handleClose}>Close</button>
      </div>
    </Modal>
  );
};

export default Cart;
