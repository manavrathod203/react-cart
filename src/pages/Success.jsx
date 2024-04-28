import React from "react";

function Success() {
  return (
    <div className="w-full h-screen flex items-center justify-center text-black">
      <div className="text-center">
        <h1 className="text-xl md:text-4xl font-semibold ">
          Order Successfull!!
        </h1>
        <p className=" text-md md:text-xl">
          Your order has been successfully placed
        </p>
      </div>
    </div>
  );
}

export default Success;
