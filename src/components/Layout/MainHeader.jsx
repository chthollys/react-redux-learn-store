import { userActions } from "../../store";
import CartButton from "../Cart/CartButton";
import classes from "./MainHeader.module.css";
import { useDispatch } from "react-redux";

const MainHeader = () => {
  const dispatch = useDispatch();

  const handleOpenCart = () => {
    dispatch(userActions.showCart());
  };

  return (
    <header className={classes.header}>
      <h1>ReduxCart</h1>
      <nav>
        <ul>
          <li>
            <CartButton onClick={handleOpenCart} />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
