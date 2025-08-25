import React from 'react'
import Link from "next/link";


const Careers = () => {
   return (
     <div className="min-h-screen relative z-10 flex flex-col items-center justify-center text-white">
       {}
       <h1 className="text-7xl md:text-8xl font-bold flex justify-center items-center">
         COMING SOON
       </h1>
       <Link href="/Contact">
         <div id="button" className=" mt-20 flex justify-center items-center">
           <button className="cursor-pointer group px-10 py-3 md:px-10 md:py-4 text-white text-base md:text-lg font-bold rounded-full border-2 border-orange-500 flex items-center gap-2">
             <span>{"Back to Home"}</span>
             <span className="inline-block transform transition-transform duration-300 group-hover:translate-x-2 ">
               →
             </span>
           </button>
         </div>
       </Link>
     </div>
   );
};

export default Careers