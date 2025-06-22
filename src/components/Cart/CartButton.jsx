import { useSelector } from "react-redux";
import classes from "./CartButton.module.css";

const CartButton = ({ ...props }) => {
  const { cartedItems } = useSelector((state) => state.user);

  const totalQty = cartedItems.reduce(
    (currentQty, item) => currentQty + item.quantity,
    0
  );
  return (
    <button className={classes.button} {...props}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQty}</span>
    </button>
  );
};

export default CartButton;
