import {
  getCartItems,
  addCartItem,
  updateCartItem,
  deleteCartItem,
} from "../controller/cart.controller.js";

import express from "express";

const router = express.Router();

router.route("/").get(getCartItems).post(addCartItem);

router.route("/:id").put(updateCartItem).delete(deleteCartItem);

export default router;
