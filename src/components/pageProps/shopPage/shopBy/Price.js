import React from "react";
import NavTitle from "./NavTitle";

const Price = () => {
  const priceList = [
    {
      _id: 950,
      priceOne: 0,
      priceTwo: 400000,
    },
    {
      _id: 951,
      priceOne: 400001,
      priceTwo: 1000000,
    },
    {
      _id: 952,
      priceOne: 1000001,
      priceTwo: 1500000,
    },
    {
      _id: 953,
      priceOne: 1500001,
      priceTwo: 2000000,
    },
    {
      _id: 954,
      priceOne: 2000001,
      priceTwo: 3000000,
    },
    {
      _id: 955,
      priceOne: 3000001,
      priceTwo: 5000000,
    },
  ];
  return (
    <div className="cursor-pointer">
      <NavTitle title="Shop by Price" icons={false} />
      <div className="font-titleFont">
        <ul className="flex flex-col gap-4 text-sm lg:text-base text-[#767676]">
          {priceList.map((item) => (
            <li
              key={item._id}
              className="border-b-[1px] border-b-[#F0F0F0] pb-2 flex items-center gap-2 hover:text-primeColor hover:border-gray-400 duration-300"
            >
              kshs{item.priceOne.toFixed(2)} - kshs{item.priceTwo.toFixed(2)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Price;
