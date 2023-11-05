import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";
const initialState = {
  isLogin: false,
  user: {
    fName: "",
    lName: "",
    userName: "",
  },
  address: [
    {
      id: uuid(),
      phoneNo: 7894561230,
      street: "Wall street lower manhattam",
      code: 10005,
      city: "New York",
      country: "USA",
    },
  ],
};
const UserSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    setLogin(state, action) {
      state.user.fName = action.payload.fName;
      state.user.lName = action.payload.lName;
      state.user.userName = action.payload.userName;
      state.isLogin = true;
    },
    setLogout(state) {
      state.user.fName = "";
      state.user.lName = "";
      state.user.userName = "";
      state.isLogin = false;
      state.address = [
        {
          id: uuid(),
          phoneNo: 7894561230,
          street: "Wall street lower manhattam",
          code: 10005,
          city: "New York",
          country: "USA",
        },
      ];
    },
    addAddress(state, action) {
      state.address = [...state.address, action.payload];
    },
    removeAddress(state, action) {
      state.address = state.address.filter((val) => val.id !== action.payload);
    },
    editAdress(state, action) {
      console.log(action.payload);
      state.address = state.address.map((addr) =>
        addr.id == action.payload.id ? { ...action.payload } : addr
      );
    },
  },
});
export const { setLogin, addAddress, removeAddress, setLogout, editAdress } =
  UserSlice.actions;
export default UserSlice.reducer;
