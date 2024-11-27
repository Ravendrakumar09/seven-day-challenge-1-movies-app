import React from "react";
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";
import { FaPlus } from "react-icons/fa";
import BannerImg from "../../../public/posterdesign.png";

export default function mainbar() {
  return (
    <div className="flex flex-col w-full">
      <div className="flex gap-5 m-2">
        <span className="text-pink-500">Movies</span>
        <span className="font-bold">TV Show</span>
        <span className="text-pink-500">Anime</span>
      </div>
      <div
        className="flex border border-black m-2 h-72 rounded-sm"
        style={{
          backgroundImage: `url(${BannerImg.src})`,
          backgroundSize: "cover",
        }}
      >
        <div className="flex h-10 mt-40 ml-10 gap-2">
          <button className="flex bg-red-900 p-2 w-40 justify-center text-white rounded-sm ">
            Watch Now
          </button>
          <button className="flex bg-slate-600 p-3 w-10 justify-center text-white rounded-sm">
            <FaPlus />
          </button>
        </div>
      </div>
      <div className="flex m-2 justify-between">
        <span className="p-2 font-bold">Now Playing</span>
        <div className="flex p-2 gap-2 ">
          <span>
            <IoIosArrowDropleft size={20} />{" "}
          </span>
          <span>
            {" "}
            <IoIosArrowDropright size={20} />{" "}
          </span>
        </div>
      </div>
      <div className="flex m-2 ">
        <ul className="flex flex-row gap-2 h-40 justify-evenly w-full">
          <li
            className="flex border border-black w-1/4 justify-center"
            style={{
              backgroundImage: `url(${BannerImg.src})`,
              backgroundSize: "cover",
            }}
          >
            <div className="flex flex-col justify-around">
              <div className="flex ml-36 ">
                <button className="flex bg-slate-600 p-2 justify-center w-10 h-8  text-white rounded-sm">
                  <FaPlus />
                </button>
              </div>
              <div className="flex justify-center mt-20">
                <button className="flex bg-red-900 p-1 h-8 text-white w-36 justify-center ">
                  Watch Now
                </button>
              </div>
            </div>
          </li>
          <li
            className="flex border border-black w-1/4 "
            style={{
              backgroundImage: `url(${BannerImg.src})`,
              backgroundSize: "cover",
            }}
          >
            <div className="flex flex-col justify-around">
              <div className="flex ml-36 ">
                <button className="flex bg-slate-600 p-2 justify-center w-10 h-8  text-white rounded-sm">
                  <FaPlus />
                </button>
              </div>
              <div className="flex justify-center mt-20">
                <button className="flex bg-red-900 p-1 h-8 text-white w-36 justify-center ">
                  Watch Now
                </button>
              </div>
            </div>
          </li>
          <li
            className="flex border border-black w-1/4 "
            style={{
              backgroundImage: `url(${BannerImg.src})`,
              backgroundSize: "cover",
            }}
          >
            <div className="flex flex-col justify-around">
              <div className="flex ml-36 ">
                <button className="flex bg-slate-600 p-2 justify-center w-10 h-8  text-white rounded-sm">
                  <FaPlus />
                </button>
              </div>
              <div className="flex justify-center mt-20">
                <button className="flex bg-red-900 p-1 h-8 text-white w-36 justify-center ">
                  Watch Now
                </button>
              </div>
            </div>
          </li>
          <li
            className="flex border border-black w-1/4 "
            style={{
              backgroundImage: `url(${BannerImg.src})`,
              backgroundSize: "cover",
            }}
          >
            <div className="flex flex-col justify-around">
              <div className="flex ml-36 ">
                <button className="flex bg-slate-600 p-2 justify-center w-10 h-8  text-white rounded-sm">
                  <FaPlus />
                </button>
              </div>
              <div className="flex justify-center mt-20">
                <button className="flex bg-red-900 p-1 h-8 text-white w-36 justify-center ">
                  Watch Now
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div className="flex  m-2 justify-between ">
        <span className="p-2 font-bold">Top Rated Movie</span>
        <div className="flex p-2 gap-2">
          <span>
            <IoIosArrowDropleft size={20} />{" "}
          </span>
          <span>
            {" "}
            <IoIosArrowDropright size={20} />{" "}
          </span>
        </div>
      </div>
      <div className="flex m-2">
        <ul className="flex flex-row gap-2 h-40 justify-evenly w-full text-white">
          <li
            className="flex border border-black w-1/4"
            style={{
              backgroundImage: `url(${BannerImg.src})`,
              backgroundSize: "cover",
            }}
          ></li>
          <li
            className="flex border border-black w-1/4"
            style={{
              backgroundImage: `url(${BannerImg.src})`,
              backgroundSize: "cover",
            }}
          ></li>
          <li
            className="flex border border-black w-1/4"
            style={{
              backgroundImage: `url(${BannerImg.src})`,
              backgroundSize: "cover",
            }}
          ></li>
          <li
            className="flex border border-black w-1/4"
            style={{
              backgroundImage: `url(${BannerImg.src})`,
              backgroundSize: "cover",
            }}
          ></li>
        </ul>
      </div>
    </div>
  );
}
