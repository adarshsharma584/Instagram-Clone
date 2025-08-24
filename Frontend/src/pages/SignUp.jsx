import React from 'react'
import LoginForm from './Login.jsx'

function SignUp() {
  return (
    <>
      <div className="h-screen w-screen bg-black text-white flex ">
        <div className="left h-[80%] w-1/2 flex justify-center items-center">
          <img
            src="../instagram-web-lox-image.png"
            className="h-[450px] w-[525px] bg-black"
          />
        </div>
        <div className="right h-[80%] w-1/2 flex justify-center items-center relative top-[25px]
        right-[80px]">
          <LoginForm />
        </div>
      </div>
    </>
  );
}

export default SignUp;