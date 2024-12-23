"use client";
import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import Contentt from "./Content"
import Link from "next/link";

export default function Header() {
  // const [isHoverd, setisHoverd] = useState(false);
  const [isHovered, setIsHovered] = useState<boolean[]>(
    new Array(5).fill(false)
  );

  const handleHover = (index: number, value: boolean) => {
    setIsHovered((prevIsHovered) => {
      prevIsHovered[index] = value;
      return [...prevIsHovered];
    });
  };
  return (
    <div className="bg-white flex w-screen h-11 md:h-14 items-center justify-between px-4 sm:px-7 lg:px-12 shadow-lg ">
      <div className="h-full w-48 flex justify-center items-center flex-row">
        <div className="h-12 w-20 bg-logo"></div>
        <span className="text-[#0e012d] font-semibold text-xl protest-strike-regular">
          &nbsp;Shope
        </span>
      </div>
      <div className="h-full w-full items-center justify-center flex flex-row">
        {[
          { name: "Home", url: "#home" },
          { name: "Explore", url: "#us" },
          { name: "Service", url: "#service" },
          { name: "Contacte", url: "#contact" },
          { name: "Blog", url: "#blog" },
          { name: "Shope", url: "shope" },
        ].map((label, index) => (
          <motion.div
            key={index}
            // @ts-expect-error i dont why they show me
            className="text-black mx-2 flex md:mx-4 lg:mx-7 cursor-pointer font-semibold"
            whileHover={{ scale: 1.1 }}
            onMouseEnter={() => handleHover(index, true)}
            onMouseLeave={() => handleHover(index, false)}
          >
            <Link href={`./${label.url}`}>{label.name}</Link>
            {isHovered[index] && (
              <motion.span
              // @ts-expect-error i dont why they show me
                className="line flex absolute bottom-0 left-0 w-full h-1 bg-black rounded-2xl"
                variants={{
                  hover: { width: "100%" },
                  rest: { width: 0 },
                }}
                animate="hover"
                initial="rest"
              />
            )}
          </motion.div>
        ))}
      </div>
      <Contentt/>
    </div>
  );
}
