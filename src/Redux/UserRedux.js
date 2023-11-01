// const initialState = {
//   user: {
//     fName: "",
//     lName: "",
//     userName: "",
//   },
//   address: [
//     {
//       id: uuid(),
//       phoneNo: 7894561230,
//       street: "Wall street lower manhattam",
//       code: 10005,
//       city: "New York",
//       country: "USA",
//     },
//   ],
// };
// const UserSlice = {
//   name: "User",
//   initialState,
//   reducers: {
//     setLogin(state) {
//       state.user.fName = action.payload.fName;
//       state.user.lname = action.payload.lname;
//       state.user.userName = action.payload.userName;
//     },
//     addAddress(state) {
//       state.address.push(action.payload);
//     },
//     removeAddress(state) {
//       state.address = state.address.filter((val) => val.id != action.payload);
//     },
//   },
// };
// export const { setLogin, addAddress, removeAddress } = UserSlice.actions;
// export default UserSlice.reducer;
