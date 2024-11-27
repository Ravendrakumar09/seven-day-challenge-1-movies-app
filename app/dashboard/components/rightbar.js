import React from "react";
import { PiDotsThreeBold } from "react-icons/pi";
import BannerImg from "../../../public/posterdesign.png";
import { TiStar } from "react-icons/ti";

export default function rightbar() {
  return (
    <div className="flex flex-col m-2">
      <div className="flex">
        <input
          className="pl-3 bg-blue-200 rounded-full text-white h-8"
          type="text"
          placeholder="🔍 Search"
        />
      </div>
      <div className="flex flex-col my-6">
        <div className="flex py-2 items-center gap-10">
          <span>Popular Movies</span>
          <span>
            <PiDotsThreeBold />
          </span>
        </div>
        <div className="py-2">
          <ul className="flex flex-col gap-5">
            <div className="flex">
              <li
                className="flex w-1/4 justify-center h-20"
                style={{
                  backgroundImage: `url(${BannerImg.src})`,
                  backgroundSize: "cover",
                }}
              ></li>
              <div className="flex flex-col items-center px-2">
                <span>Blade Runner</span>
                <span>Action,Horror</span>
                <div className="flex">
                  <span className="text-orange-600">
                    <TiStar />
                  </span>
                  <span className="text-orange-600">
                    <TiStar />
                  </span>
                  <span className="text-orange-600">
                    <TiStar />
                  </span>
                  <span className="text-yellow-300">
                    <TiStar />
                  </span>
                  <span className="text-yellow-300">
                    <TiStar />
                  </span>
                </div>
              </div>
            </div>
            <div className="flex">
              <li
                className="flex w-1/4 justify-center h-20"
                style={{
                  backgroundImage: `url(${BannerImg.src})`,
                  backgroundSize: "cover",
                }}
              ></li>
              <div className="flex flex-col items-center px-2">
                <span>Blade Runner</span>
                <span>Action,Horrer</span>
                <div className="flex">
                  <span className="text-orange-600">
                    <TiStar />
                  </span>
                  <span className="text-orange-600">
                    <TiStar />
                  </span>
                  <span className="text-orange-600">
                    <TiStar />
                  </span>
                  <span className="text-orange-600">
                    <TiStar />
                  </span>
                  <span className="text-yellow-300">
                    <TiStar />
                  </span>
                </div>
              </div>
            </div>
          </ul>
        </div>
        <button className="w-full h-8 my-2 bg-green-100 rounded-sm">
          See More
        </button>
      </div>
      <div className="flex flex-col">
        <div className="flex py-2 items-center gap-20">
          <span>Watch List</span>
          <span>
            <PiDotsThreeBold />
          </span>
        </div>
        <div className="py-2">
          <ul className="flex flex-col gap-5">
            <div className="flex">
              <li
                className="flex w-1/4 justify-center h-20"
                style={{
                  backgroundImage: `url(${BannerImg.src})`,
                  backgroundSize: "cover",
                }}
              ></li>
              <div className="flex flex-col items-center px-2">
                <span>Blade Runner</span>
                <span>Action,Horror</span>
                <div className="flex">
                  <span className="text-orange-600">
                    <TiStar />
                  </span>
                  <span className="text-orange-600">
                    <TiStar />
                  </span>
                  <span className="text-orange-600">
                    <TiStar />
                  </span>
                  <span className="text-yellow-300">
                    <TiStar />
                  </span>
                  <span className="text-yellow-300">
                    <TiStar />
                  </span>
                </div>
              </div>
            </div>
            <div className="flex">
              <li
                className="flex w-1/4 justify-center h-20"
                style={{
                  backgroundImage: `url(${BannerImg.src})`,
                  backgroundSize: "cover",
                }}
              ></li>
              <div className="flex flex-col items-center px-2">
                <span>Blade Runner</span>
                <span>Action,Horrer</span>
                <div className="flex">
                  <span className="text-orange-600">
                    <TiStar />
                  </span>
                  <span className="text-orange-600">
                    <TiStar />
                  </span>
                  <span className="text-orange-600">
                    <TiStar />
                  </span>
                  <span className="text-orange-600">
                    <TiStar />
                  </span>
                  <span className="text-yellow-300">
                    <TiStar />
                  </span>
                </div>
              </div>
            </div>
            <div className="flex">
              <li
                className="flex w-1/4 justify-center h-20"
                style={{
                  backgroundImage: `url(${BannerImg.src})`,
                  backgroundSize: "cover",
                }}
              ></li>
              <div className="flex flex-col items-center px-2">
                <span>Blade Runner</span>
                <span>Action,Horrer</span>
                <div className="flex">
                  <span className="text-orange-600">
                    <TiStar />
                  </span>
                  <span className="text-orange-600">
                    <TiStar />
                  </span>
                  <span className="text-orange-600">
                    <TiStar />
                  </span>
                  <span className="text-orange-600">
                    <TiStar />
                  </span>
                  <span className="text-yellow-300">
                    <TiStar />
                  </span>
                </div>
              </div>
            </div>
          </ul>
        </div>
        <button className="w-full h-8 my-2 bg-green-100 rounded-sm">
          See More
        </button>
      </div>
    </div>
  );
}
