import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  bestSellerOne,
  bestSellerTwo,
  bestSellerThree,
  bestSellerFour,
} from "../../../assets/images/index";

const BestSellers = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="Top Deals on Market" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <Product
          _id="1011"
          img={bestSellerOne}
          productName="International Baler 440"
          price="700000"
          color="Red"
          badge={true}
          des="Great Baler"
        />
        <Product
          _id="1012"
          img={bestSellerTwo}
          productName="Ndume Mill"
          price="180000"
          color="Yellow"
          badge={false}
          des="Perfect for Dry & Wet Feeds"
        />
        <Product
          _id="1013"
          img={bestSellerThree}
          productName="Forager"
          price="450000"
          color="Red"
          badge={true}
          des="PTO Driven on good speed"
        />
        <Product
          _id="1014"
          img={bestSellerFour}
          productName="Baldan Planter"
          price="550000"
          color="Red"
          badge={false}
          des="Like New"
        />
      </div>
    </div>
  );
};

export default BestSellers;
