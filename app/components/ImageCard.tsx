import { div } from "framer-motion/client";
import Image from 'next/image';

export default function ImageCard(){
    return(
    <div>
        <div className="relative  w-full flex justify-center">
            <img src="/ind01.jpg" alt="hero"
            className="rounded-3xl object-cover z-20 w-[95%] h-full shadow-2xl border-2 border-white" />
            <div className="shadow
            absolute bg-cyan-700 w-full h-full z-0 rounded-2xl top-5 md:top-10 right-5">
                
            </div>
        </div>
    </div>)
}

