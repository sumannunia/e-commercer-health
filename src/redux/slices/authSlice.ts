import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axiosInstance";
import { handleApiError } from "../../utils/apiErrorHandler";
import { fetchCart, syncLocalCart } from "./cartSlice";
// import { RootState } from "../store";

const customerFromStorage = localStorage.getItem("customer")
  ? JSON.parse(localStorage.getItem("customer")!)
  : null;

export const loginSeller = createAsyncThunk(
  "auth/loginUser",
  async (userData: any, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/login/seller", userData);
      localStorage.setItem("customer", JSON.stringify(response.data)); // Store user data
      return response.data;
    } catch (error) {
      return rejectWithValue(handleApiError(error)); // Handle errors using reusable error handler
    }
  }
);
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (userData: any, { dispatch, rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/login/customer", userData);
      localStorage.setItem("customer", JSON.stringify(response.data)); // Store user data
      const data = await dispatch(
        fetchUserDetails({ token: response?.data.token, data: response.data })
      ).unwrap();
      console.log({ data });
      await dispatch(syncLocalCart());
      console.log({ data }); // Sync local cart after login
      return response.data;
    } catch (error) {
      return rejectWithValue(handleApiError(error)); // Handle errors using reusable error handler
    }
  }
);

// Async thunk action for registration
export const registerSeller = createAsyncThunk(
  "auth/registerUser",
  async (userData: any, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/register/seller", userData);
      localStorage.setItem("customer", JSON.stringify(response.data));
      return response.data;
    } catch (error) {
      return rejectWithValue(handleApiError(error)); // Use the reusable error handler
    }
  }
);
// Async thunk action for registration
export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (userData: any, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/register/customer", userData);
      localStorage.setItem("customer", JSON.stringify(response.data));
      return response.data;
    } catch (error) {
      return rejectWithValue(handleApiError(error)); // Use the reusable error handler
    }
  }
);

const logoutSession = async (data: { token: string; message?: string }) => {
  try {
    axiosInstance.post("/logout/customer", data).then(() => {
      localStorage.removeItem("customer");
      localStorage.clear();
    });
    axiosInstance.post("/logout/seller", data).then(() => {
      localStorage.removeItem("customer");
      localStorage.clear();
    });
    localStorage.removeItem("customer");
    localStorage.clear();
  } catch (error) {
    console.log({ error });
  }
};

// Fetch user details
export const fetchUserDetails = createAsyncThunk(
  "auth/fetchUserDetails",
  async (data: { token: string; data: any }, { dispatch, rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/customer/current", {
        headers: {
          token: data?.token, // Get token from localStorage
        },
      });
      dispatch(fetchCart());
      const user = { ...data?.data, ...response?.data };
      return user;
    } catch (error) {
      return rejectWithValue(handleApiError(error));
    }
  }
);

interface AuthState {
  loading: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  user: any;
  error: string | null;
}

const initialState: AuthState = {
  loading: false,
  user: customerFromStorage,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      // localStorage.removeItem("customer"); // Clear the customer data from localStorage
      // localStorage.removeItem("token"); // Clear the token if stored separately
      logoutSession({
        token: state?.user?.token,
        message: "Seller/ customer logout",
      });
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Registration failed";
      })
      // Login User Cases
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(fetchUserDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUserDetails.fulfilled, (state, action) => {
        state.loading = false;
        console.log({ action, state: state?.user });
        state.user = { ...state.user, ...action.payload }; // Merge session details and profile data
        localStorage.setItem("customer", JSON.stringify(state.user)); // Update localStorage
      })
      .addCase(fetchUserDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase("auth/logout", () => initialState);
  },
});
export const { logout } = authSlice.actions;
const authReducer = authSlice.reducer;
export default authReducer;

// customer_f036067c;
