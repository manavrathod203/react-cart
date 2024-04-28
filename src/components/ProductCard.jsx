import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/Slices/CartSlice";
import toast, { Toaster } from "react-hot-toast";



function ProductCard(props) {
  const dispatch = useDispatch();
  return (
    <div className="group  flex w-full md:max-w-[48%] lg:max-w-xs flex-col overflow-hidden rounded-lg border border-zinc-300 bg-white ">
      <div className="mx-3 mt-3 flex h-60 overflow-hidden rounded-xl">
        <img
          className="h-full w-full object-contain"
          src={props.img}
          alt="product image"
        />
      </div>
      <div className="mt-4 px-5 pb-5">
        <h5 className="text-xl tracking-tight text-slate-900">{props.name}</h5>

        <div className="mt-2 mb-5 flex items-center justify-between">
          <p>
            <span className="text-3xl font-bold text-slate-900">
              ${props.price}
            </span>
          </p>
        </div>
        <button
          onClick={() => {
            dispatch(
              addToCart({
                id: props.id,
                name: props.name,
                price: props.price,
                img: props.img,
                qty: 1,
              })
              
            );
            toast.success(`Added ${props.name} to cart`)
          }}
          className="w-full flex items-center justify-center gap-2 rounded-md bg-slate-900 px-5 py-2.5 text-center text-md font-medium text-white hover:bg-gray-700 focus:outline-none "
        >
          <AiOutlineShoppingCart size={18} />
          <p className="">Add to cart</p>
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
