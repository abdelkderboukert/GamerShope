"use client";
import React from "react";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { IonIcon } from "@ionic/react";
import { checkmarkSharp, carSportSharp, bedSharp, pricetagsSharp, informationCircle } from "ionicons/icons";
import { motion } from "framer-motion";

export default function HomePage() {
  const divRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<number>(0);
  const [test, settest] = useState<boolean>(true);
  console.log(width);

  useEffect(() => {
    const handleResize = () => {
      if (divRef.current) {
        const newWidth = divRef.current.offsetWidth;
        setWidth(newWidth);
        if ((newWidth as number) < 140) {
          settest(false);
        } else {
          settest(true);
        }
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [divRef]);
  return (
    <>
      <div className="flex flex-col h-screen w-screen items-center" id="home">
        <div className="w-screen h-5/6 bg-p1">
          <div className="flex flex-col h-full w-full p-10">
            <div className="flex w-max h-max mt-6 justify-center select-none items-center mx-auto font-bold playwrite-pe-f1 text-2xl sm:text-5xl lg:text-7xl text-white text-center">
              Your perfect PC <br /> is waiting for you
            </div>
            <div className="flex w-3/5 h-max mt-5 justify-center items-center mx-auto select-none text-zinc-300 text-center">
              we have more thant 200k proportion around the <br /> world to show
              you
            </div>
            <Link
              href="./#us"
              className="h-12 w-40 bg-white mx-auto mt-4 rounded-xl items-center justify-center flex text-black"
            >
              Explore mores
            </Link>
          </div>
        </div>
      </div>

      <section
        className="h-screen w-screen p-5 grid grid-cols-1 sm:grid-cols-5 gap-3"
        id="gg"
      >
        <div className="sm:col-span-2 gap-3 flex justify-end items-center">
          <div
            className="lg:w-5/6 w-full aspect-square rounded-3xl shadow-xl bg-p2"
            content=""
          ></div>
        </div>
        <div className="sm:col-span-3 gap-3 flex justify-center flex-col p-5">
          <h1 className="lg:text-5xl md:text-3xl font-semibold text-black">
            We are the best and most <br />
            trusted{" "}
            <span className="text-[#868faa] font-semibold">
              Gaming Shoop
            </span>{" "}
          </h1>
          <span className="flex w-3/5 h-max select-none text-zinc-500 text-start lg:text-xl ">
            we&#39;ve&nbsp;holped&nbsp;a&nbsp;lot&nbsp;of&nbsp;peaple&nbsp;to&nbsp;finde&nbsp;there&nbsp;droom&nbsp;PC&nbsp;Gamer
          </span>
          <div
            className="w-full h-2/5 py-5 font-bold text-zinc-700 text-xl"
            content=""
          >
            <span className="flex flex-row">
              <div className=" flex justify-center items-center h-7 w-7 rounded-full bg-black mr-2 text-white font-bold">
                <IonIcon icon={checkmarkSharp} />
              </div>
              678k buys have worked with us
            </span>
            <br />
            <span className="flex flex-row">
              <div className=" flex justify-center items-center h-7 w-7 rounded-full bg-red-400 mr-2 text-white font-bold">
                <IonIcon icon={checkmarkSharp} />
              </div>
              Professional and expaircced rosources
            </span>
            <br />
            <span className="flex flex-row">
              <div className=" flex justify-center items-center h-7 w-7 rounded-full bg-blue-700 mr-2 text-white font-bold">
                <IonIcon icon={checkmarkSharp} />
              </div>
              Provide the best service of users
            </span>
            <br />
          </div>
        </div>
      </section>

      <section className="lg:h-screen h-full w-screen">
        <br />
        <h1 className="flex justify-center mx-auto mt-5 lg:text-7xl md:text-4xl text-[#0e012d] font-semibold">
          Special&nbsp;Homes
        </h1>
        <div className="flex w-full h-max mt-5 justify-center items-center mx-auto select-none text-zinc-400 text-center text-xl">
          Find your place with on immorsive photo exporience and the most <br />{" "}
          things listing inckoding things want find anywhere else
        </div>
        <div
          className=" grid grid-flow-row px-28 md:grid-cols-2 lg:grid-cols-3 p-10 gap-16 lg:gap-12 w-screen h-max"
          content=""
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            //@ts-expect-error i dont know the error type
            className="h-96 w-full bg-white rounded-xl shadow-2xl flex flex-col"
          >
            <div className="w-full h-3/6 bg-yellow-400 rounded-t-xl"></div>
            <div className="w-full h-1/2 rounded-b-xl flex flex-col">
              <div className="h-16 w-full flex flex-row">
                <h1 className="w-2/3 h-10 text-2xl lg:text-3xl ml-5 mt-2 font-semibold text-zinc-700">
                  $5,000,000 <br />
                  <span className=" relative -top-5 text-xs lg:text-sm text-zinc-400 leading-relaxed font-normal">
                    dgbsdgb sfgnsfgn gnbdqgbsd
                  </span>
                </h1>
                <div className="flex w-1/3 h-10 bg-red-400 mt-2 mr-5 mb-auto ml-auto rounded-2xl justify-center items-center text-white">
                  {/* <Link
                    // href="/shope/[id]"
                    // as={`/shope/${plant.category}/${plant.id}`}
                  > */}
                  View detai
                  {/* </Link> */}
                </div>
              </div>
              <div className=" grid grid-flow-row grid-cols-2 grid-rows-2 h-[calc(100%_-_64px)] w-full px-3 py-3">
                <div
                  ref={divRef}
                  className="flex items-center px-2 h-7 w-[95%] text-zinc-400"
                >
                  <span className="text-black text-xl mr-2">
                    <IonIcon icon={carSportSharp} />
                  </span>
                  2{test && <span>&nbsp;grage&nbsp;spice</span>}
                </div>
                <div className="h-7 w-[95%] text-zinc-400 flex flex-row">
                  <span className="text-black text-xl mr-2">
                    <IonIcon icon={bedSharp} />
                  </span>
                  3{test && <span>&nbsp;badroom&nbsp;chamber</span>}
                </div>
                <div className="h-7 w-[95%] text-zinc-400 flex flex-row">
                  <span className="text-black text-xl mr-2">
                    <IonIcon icon={bedSharp} />
                  </span>
                  3{test && <span>&nbsp;badroom&nbsp;chamber</span>}
                </div>
              </div>
              <button className="flex w-1/2 h-12 bg-blue-600 mt-auto rounded-br-xl ml-auto justify-center items-center text-white font-semibold">
                View detai
              </button>
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            //@ts-expect-error i dont know the error type
            className="h-96 w-full bg-white rounded-xl shadow-2xl flex flex-col"
          >
            <div className="w-full h-3/6 bg-yellow-400 rounded-t-xl"></div>
            <div className="w-full h-1/2 rounded-b-xl flex flex-col">
              <div className="h-16 w-full flex flex-row">
                <h1 className="w-2/3 h-10 text-2xl lg:text-3xl ml-5 mt-2 font-semibold text-zinc-700">
                  $5,000,000 <br />
                  <span className=" relative -top-5 text-xs lg:text-sm text-zinc-400 leading-relaxed font-normal">
                    dgbsdgb sfgnsfgn gnbdqgbsd
                  </span>
                </h1>
                <div className="flex w-1/3 h-10 bg-red-400 mt-2 mr-5 mb-auto ml-auto rounded-2xl justify-center items-center text-white">
                  {/* <Link
                    href="/shope/[id]"
                    // as={`/shope/${plant.category}/${plant.id}`}
                  > */}
                  View detai
                  {/* </Link> */}
                </div>
              </div>
              <div className=" grid grid-flow-row grid-cols-2 grid-rows-2 h-[calc(100%_-_64px)] w-full px-3 py-3">
                <div
                  ref={divRef}
                  className="flex items-center px-2 h-7 w-[95%] text-zinc-400"
                >
                  <span className="text-black text-xl mr-2">
                    <IonIcon icon={carSportSharp} />
                  </span>
                  2{test && <span>&nbsp;grage&nbsp;spice</span>}
                </div>
                <div className="h-7 w-[95%] text-zinc-400 flex flex-row">
                  <span className="text-black text-xl mr-2">
                    <IonIcon icon={bedSharp} />
                  </span>
                  3{test && <span>&nbsp;badroom&nbsp;chamber</span>}
                </div>
                <div className="h-7 w-[95%] text-zinc-400 flex flex-row">
                  <span className="text-black text-xl mr-2">
                    <IonIcon icon={bedSharp} />
                  </span>
                  3{test && <span>&nbsp;badroom&nbsp;chamber</span>}
                </div>
              </div>
              <button className="flex w-1/2 h-12 bg-blue-600 mt-auto rounded-br-xl ml-auto justify-center items-center text-white font-semibold">
                View detai
              </button>
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            //@ts-expect-error i dont know the error type
            className="h-96 w-full bg-white rounded-xl shadow-2xl flex flex-col"
          >
            <div className="w-full h-3/6 bg-yellow-400 rounded-t-xl"></div>
            <div className="w-full h-1/2 rounded-b-xl flex flex-col">
              <div className="h-16 w-full flex flex-row">
                <h1 className="w-2/3 h-10 text-2xl lg:text-3xl ml-5 mt-2 font-semibold text-zinc-700">
                  $5,000,000 <br />
                  <span className=" relative -top-5 text-xs lg:text-sm text-zinc-400 leading-relaxed font-normal">
                    dgbsdgb sfgnsfgn gnbdqgbsd
                  </span>
                </h1>
                <div className="flex w-1/3 h-10 bg-red-400 mt-2 mr-5 mb-auto ml-auto rounded-2xl justify-center items-center text-white">
                  {/* <Link
                    href="/shope/[id]"
                    // as={`/shope/${plant.category}/${plant.id}`}
                  > */}
                  View detai
                  {/* </Link> */}
                </div>
              </div>
              <div className=" grid grid-flow-row grid-cols-2 grid-rows-2 h-[calc(100%_-_64px)] w-full px-3 py-3">
                <div
                  ref={divRef}
                  className="flex items-center px-2 h-7 w-[95%] text-zinc-400"
                >
                  <span className="text-black text-xl mr-2">
                    <IonIcon icon={carSportSharp} />
                  </span>
                  2{test && <span>&nbsp;grage&nbsp;spice</span>}
                </div>
                <div className="h-7 w-[95%] text-zinc-400 flex flex-row">
                  <span className="text-black text-xl mr-2">
                    <IonIcon icon={bedSharp} />
                  </span>
                  3{test && <span>&nbsp;badroom&nbsp;chamber</span>}
                </div>
                <div className="h-7 w-[95%] text-zinc-400 flex flex-row">
                  <span className="text-black text-xl mr-2">
                    <IonIcon icon={bedSharp} />
                  </span>
                  3{test && <span>&nbsp;badroom&nbsp;chamber</span>}
                </div>
              </div>
              <button className="flex w-1/2 h-12 bg-blue-600 mt-auto rounded-br-xl ml-auto justify-center items-center text-white font-semibold">
                View detai
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="lg:h-screen h-full w-screen mb-10" id="service">
        <br />
        <br />
        <h1 className="flex mt-14 justify-center mx-auto lg:text-7xl md:text-4xl text-[#0e012d] font-semibold">
          Our&nbsp;Services
        </h1>
        <div className="flex w-full h-max mt-5 justify-center items-center mx-auto select-none text-zinc-400 text-center text-xl">
          Find your PC with on immorsive photo exporience and the most <br />{" "}
          things listing inckoding things want find anywhere else
        </div>
        <div
          className=" grid grid-flow-row px-28 md:grid-cols-2 lg:grid-cols-3 p-10 gap-16 lg:gap-12 w-screen h-max"
          content=""
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            //@ts-expect-error i dont know the error type
            className="h-96 w-full flex flex-col"
          >
            <div className="flex w-full h-3/6 rounded-t-xl justify-center items-center">
              <div className="w-36 h-36 bg-purple-200 rounded-full flex justify-center items-center text-7xl text-purple-900 ">
                {/* <div className="h-20 w-20 bg-purple-900"></div> */}
                <IonIcon icon={informationCircle} />
              </div>
            </div>
            <h1 className="text-2xl font-semibold mx-auto text-black">
              BUILD HELP
            </h1>
            <br />
            <span className="text-center text-zinc-400">
              {" "}
              Get expert advice for selecting components and building your PC
              efficiently
            </span>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            //@ts-expect-error i dont know the error type
            className="h-96 w-full rounded-xl flex flex-col border-black"
          >
            <div className="flex w-full h-3/6 rounded-t-xl justify-center items-center">
              <div className="w-36 h-36 bg-blue-200 rounded-full flex justify-center items-center text-7xl text-blue-900 ">
                {/* <div className="h-20 w-20 bg-blue-900"></div> */}
                <IonIcon icon={pricetagsSharp} />
              </div>
            </div>
            <h1 className="text-2xl font-semibold mx-auto text-black">MERCH</h1>
            <br />
            <span className="text-center text-zinc-400">
              {" "}
              Explore exclusive merch to showcase your style and support your
              passion
            </span>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            //@ts-expect-error i dont know the error type
            className="h-96 w-full rounded-xl flex flex-col"
          >
            <div className="flex w-full h-3/6 rounded-t-xl justify-center items-center">
              <div className="w-36 h-36 bg-orange-200 rounded-full flex justify-center items-center ">
                {/* <div className="h-20 w-20 bg-amber-600"></div> */}
                <svg xmlns="http://www.w3.org/2000/svg" height="72px" viewBox="0 -960 960 960" width="72px" fill="#d97706"><path d="M768-120 517-371l57-57 251 251-57 57Zm-581 0-57-57 290-290-107-107-23 23-44-44v85l-24 24-122-122 24-24h86l-48-48 131-131q17-17 37-23t44-6q24 0 44 8.5t37 25.5L348-699l48 48-24 24 104 104 122-122q-8-13-12.5-30t-4.5-36q0-53 38.5-91.5T711-841q15 0 25.5 3t17.5 8l-85 85 75 75 85-85q5 8 8.5 19.5T841-709q0 53-38.5 91.5T711-579q-18 0-31-2.5t-24-7.5L187-120Z"/></svg>
              </div>
            </div>
            <h1 className="text-2xl font-semibold mx-auto text-black">
              PC BUILDS
            </h1>
            <br />
            <span className="text-center text-zinc-400">
              {" "}
              Building a PC offers customization, performance, and value for
              gamers.
            </span>
          </motion.div>
        </div>
      </section>

      <section className="lg:h-screen h-full w-screen bg-[#d0cae6] flex justify-center items-center">
        <video
          controls
          //@ts-expect-error i don't know
          src={null}
          className="w-[90%] h-[90%] aspect-auto"
        ></video>
      </section>

      <section className=" h-min w-screen" id="blog">
        <br />
        <h1 className="flex justify-center mx-auto mt-5 lg:text-7xl md:text-4xl text-[#0e012d] font-semibold">
          Our&nbsp;best&nbsp;blogs
        </h1>
        <div
          className="grid grid-flow-row px-28 grid-cols-1 lg:grid-cols-2 p-10 gap-16 lg:gap-12 w-screen h-max"
          content=""
        >
          <div className="h-max w-full flex flex-col">
            <div className="w-full h-48 p-5 flex flex-row">
              <div className="w-1/4 h-full bg-black rounded-2xl"></div>
              <div className="w-3/4 h-full flex flex-col p-3">
                <h1 className="text-black text-xl font-semibold">
                  dfbsdbsdgbgbsdb dbsdbsdb dbdqbd sgb dg edgbr gbeg
                </h1>
                <br />
                <span className="text-zinc-500">
                  dggbsd dgbdsg fgbzeb gbzeb etgzeb bebrgb ebgebg dbggb gbrgnb
                  sdgbebg sdgbgb dbdb dbb dgbsdg{" "}
                </span>
              </div>
            </div>
            <div className="w-full h-48 p-5 flex flex-row">
              <div className="w-1/4 h-full bg-black rounded-2xl"></div>
              <div className="w-3/4 h-full flex flex-col p-3">
                <h1 className="text-black text-xl font-semibold">
                  dfbsdbsdgbgbsdb dbsdbsdb dbdqbd sgb dg edgbr gbeg
                </h1>
                <br />
                <span className="text-zinc-500">
                  dggbsd dgbdsg fgbzeb gbzeb etgzeb bebrgb ebgebg dbggb gbrgnb
                  sdgbebg sdgbgb dbdb dbb dgbsdg{" "}
                </span>
              </div>
            </div>
            <div className="w-full h-48 p-5 flex flex-row">
              <div className="w-1/4 h-full bg-black rounded-2xl"></div>
              <div className="w-3/4 h-full flex flex-col p-3">
                <h1 className="text-black text-xl font-semibold">
                  dfbsdbsdgbgbsdb dbsdbsdb dbdqbd sgb dg edgbr gbeg
                </h1>
                <br />
                <span className="text-zinc-500">
                  dggbsd dgbdsg fgbzeb gbzeb etgzeb bebrgb ebgebg dbggb gbrgnb
                  sdgbebg sdgbgb dbdb dbb dgbsdg{" "}
                </span>
              </div>
            </div>
          </div>
          <div className="h-[576px] w-full bg-white rounded-3xl shadow-2xl bg-p3"></div>
        </div>
      </section>

      <section
        className="lg:h-screen w-screen grid grid-flow-row px-28 grid-cols-1 lg:grid-cols-2 p-10 gap-16 lg:gap-12"
        id="us"
      >
        <div className=" relative h-full w-full bg-white rounded-3xl shadow-2xl bg-p4 ">
          <motion.div
            whileHover={{
              width: "100%",
              height: "100%",
              bottom: 0,
              right: 0,
              border: 0,
            }}
            //@ts-expect-error i don't know
            className="absolute bottom-14 -right-12 w-72 h-48 rounded-2xl border-white border-4 bg-black bg-p5"
            content=" "
          ></motion.div>
        </div>
        <div className="h-full w-full flex justify-center text-black p-10 flex-col">
          <span className="text-6xl font-semibold flex justify-start">
            Why
            <br />
            choose&nbsp;Us{" "}
          </span>
          <span className="text-zinc-500 my-5">
            {" "}
            some bla bla abiut choosing us for your buying and stoll your mony i
            mean give you the best choise what did you mean i will not do that
            aver are u{" "}
          </span>
          <motion.div
            whileHover={{ scale: 0.97 }}
            //@ts-expect-error i don't know
            className="w-1/2 h-16 bg-red-500 rounded-2xl cursor-pointer shadow-2xl text-xl text-white"
          >
            <Link
              href={""}
              className="h-full w-full flex justify-center items-center"
            >
              Read&nbsp;More
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
