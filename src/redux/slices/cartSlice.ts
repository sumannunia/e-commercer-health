/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axiosInstance";
import { handleApiError } from "../../utils/apiErrorHandler";
import { RootState } from "../store";
import { notifications } from "@mantine/notifications";

type CartItem = {
  productId: number;
  productName: string;
  price: number;
  quantity: number;
};

// Add item to cart API
export const addItemToCart = createAsyncThunk(
  "cart/addItemToCart",
  async (
    item: {
      productId: number;
      productName: string;
      price: number;
      quantity: number;
    },
    { getState, rejectWithValue, dispatch }
  ) => {
    const state: RootState = getState() as RootState; // Strongly type the state
    const user = state.auth.user; // Access the user data from the Redux store
    console.log({ userjjj: user });
    if (!user) {
      const tempCart: CartItem[] = [...state?.cart?.items, item];
      console.log({ statjfdje: tempCart });
      // User is not logged in, add item to local cart
      dispatch(addItemToLocalCart(tempCart));
      notifications.show({
        message: "Item added to local cart. Log in to sync your cart.",
        color: "yellow",
      });
      return tempCart; // Return the item to the local state
    }

    try {
      const token = (getState() as RootState).auth.user.token; // Get the token from the auth state
      const response = await axiosInstance.post("/cart/add", item, {
        headers: { token },
      });
      notifications.show({
        message: "Successfully add to the cart",
        color: "green",
      });
      return response.data; // Expecting updated cart data from the API
    } catch (error: any) {
      handleApiError(error);
      notifications.show({
        message: error?.message || "Failed to add to cart",
        color: "red",
      });
      return rejectWithValue(
        error.response.data || "Failed to add item to cart"
      );
    }
  }
);
export const syncLocalCart = createAsyncThunk(
  "cart/syncLocalCart",
  async (_, { getState, dispatch }) => {
    const state: RootState = getState() as RootState;
    const localCartItems = state.cart.items;
    console.log({ localCartItems });
    // Sync each local cart item with the backend
    for (const item of localCartItems) {
      console.log({ item });
      await dispatch(addItemToCart(item)); // Dispatch addItemToCart for each item
    }

    // Clear local cart after successful sync
    dispatch(clearLocalCart());
  }
);

// Remove item from cart API
export const removeItemFromCart = createAsyncThunk(
  "cart/removeItemFromCart",
  async (
    item: {
      productId: number;
      productName: string;
      price: number;
      quantity: number;
    },
    { getState, rejectWithValue }
  ) => {
    try {
      const token = (getState() as RootState).auth.user.token; // Get the token from the auth state
      const response = await axiosInstance.delete("/cart", {
        headers: { token },
        data: item,
      });
      return response.data; // Expecting updated cart data from the API
    } catch (error: any) {
      handleApiError(error);
      return rejectWithValue(
        error.response.data || "Failed to remove item from cart"
      );
    }
  }
);

// Fetch the cart items from API
export const fetchCart = createAsyncThunk(
  "cart/fetchCart",
  async (_, { getState, rejectWithValue }) => {
    try {
      const token = (getState() as RootState).auth.user.token; // Get the token from the auth state
      const response = await axiosInstance.get("/cart", { headers: { token } });
      return response.data;
    } catch (error: any) {
      handleApiError(error);
      return rejectWithValue(error.response.data || "Failed to fetch cart");
    }
  }
);

// Increment product quantity in cart
export const incrementItemQuantity = createAsyncThunk(
  "cart/incrementItemQuantity",
  async (item: { productId: number }, { getState, rejectWithValue }) => {
    try {
      const token = (getState() as RootState).auth.user.token; // Get the token from the auth state
      const response = await axiosInstance.post(
        "/cart/add",
        {
          ...item,
          quantity: 1, // Always increment by 1
        },
        { headers: { token } }
      );
      return response.data; // Return the updated cart data
    } catch (error: any) {
      handleApiError(error);
      return rejectWithValue(
        error.response.data || "Failed to increment quantity"
      );
    }
  }
);
// Decrement product quantity in cart
export const decrementItemQuantity = createAsyncThunk(
  "cart/decrementItemQuantity",
  async (
    item: { productId: number; quantity: number },
    { getState, rejectWithValue }
  ) => {
    // Prevent decrementing quantity below 1
    if (item.quantity === 1) {
      return rejectWithValue("Cannot decrease quantity below 1");
    }

    try {
      const token = (getState() as RootState).auth.user.token; // Get the token from the auth state
      const response = await axiosInstance.post(
        "/cart/add",
        {
          ...item,
          quantity: item.quantity - 1, // Decrease by 1
        },
        { headers: { token } }
      );
      return response.data; // Return updated cart data
    } catch (error: any) {
      handleApiError(error);
      return rejectWithValue(
        error.response.data || "Failed to decrement quantity"
      );
    }
  }
);

interface CartState {
  items: CartItem[];
  loading: boolean;
  error: string | null;
}

const initialState: CartState = {
  items: [],
  loading: false,
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToLocalCart: (state, action: PayloadAction<CartItem[]>) => {
      // Check if the item already exists in the local cart

      state.items = action.payload; // Push new item if it doesn't exist
    },
    clearLocalCart: (state) => {
      state.items = []; // Clear the local cart
    },
  },
  extraReducers: (builder) => {
    builder.addCase("auth/logout", () => initialState);
    // Add item to cart
    builder.addCase(addItemToCart.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      addItemToCart.fulfilled,
      (state, action: PayloadAction<CartItem[]>) => {
        state.loading = false;

        state.items = action.payload; // Update the cart items from the response
      }
    );
    builder.addCase(addItemToCart.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });

    // Remove item from cart
    builder.addCase(removeItemFromCart.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      removeItemFromCart.fulfilled,
      (state, action: PayloadAction<CartItem[]>) => {
        state.loading = false;
        state.items = action.payload;
      }
    );
    builder.addCase(removeItemFromCart.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });

    // Fetch cart
    builder.addCase(fetchCart.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchCart.fulfilled,
      (state, action: PayloadAction<CartItem[]>) => {
        state.loading = false;
        state.items = action.payload;
      }
    );
    builder.addCase(fetchCart.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
    // Increment item quantity
    builder.addCase(incrementItemQuantity.fulfilled, (state, action) => {
      state.items = action.payload;
    });
    builder.addCase(incrementItemQuantity.rejected, (state, action) => {
      state.error = action.payload as string;
    });

    // Decrement item quantity
    builder.addCase(decrementItemQuantity.fulfilled, (state, action) => {
      state.items = action.payload;
    });
    builder.addCase(decrementItemQuantity.rejected, (state, action) => {
      state.error = action.payload as string;
    });
  },
});
export const { addItemToLocalCart, clearLocalCart } = cartSlice.actions;
export default cartSlice.reducer;
