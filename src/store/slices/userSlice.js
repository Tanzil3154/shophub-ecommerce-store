import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isAuthenticated: false,
    user: null,
    orders: [],
  },
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
    addOrder: (state, action) => {
      state.orders.push(action.payload);
    },
  },
});

export const { login, logout, addOrder } = userSlice.actions;
export default userSlice.reducer;
