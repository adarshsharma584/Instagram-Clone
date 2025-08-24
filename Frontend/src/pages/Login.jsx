import React from 'react'
import { FaFacebook } from "react-icons/fa";

function Login() {
  return (
    <>
      <div className="login-form h-full w-full flex flex-col items-center justify-center">
        <span className="text-4xl  font-bold text-center font-serif text-white mb-[20px] relative bottom-[5px]">
          Instagram
        </span>
        <input
          type="text"
          placeholder="Phone number,username or email"
          className="mt-5 w-1/2 h-10 rounded-sm bg-gray-800 text-white text-start px-3 outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          className="mt-5 w-1/2 h-10 rounded-sm bg-gray-800 text-white text-start px-3 outline-none"
        />

        <button
          type="submit"
          className="bg-blue-600 w-1/2 h-10 rounded-lg font-bold mt-5 hover:cursor-pointer "
        >
          Log in
        </button>

        <div className="flex mt-[40px] items-center justify-center gap-3 h-6 w-1/2 p-2 rounded-md">
          <div className="h-[1.01px] w-1/3 bg-gray-800"></div>
          <span className="text-gray-100 text-md">or</span>
          <div className="h-[1.01px] w-1/3 bg-gray-800"></div>
        </div>

        <div className="flex  flex-col items-center justify-center gap-1 mt-3 relative top-[5px]">
          <span className=" mt-3  flex gap-2 items-center hover:cursor-pointer ">
            <FaFacebook className="h-6 w-6 text-blue-400" />
            <span className="text-blue-400 text-lg hover:cursor-pointer hover:text-white">
              Login with Facebook
            </span>
          </span>
          <span className="text-white mt-1  text-base hover:cursor-pointer">
            Forget password?
          </span>
        </div>

        <div className="flex gap-1 items-center justify-center mt-10 text-center">
          <span className="text-md text-white font-light">
            Don't have an account ?
          </span>
          <span className="text-md text-blue-500 hover:cursor-pointer ">
            SignUp
          </span>
        </div>
      </div>
    </>
  );
}

export default Login;