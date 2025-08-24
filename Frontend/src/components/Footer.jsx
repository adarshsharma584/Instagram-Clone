import React from 'react'
import { GrHomeRounded } from "react-icons/gr";
import { FiSearch } from "react-icons/fi";
import { CgAddR } from "react-icons/cg";
import { BiMoviePlay } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from 'react-router-dom';
function Footer() {
  const navigate = useNavigate();

  const handleClickHomeBtn = () => {
   navigate("/");
  };
  const handleClickSearchBtn = () => {
    navigate("/search");
  };
  const handleClickAddPostBtn = () => {
    navigate("/add-post");
  };
  const handleClickReelsBtn = () => {
    navigate("/reels");
  };
  const handleClickProfileBtn = () => {
    navigate("/profile");
  };
  
  return (
    <div className="bg-red-500 flex justify-center py-1 mx-auto px-auto">
      <div className="h-[60px] w-[342px] flex items-center justify-between  px-2 py-4  absolute bottom-[0px]">
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
    </div>
  );
}

export default Footer