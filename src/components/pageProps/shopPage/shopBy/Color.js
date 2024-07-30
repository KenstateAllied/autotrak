import React, { useState } from "react";
import { motion } from "framer-motion";
import NavTitle from "./NavTitle";

const Loc = () => {
  const [showColors, setShowColors] = useState(true);
  const Location = [
    {
      _id: 9001,
      title: "North Rift",
      base: "#22c55e",
    },
    {
      _id: 9002,
      title: "South Rift",
      base: "#a3a3a3",
    },
    {
      _id: 9003,
      title: "Nyanza - Western",
      base: "#dc2626",
    },
    {
      _id: 9004,
      title: "Central",
      base: "#f59e0b",
    },
    {
      _id: 9005,
      title: "Nairobi",
      base: "#3b82f6",
    },
  ];

  return (
    <div>
      <div
        onClick={() => setShowColors(!showColors)}
        className="cursor-pointer"
      >
        <NavTitle title="Shop by Region" icons={true} />
      </div>
      {showColors && (
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <ul className="flex flex-col gap-4 text-sm lg:text-base text-[#767676]">
            {Location.map((item) => (
              <li
                key={item._id}
                className="border-b-[1px] border-b-[#F0F0F0] pb-2 flex items-center gap-2"
              >
                <span
                  style={{ background: item.base }}
                  className={`w-3 h-3 bg-gray-500 rounded-full`}
                ></span>
                {item.title}
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default Loc;
