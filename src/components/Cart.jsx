import React, { useEffect, useState } from "react";
import CartItem from "./CartItem";
import { useSelector,useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { clearCart } from "../redux/Slices/CartSlice";


function Cart() {
  const cartItems = useSelector((state) => state.cart.cart);
  const [total, setTotal] = useState(0);
  const [totalamt, setTotalAmt] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    let sum = 0;
    let amt = 0;
    cartItems.map((item) => {
      sum += item.qty;
      amt += item.qty * item.price;
    });
    setTotal(sum);
    setTotalAmt(amt);
  }, [cartItems]);

  return (
    <div className="bg-white w-full h-screen pt-28 pb-10 px-5 sm:px-10  ">
      <h2 className="text-2xl font-semibold uppercase mb-5">
        Your Cart ({total})
      </h2>
      <div className="flex flex-col gap-5 w-full lg:flex-row justify-center lg:gap-20 ">
        <div className="scrollbar flex flex-col w-full lg:w-[40%] h-[60vh] lg:h-[75vh] gap-0 items-start overflow-y-auto pr-5">
          {cartItems.length > 0 ? (
            cartItems.map((item) => {
              return (
                <CartItem
                  id={item.id}
                  key={item.id}
                  name={item.name}
                  price={item.price}
                  img={item.img}
                  qty={item.qty}
                />
              );
            })
          ) : (
            <h2 className="mx-auto text-xl font-semibold mt-40">
              Your cart is empty
            </h2>
          )}
          {/* *-------------------------------------- */}
        </div>

        {cartItems.length > 0 && (
          <div className="flex flex-col w-full md:mt-10 lg:mt-0 md:w-[50%] lg:w-[20%] gap-2  bottom-0">
            <div className="">
              <h2 className="text-xl font-semibold whitespace-nowrap">
                Total items: {total}
              </h2>
              <h2 className="text-xl font-semibold whitespace-nowrap">
                Total Amount: ${totalamt}
              </h2>
            </div>
            <Link onClick={()=>dispatch(clearCart())} to={total !== 0 && '/success'} className="w-full bg-zinc-900 text-white rounded-lg px-3 py-2 text-xl font-semibold">
              Checkout
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
