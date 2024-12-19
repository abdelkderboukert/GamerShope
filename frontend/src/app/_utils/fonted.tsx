import React from "react";

export default function Fonted() {
  return (
    <section
      className="w-dvw h-full lg:h-96 bg-slate-500 p-5 lg:p-10 grid grid-flow-row px-28 grid-cols-1 lg:grid-cols-4 gap-16 lg:gap-12"
      content=" "
    >
      <div className="h-full w-full flex flex-col justify-center">
        <div className="h-max w-48 flex justify-center items-center flex-row">
          <div className="h-12 w-20 bg-logo"></div>
          <span className="text-[#0e012d] font-semibold text-xl protest-strike-regular">
            &nbsp;Shope
          </span>
        </div>
        <span className="text-blue-950 my-5">
          {" "}
          Welcome to my website, the official home for Zach&apos;s Tech Turf! Here
          you&apos;ll find my Gaming PC builds to purchase, free PC building
          resources, ZTT merchandise, and more. ​ Zach&apos;s Tech Turf is a
          technology channel on YouTube, but I&apos;m sure you knew that already! I
          started this channel for one simple reason, I&apos;m addicted to helping
          people with technological needs!
        </span>
      </div>
      <div className="h-full w-full bg-white flex flex-col"></div>
      <div className="h-full w-full bg-white flex flex-col"></div>
      <div className="h-full w-full bg-white flex flex-col"></div>
    </section>
  );
}
