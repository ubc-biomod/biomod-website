import React from "react";
import ReactDOM from "react-dom/client";
import Link from "next/link";
import Carousel from 'react-bootstrap/Carousel'; 




const JoinUs: React.FC = () => {
  return (
    <>
        <div className="w-2060 h-1288 grid grid-cols-2 gap-10 content-start">
          <div className="my-10 ml-4">
            <h1 className=" text-blue-800 text-center text-[64px] leading-2 font-sans font-bold mb-4 mr-12">Join our team!</h1>
           
            <p className="text-[32px] text-center">Get involved with UBC BIOMOD</p>
          </div>
          <div className="bg-slate-500 py-12 px-6 rounded-2xl my-2 ml-12">
          {/* Empty image */}
          </div>
        </div>
      <div className="w-4496 h-2420 mt-20"> 

        <h1 className=" text-blue-800 text-[48px] leading-6 text-center font-sans font-bold">Check out our amazing subteams!</h1>
        <div>

        </div>

      </div>


      
      <footer className="w-5120 h-328 bg-slate-500 py-8 px-256"></footer>


    </>
  );
};

export default JoinUs;

