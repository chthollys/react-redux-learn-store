import { useDispatch } from "react-redux";
import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { userActions } from "../../store/userSlice";
import loadNotif from "../../util/loadNotif";

const ProductItem = (item) => {
  const { title, price, description, image } = item;
  const dispatch = useDispatch();

  const handleAddItem = () => {
    const addItemFunction = async () => {
      dispatch(userActions.addToCart(item));
    };

    loadNotif(addItemFunction, dispatch, {
      success: "Item added succesfully",
      loading: "Adding Item to cart",
      error: "Error in adding item",
    });
  };

  return (
    <div className={classes.item}>
      <Card className={classes["item-cart"]}>
        <div className={classes["image-container"]}>
          <img src={image} alt={`Image of ${title}`} />
        </div>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={handleAddItem}>Add to Cart</button>
        </div>
      </Card>
    </div>
  );
};

export default ProductItem;
