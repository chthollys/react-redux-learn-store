import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db.js";
import Cart from "./models/cart.model.js";
import bodyParser from "body-parser";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.post("/api/cart", async (req, res) => {
  const { id, title, price, image } = req.body;
  try {
    const response = await Cart.create({
      id: id,
      name: title,
      price: price,
      image: image,
    });
    res.status(201).json(response);
  } catch (error) {
    console.error("Error in POST request: ", error);
    res.status(400).json({ error: error.message });
  }
});

app.put("/api/cart/:id", async (req, res) => {
  const id = req.params.id;
  const item = req.body;
  try {
    const response = await Cart.findByIdAndUpdate(id, item, {
      new: true,
      runValidators: true,
    });
    res.status(200).json(response);
  } catch (error) {
    console.error("Error in PUT request: ", error);
    res.status(400).json({ error: error.message });
  }
});

connectDB();

app.listen(PORT, () => {
  console.log(`Server is running in http://localhost:${PORT}`);
});
