import React from 'react'
import { GrHomeRounded } from "react-icons/gr";
import { FiSearch } from "react-icons/fi";
import { CgAddR } from "react-icons/cg";
import { BiMoviePlay } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
function Footer() {
  const handleClickHomeBtn = () => {
    window.location.href = "/home";
  };
  const handleClickSearchBtn = () => {
    window.location.href = "/search";
  };
  const handleClickAddPostBtn = () => {
    window.location.href = "/addpost";
  };
  const handleClickReelsBtn = () => {
    window.location.href = "/reels";
  };
  const handleClickProfileBtn = () => {
    window.location.href = "/profile";
  };
  
  return (
    <>
      <div className="h-[60px] w-full flex items-center justify-between bg-pink-700 px-2 py-4  absolute bottom-[0px]">
        <button onClick={handleClickHomeBtn}>
          <GrHomeRounded className="h-5 w-5" />
        </button>
        <button onClick={handleClickSearchBtn}>
          <FiSearch  className="h-6 w-6" />
        </button>
        <button onClick={handleClickAddPostBtn}>
          <CgAddR className="h-6 w-6" />
        </button>
        <button onClick={handleClickReelsBtn}>
          <BiMoviePlay className="h-6 w-6" />
        </button>
        <button onClick={handleClickProfileBtn}>
          <CgProfile className="h-6 w-6" />
        </button>
      </div>
    </>
  );
}

export default Footer