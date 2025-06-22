import { configureStore, createSlice } from "@reduxjs/toolkit";

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
  cartOngoing: false,
  cartedItems: [],
};

const userSlice = createSlice({
  name: "userProgress",
  initialState,
  reducers: {
    showCart(state) {
      state.cartOngoing = true;
    },
    hideCart(state) {
      state.cartOngoing = false;
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
      state.cartedItems = state.cartedItems
        .map((item) => {
          if (item.id === action.payload) {
            if (item.quantity > 1) {
              return {
                ...item,
                quantity: item.quantity - 1,
              };
            }
            return null;
          }
          return item;
        })
        .filter(Boolean);
    },
    incrementCartedItem(state, action) {
      incrementCartedItemQuantity(state, action.payload);
    },
  },
});

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});

export default store;
export const userActions = userSlice.actions;
