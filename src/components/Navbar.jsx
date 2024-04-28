import React, { useEffect, useState } from "react";
import { IoBag } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { PiShoppingBagFill } from "react-icons/pi";

function Navbar() {
  const cartItems = useSelector((state) => state.cart.cart);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let sum = 0;
    cartItems.map((item) => (sum += item.qty));
    setTotal(sum);
  }, [cartItems]);

  return (
    <div className="w-full  bg-white fixed top-0 left-0 right-0 z-[999] flex items-center justify-between gap-5 px-5 sm:px-10 py-3 border-b-[1px] border-zinc-300">
      <div className="flex items-center gap-5 lg:gap-8">
      <PiShoppingBagFill size={50} />
        <Link
          to="/"
          className="text-xl font-semibold  transition-all ease-in-out"
        >
          Products
        </Link>
        
      </div>
      <div className="flex items-center gap-5 lg:gap-10">
        
        <Link
          to="/cart"
          className=" bg-zinc-900 px-3 py-2 rounded-lg  text-white lg:text-xl font-semibold flex items-center gap-2"
        >
          <IoBag />
          <p className="">({total})</p>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
