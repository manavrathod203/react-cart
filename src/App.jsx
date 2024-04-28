import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Success from "./pages/Success";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import toast, { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/cart" Component={Cart} />
            <Route path="/success" Component={Success} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
