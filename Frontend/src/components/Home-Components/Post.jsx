import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { LuSend } from "react-icons/lu";
import { FaRegCommentDots } from "react-icons/fa";
import { MdOutlineSaveAlt } from "react-icons/md";
function Post({src}) {
  return (
    <>
      <div className="post-container h-[425px] w-full my-2 bg-black  flex flex-col justify-start items-center">
        <div className="post-image-box h-[80%] w-full bg-gray-700 m-1">
          <img
            className="h-full w-full object-cover "
           src={`${src}`}
            alt=""
          />

          <div className="post-image-footer flex gap-4 items-center h-[13%] w-full px-2 py-2 mt-3">
            <div className="post-image-footer-left flex  items-center gap-4 ">
              <div className="  flex justify-between items-center  gap-1 h-[50px] w-[70px] ">
                <button>
                  <FaRegHeart className="h-6 w-6" />
                </button>
                <span className="text-white">10.5M</span>
              </div>
              <div className="  flex items-center justify-center gap-1 h-[50px] w-[70px] ">
                <button>
                  <LuSend className="h-6 w-6" />
                </button>
                <span className="text-white ">10.4k</span>
              </div>

              <div className="  flex items-center justify-center gap-1 h-[50px] w-[70px]">
                <button>
                  <FaRegCommentDots className="h-6 w-6" />
                </button>
                <span className="text-white ">12k</span>
              </div>
            </div>

            <div className="post-image-footer-right flex justify-end items-center [50px] w-[70px] gap-0">
              <button>
                <MdOutlineSaveAlt className="h-7 w-7" />
              </button>
              
            </div>
          </div>

          <div className="post-comment h-fit w-full min-h-[10%] bg-emerald-500"></div>
        </div>
      </div>
    </>
  );
}

export default Post;
