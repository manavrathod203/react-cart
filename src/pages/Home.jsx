import React, { useState } from "react";

import Products from "../components/Products";

function Home() {
  // const [isCartOpen, setIsCartOpen] = useState(false);
  return (
    <div className="w-full min-h-screen bg-white text-black">
      <Products />
    </div>
  );
}

export default Home;
