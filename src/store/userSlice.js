import { createSlice } from "@reduxjs/toolkit";

const incrementCartedItemQuantity = (state, id) => {
  state.cartedItems = state.cartedItems.map((item) => {
    if (item.id === id) {
      return {
        ...item,
        quantity: item.quantity + 1,
      };
    }
    return item;
  });
};

const initialState = {
  cartIsVisible: false,
  cartedItems: [],
};

const userSlice = createSlice({
  name: "userProgress",
  initialState,
  reducers: {
    showCart(state) {
      state.cartIsVisible = true;
    },
    hideCart(state) {
      state.cartIsVisible = false;
    },
    addToCart(state, action) {
      if (state.cartedItems.some((item) => item.id === action.payload.id)) {
        incrementCartedItemQuantity(state, action.payload.id);
      } else {
        state.cartedItems.push({
          ...action.payload,
          quantity: 1,
        });
      }
    },
    decrementCartedItem(state, action) {
      const id = action.payload;
      const existingItem = state.cartedItems.find((item) => item.id === id);
      if (existingItem.quantity === 1) {
        state.cartedItems = state.cartedItems.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
      }
    },
    incrementCartedItem(state, action) {
      incrementCartedItemQuantity(state, action.payload);
    },
  },
});

export default userSlice.reducer;
export const userActions = userSlice.actions;
