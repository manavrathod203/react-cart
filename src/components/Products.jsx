import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import ElectronicsData from "../data/ElectronicsData";

function Products() {
  const [category, setCategory] = useState([]);
  const [select, setSelect] = useState("all");

  const uniqueCategories = () => {
    const uniqueCategories = [
      ...new Set(ElectronicsData.map((item) => item.category)),
    ];
    setCategory(uniqueCategories);
  };

  useEffect(() => {
    uniqueCategories();
  }, []);

  return (
    <div className="w-full bg-white min-h-screen pt-28 px-2 sm:px-10">
      <div className="flex flex-col gap-2">
        <h2 className="text-black font-semibold text-xl uppercase">
          Shop by category
        </h2>
        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={() => setSelect("all")}
            className={`bg-zinc-200 px-3 py-2 md:px-4 md:py-2 text-sm rounded-lg font-semibold ${
              select === 'all' ? "bg-green-500 text-white" : "bg-zinc-200 hover:bg-zinc-300"
            } `}
          >
            All
          </button>
          {category.map((item, index) => (
            <button
              key={index}
              onClick={() => setSelect(item)}
              className={`bg-zinc-200 px-3 py-2 md:px-4 md:py-2 text-sm rounded-lg font-semibold ${
                select === item ? "bg-green-500 text-white" : "bg-zinc-200 hover:bg-zinc-300"
              } `}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-5 flex items-center justify-start flex-wrap gap-5">
        {ElectronicsData.map((item) => {
          if (select === "all" || select === item.category) {
            return (
              <ProductCard
                id={item.id}
                img={item.img}
                name={item.name}
                price={item.price}
                key={item.id}
              />
            );
          }
        })}
      </div>
    </div>
  );
}

export default Products;
