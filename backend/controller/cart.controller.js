import Cart from "../models/cart.model.js";

export const getCartItems = async (req, res) => {
  try {
    const cartedItems = await Cart.find({});
    res.status(200).json(cartedItems);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }
};

export const addCartItem = async (req, res) => {
  const { name, price, image } = req.body;
  try {
    const item = await Cart.create({ name, price, image });
    res.status(201).json(item);
  } catch (error) {
    console.error("Error in POST request: ", error);
    res.status(400).json({ error: error.message });
  }
};

export const updateCartItem = async (req, res) => {
  const id = req.params.id;
  const item = req.body;
  try {
    const updatedItem = await Cart.findByIdAndUpdate(id, item, {
      new: true,
      runValidators: true,
    });
    res.status(200).json(updatedItem);
  } catch (error) {
    console.error("Error in PUT request: ", error);
    res.status(400).json({ error: error.message });
  }
};

export const deleteCartItem = async (req, res) => {
  const id = req.params.id;
  try {
    const deletedItem = await Cart.findByIdAndDelete(id);
    if (!deletedItem) {
      return res.status(404).json({ message: "Item not found in the cart." });
    }
    res.status(200).json({ message: "Item deleted successfully." });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "An internal server error occured." });
  }
};
