import React from 'react';
import { FaEye } from "react-icons/fa";
import { MdHomeFilled } from "react-icons/md";
import { IoShieldCheckmark } from "react-icons/io5";
import { RiCompassFill } from "react-icons/ri";
import { BiMaleFemale } from "react-icons/bi";
import { FaAward } from "react-icons/fa6";
import { MdWatchLater } from "react-icons/md";
import { IoIosStar } from "react-icons/io";
import { IoIosDownload } from "react-icons/io";
import { GiFilmProjector } from "react-icons/gi";
import { HiVideoCamera } from "react-icons/hi";
import { RiVirusLine } from "react-icons/ri";
import { IoMdSettings } from "react-icons/io";
import { IoLogOutSharp } from "react-icons/io5";


export default function Sidebar() {
  return (
    <div className='flex flex-col w-full mx-4'>
      <div className='flex items-start px-6 gap-4 pt-2'>
        <FaEye className='text-lg' />
        <span className='text-sm font-bold'>Noton</span>
      </div>
      <div className='flex flex-col p-3'>
        <span className='px-3 font-bold'>Menu</span>
        <ul className='flex flex-col '>
          <li className='flex p-2  hover:bg-pink-200 rounded-sm'>
            <span className='text-red-900 text-2xl'>
              <MdHomeFilled/>
            </span>
             <span className='pl-4'>Home</span>
             </li>
          <li className='flex p-2  hover:bg-pink-200 rounded-sm'>
            <span className='text-red-900 text-2xl'>
              <IoShieldCheckmark/>
            </span>
            <span className='pl-4'>Community</span>
          </li>
          <li className='flex p-2  hover:bg-pink-200 rounded-sm'>
          <span className='text-red-900 text-2xl'>
              <RiCompassFill/>
            </span>
            <span className='pl-4'>Discover</span>
          </li>
          <li className='flex p-2  hover:bg-pink-200 rounded-sm'>
          <span className='text-red-900 text-2xl'>
              <FaAward/>
            </span>
            <span className='pl-4'>Awards</span>
            </li>
          <li className='flex p-2  hover:bg-pink-200 rounded-sm'>
          <span className='text-red-900 text-2xl'>
              <BiMaleFemale/>
            </span>
            <span className='pl-4'>Celebs</span>
            </li>
        </ul>
      </div>
      <div className='flex flex-col px-3'>
        <span className='px-3 font-bold'>Library</span>
        <ul className='flex flex-col '>
          <li className='flex p-2  hover:bg-pink-200 rounded-sm'>
            <span className='text-red-900 text-2xl'>
              <MdWatchLater/>
            </span>
             <span className='pl-4'>Recent</span>
             </li>
          <li className='flex p-2  hover:bg-pink-200 rounded-sm'>
            <span className='text-red-900 text-2xl'>
              <IoIosStar/>
            </span>
            <span className='pl-4'>Top Rated</span>
          </li>
          <li className='flex p-2  hover:bg-pink-200 rounded-sm'>
          <span className='text-red-900 text-2xl'>
              <IoIosDownload/>
            </span>
            <span className='pl-4'>Downloaded</span>
          </li>
        </ul>
      </div>
      <div className='flex flex-col px-3 pt-2'>
        <span className='px-3 font-bold'>Category</span>
        <ul className='flex flex-col '>
          <li className='flex p-2  hover:bg-pink-200 rounded-sm'>
            <span className='text-red-900 text-2xl'>
              <GiFilmProjector/>
            </span>
             <span className='pl-4'>TV Show</span>
             </li>
          <li className='flex p-2  hover:bg-pink-200 rounded-sm'>
            <span className='text-red-900 text-2xl'>
              <HiVideoCamera/>
            </span>
            <span className='pl-4'>Movie</span>
          </li>
          <li className='flex p-2  hover:bg-pink-200 rounded-sm'>
          <span className='text-red-900 text-2xl'>
              <RiVirusLine/>
            </span>
            <span className='pl-4'>Anime</span>
          </li>
        </ul>
      </div>
      <div className='flex flex-col px-3 pt-2'>
        <span className='px-3 font-bold'>General</span>
        <ul className='flex flex-col '>
          <li className='flex p-2  hover:bg-pink-200 rounded-sm'>
            <span className='text-red-900 text-2xl'>
              <IoMdSettings/>
            </span>
             <span className='pl-4'>Setting</span>
             </li>
          <li className='flex p-2  hover:bg-pink-200 rounded-sm'>
            <span className='text-red-900 text-2xl'>
              <IoLogOutSharp/>
            </span>
            <span className='pl-4'>Log Out</span>
          </li>
        </ul>
      </div>
      
    </div>
  );
}

