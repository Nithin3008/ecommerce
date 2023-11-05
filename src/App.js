import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductSummary from "./pages/ProductSummary";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import UserProfile from "./pages/UserProfile";
import Checkout from "./pages/Checkout";
import AuthVerify from "./services/AuthVerify";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <div className="App font-nunito">
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/Login" element={<Login></Login>}></Route>
        <Route path="/Signup" element={<Signup></Signup>}></Route>
        <Route
          path="/ProductSummary/:prodId"
          element={<ProductSummary></ProductSummary>}
        ></Route>
        <Route path="/Products" element={<Product></Product>}></Route>
        <Route
          path="/Cart"
          element={
            <AuthVerify>
              <Cart></Cart>
            </AuthVerify>
          }
        ></Route>
        <Route
          path="/Wishlist"
          element={
            <AuthVerify>
              <Wishlist></Wishlist>
            </AuthVerify>
          }
        ></Route>
        <Route
          path="/Profile"
          element={
            <AuthVerify>
              <UserProfile></UserProfile>
            </AuthVerify>
          }
        ></Route>
        <Route path="/Checkout" element={<Checkout></Checkout>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
