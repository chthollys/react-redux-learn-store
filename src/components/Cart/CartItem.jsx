import { useDispatch } from "react-redux";
import classes from "./CartItem.module.css";
import { userActions } from "../../store/userSlice";

const CartItem = ({ item }) => {
  const { id, title, quantity, price } = item;
  const totalPrice = (quantity * price).toFixed(2);
  const dispatch = useDispatch();

  const handleDecrementItem = () => {
    dispatch(userActions.decrementCartedItem(id));
  };

  const handleIncrementItem = () => {
    dispatch(userActions.incrementCartedItem(id));
  };
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${totalPrice}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button type="button" onClick={handleDecrementItem}>
            -
          </button>
          <button type="button" onClick={handleIncrementItem}>
            +
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
