import React from "react";
import Header from "../_utils/header";
import Fonted from "../_utils/fonted";
// import Link from 'next/link'

export default function Page() {
  return (
    <div>
      <Header />
      <div className="flex flex-col h-screen w-screen items-center" id="home">
        <div className="w-screen h-full bg-p1">
          <div className="flex flex-col h-full w-full p-10">
            <div className="flex w-max h-max mt-6 justify-center select-none items-center mx-auto font-bold playwrite-pe-f1 text-2xl sm:text-5xl lg:text-7xl text-white text-center gb-shinto">
              Your perfect PC <br /> is waiting for you
            </div>
            <div className="flex w-3/5 h-max mt-5 justify-center items-center mx-auto select-none text-zinc-300 text-center">
              we have more thant 200k proportion around the <br /> world to show
              you
            </div>
            {/* <Link
              href="./#us"
              className="h-12 w-40 bg-white mx-auto mt-4 rounded-xl items-center justify-center flex text-black"
            >
              Explore mores
            </Link> */}
            <div className=" flex relative -left-10 -bottom-11 h-full w-screen flex-row p-4 mr-3">
              <div className="w-1/3 h-full bg-transparent backdrop-blur-md rounded-2xl p-5 ">
                <div className="w-full h-2/3 flex-col text-black">
                  {/* #1a130d */}
                  <span className="flex text-xl">
                    {" "}
                    we help you build your dream PC
                  </span>
                  <span className="flex gb-shinto text-7xl">build pc</span>
                </div>
                <div className="flex w-full h-1/3 bg-slate-50 rounded-full flex-row p-2">
                  <div className=" flex h-full w-4/5 text-black text-2xl justify-star p-5 items-center font-semibold">
                    {" "}
                    Let&apos;s Explore
                  </div>
                  <div className=" flex h-14 w-14 ml-5 mb-9 bg-[#FCCC54] rounded-full"></div>
                </div>
              </div>
              <div className="w-1/3 h-2/3 mt-auto bg-transparent backdrop-blur-md rounded-2xl p-5 ml-3 mr-3 grid-rows-2 gap-3 flex flex-row">
                <div className=" h-full w-full flex flex-col">
                  <div className="h-2/5 w-full text-2xl text-black items-center flex p-5">
                    Complete
                  </div>
                  <div className="h-3/5">
                    <div className="bg-white h-3/5 w-full rounded-t-3xl rounded-br-3xl flex justify-center items-center p-5 text-black font-semibold text-2xl pl-14"> 
                      build
                      <div className=" flex h-9 w-9 ml-5 bg-[#FCCC54] rounded-full"></div>
                    </div>
                    <div className="flex h-2/5 w-full rounded-b-3xl flex-row">
                      <div className="flex bg-white h-full w-1/2 rounded-b-3xl items-center justify-center text-black text-3xl font-semibold">40</div>
                      <div className=" relative h-5 w-5 rounded-tl-3xl shadow-custom"></div>
                    </div>
                    
                    {/* <div className=" relative -right-[43%] -top-[80%] -rotate-[16.8deg] bg-red-400 h-12 w-[54.4%]"></div> */}
                  </div>
                </div>
                <div className=" bg-black h-full w-full"></div>
              </div>
              <div className="w-1/3 h-full bg-transparent rounded-2xl p-5 ">
                <div className="w-full h-2/3 flex-col text-black">
                  {/* #1a130d */}
                  <span className="flex text-xl">
                    {" "}
                    we help our constomer to find the best part
                  </span>
                  <span className="flex gb-shinto text-7xl">ENJOY</span>
                </div>
                <div className="flex w-2/3 h-1/3 bg-slate-50 rounded-full flex-row p-2">
                  <div className=" flex h-full w-4/5 text-black text-2xl justify-star p-5 items-center font-semibold">
                    {" "}
                    Watch
                  </div>
                  <div className=" flex h-14 w-14 mb-9 bg-[#FCCC54] rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Fonted />
    </div>
  );
}
