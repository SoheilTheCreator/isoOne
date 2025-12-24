import { div } from "framer-motion/client";
import Image from 'next/image';

type ImageCardProps = {
    url: string,
    alt : string
}

export default function ImageCard(props:ImageCardProps){
    return(
    <div>
        <div className="relative  w-full flex justify-center">
            <img src={props.url} alt={props.alt}
            className="rounded-3xl object-cover z-20 w-[75%] h-full shadow-2xl border-2 border-white" />
            <div className="shadow
            absolute bg-cyan-700 w-[80%] h-full z-0 rounded-2xl top-5 md:top-10 left-[-15]">
                
            </div>
        </div>
    </div>)
}

