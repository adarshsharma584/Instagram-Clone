import React from "react";
import HomeStories from "../components/HomeStories.jsx";
import HomePost from "../components/HomePost.jsx";

function Home() {
  return (
    <>
      <div className="outer-home-container flex justify-center items-center h-screen w-screen bg-[#131010]">
        <div className="home-container h-[95%] w-1/4 bg-gray-700 text-white  flex-col gap-5  relative">
          {/* stories--> */}

          <div className="stories-conatainer h-[100px] w-full my-2 px-2 py-4  flex items-center gap-3 overflow-y-hidden overflow-x-scroll scrollbar-hidden scroll-smooth">
            <HomeStories />
            <HomeStories />
            <HomeStories />
            <HomeStories />
            <HomeStories />
            <HomeStories />
            <HomeStories />
            <HomeStories />
          </div>

          {/* posts--> */}

          <div className="post-container  flex-col gap-5 h-[425px] overflow-y-scroll scrollbar-hidden scroll-smooth bg-amber-400">
            <HomePost src="https://www.financialexpress.com/wp-content/uploads/2025/03/Sam-altman-Studio-Ghibli-style-images-edt.jpg" />
            
            <HomePost src="https://th.bing.com/th/id/OIP.pPZV6QPEidtat4uEKWn-eQHaHa?pid=ImgDet&w=191&h=191&c=7" />
            

            <HomePost src="https://th.bing.com/th/id/OIP.LDU1ZDVm35K2MjDWxwp_iAHaFf?w=252&h=187&c=7&r=0&o=5&pid=1.7" />

            <HomePost src="https://th.bing.com/th/id/OIP.LDU1ZDVm35K2MjDWxwp_iAHaFf?w=252&h=187&c=7&r=0&o=5&pid=1.7" />
          </div>

          {/* footer--> */}

          
        </div>
      </div>
    </>
  );
}

export default Home;
