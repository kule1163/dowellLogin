import logo from "./logo.svg";
import "./App.css";
import useDowellLogin from "./useDowellLogin";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Products from "./components/products/Products";

function App() {
  /*   useDowellLogin(); */

  return (
    <Routes>
      {/*  <Route path={"/"} element={<Login />} /> */}
      <Route path={"/"} element={<Products />} />
    </Routes>
  );
}

export default App;
