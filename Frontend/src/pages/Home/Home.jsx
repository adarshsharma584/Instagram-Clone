import React from "react";
import Stories from "../../components/Home-Components/Stories.jsx";
import Post from "../../components/Home-Components/Post.jsx";
import Footer from "../../components/Home-Components/Footer.jsx";
function Home() {
  return (
    <>
      <div className="outer-home-container flex justify-center items-center h-screen w-screen bg-[#131010]">
        <div className="home-container h-[95%] w-1/4 bg-gray-700 text-white  flex-col gap-5  relative">
          {/* stories--> */}

          <div className="stories-conatainer h-[100px] w-full my-2 px-2 py-4  flex items-center gap-3 overflow-y-hidden overflow-x-scroll scrollbar-hidden scroll-smooth">
            <Stories />
            <Stories />
            <Stories />
            <Stories />
            <Stories />
            <Stories />
            <Stories />
            <Stories />
          </div>

          {/* posts--> */}

          <div className="post-container  flex-col gap-5 h-[425px] overflow-y-scroll scrollbar-hidden scroll-smooth bg-amber-400">
            <Post src="https://www.financialexpress.com/wp-content/uploads/2025/03/Sam-altman-Studio-Ghibli-style-images-edt.jpg" />
            
            <Post src="https://th.bing.com/th/id/OIP.pPZV6QPEidtat4uEKWn-eQHaHa?pid=ImgDet&w=191&h=191&c=7" />
            

            <Post src="https://th.bing.com/th/id/OIP.LDU1ZDVm35K2MjDWxwp_iAHaFf?w=252&h=187&c=7&r=0&o=5&pid=1.7" />

            
          </div>

          {/* footer--> */}

          <div className="footer-container">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
