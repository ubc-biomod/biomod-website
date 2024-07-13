import React from "react";
import ReactDOM from "react-dom/client";
import Link from "next/link";
import Image from "next/image"



const BecomeASponsor: React.FC = () => {
  return (
    <>

    <div className="w-4236 h-1496 shrink-0 border-3">
      <div className="mt-23 w-3188 h-288">
        <h1 className="text-center text-[72px] font-bold font-sans shrink-0 not-italic">Thank you to our Sponsors</h1>
      </div>

      <div className="pt-8 pb-10 w-3328 h-312 text-[32px] font-sans font-normal">
        <p className="text-center" >The success of our previous years was only made possible due to generous sponsors like you.</p>
      </div> 
    </div>
 
    <div className="w-4696 h-2116 bg-slate-200 rounded-2xl pt-14 pb-96">
       {/* Carousel goes here   */}
     
    </div>

    <div className="w-4536 h-1760 shrink-0">
      <div className="w-3188 h-288 text-center text-[72px] font-bold font-sans shrink-0 not-italic">
        <h1>Become a sponsor</h1>
      </div>
      <br/>
        <div className="w-2108 h-1204 grid grid-cols-2 gap-10 content-start text-center text-[16px] font-normal leading-6">
          <div className="bg-slate-500 py-3 px-6 rounded-2xl">
             {/* empty image */}
          </div>
          <div className="my-16"><p> Want to support our cause? Become a sponsor! Our strong performances in previous BIOMOD competitions wouldn't be possible without sponsors like you.</p>
            <br/>
            <button className="w-906 h-268 bg-black hover:bg-slate-500 py-4 px-8 rounded-2xl"><Link className=" text-white" href="/"> Become a sponsor today!</Link></button>
          </div>
        </div>
      </div>

      <div className="w-3180 h-696 my-8 text-center text-[72px] font-bold font-sans shrink-0 not-italic">
        <h1>Past Sponsors</h1>
      </div>

      <footer className="w-5120 h-328 bg-slate-500 py-8 px-256"></footer>
      
    </>
  );
};

export default BecomeASponsor;
