import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  bestSellerOne,
  bestSellerTwo,
  bestSellerThree,
  bestSellerFour,
} from "../../../assets/images/index";


function BestSellers() {
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
          des="Great Baler" />
        <Product
          _id="1012"
          img={bestSellerTwo}
          productName="Ndume Mill"
          price="180000"
          color="Yellow"
          badge={false}
          des="Perfect for Dry & Wet Feeds" />
        <Product
          _id="1013"
          img={bestSellerThree}
          productName="Forager"
          price="450000"
          color="Red"
          badge={true}
          des="PTO Driven on good speed" />
        <Product
          _id="1014"
          img={bestSellerFour}
          productName="Baldan Planter"
          price="550000"
          color="Red"
          badge={false}
          des="Like New" />
      </div>
    </div>
  );
}

export default BestSellers;


/*

import React from "react";
import Slider from "react-slick";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  newArrOne,
  newArrTwo,
  newArrThree,
  newArrFour,
} from "../../../assets/images/index";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";

const NewArrivals = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className="w-full pb-16">
      <Heading heading="New Arrivals to the Market" />
      <Slider {...settings}>
        <div className="px-2">
          <Product
            _id="100001"
            img={newArrOne}
            productName="Massey 240"
            price="550000"
            color="Red"
            badge={true}
            des="Clean Everything Works."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100002"
            img={newArrTwo}
            productName="New Holland TT75"
            price="1000000"
            color="Blue"
            badge={true}
            des="Single Working."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100003"
            img={newArrThree}
            productName="Tipping Trailer"
            price="800000"
            color="Blue"
            badge={true}
            des="15 Ton TW."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100004"
            img={newArrFour}
            productName="Deere Forager"
            price="6000000"
            color="Green"
            badge={false}
            des="Import, all working"
          />
        </div>
        <div className="px-2">
          <Product
            _id="100005"
            img={newArrTwo}
            productName="New Holland TT75"
            price="60.00"
            color="Mixed"
            badge={false}
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
          />
        </div>
      </Slider>
    </div>
  );
};

export default NewArrivals;

*/