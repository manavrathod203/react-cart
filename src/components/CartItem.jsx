import React from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  decreamentQty,
  increamentQty,
  removeFromCart,
} from "../redux/Slices/CartSlice";
import toast, { Toaster } from "react-hot-toast";


function CartItem({ id, img, name, price, qty }) {
  const dispatch = useDispatch();

 
  
  return (
    <>
      
      <div className="border-b border-zinc-300 w-full   py-4 flex gap-4">
        <div className="overflow-hidden rounded-md w-20  h-20  border border-zinc-300">
          <img src={img} alt="" className="w-full h-full object-contain" />
        </div>
        <div className=" w-full flex flex-col justify-between">
          <div className="flex items-start justify-between gap-2">
            <p className="md:text-xl lg:text-lg">{name}</p>

            <p className="md:text-xl lg:text-lg font-semibold">${price}</p>
          </div>
          <div className="flex items-start justify-between gap-8">
            <div className=" flex h-8 items-stretch text-gray-600">
              <button
                onClick={() =>
                  qty > 1 ? dispatch(decreamentQty({ id })) : (qty = 0)
                }
                className="flex items-center justify-center rounded-l-md bg-gray-200 px-4 transition hover:bg-black hover:text-white"
              >
                -
              </button>
              <div className="flex w-full items-center justify-center bg-gray-100 px-4 text-xs uppercase transition">
                {qty}
              </div>
              <button
                onClick={() => {
                  
                  qty >= 1 ? dispatch(increamentQty({ id }))  : (qty = 0)
                }
                }
                className="flex items-center justify-center rounded-r-md bg-gray-200 px-4 transition hover:bg-black hover:text-white"
              >
                +
              </button>
            </div>
            <button
              onClick={() =>
                {dispatch(removeFromCart({ id, img, name, price, qty }))
              toast(`${name} Removed! `, {icon:'👋'})
              }
              }
              className="text-white p-2 rounded-md bg-red-500"
            >
              <MdDelete />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartItem;
