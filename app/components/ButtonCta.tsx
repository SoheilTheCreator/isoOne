'use client'

import { button } from "framer-motion/client";
import { useRouter } from "next/navigation";

type BtnCtaProp = {
    label : string,
    action: 'redirct',
    url: string | null,
}

export default function ButtonCta(props:BtnCtaProp){
    // a dynamic way to use diffrent shit
    const DynaActor = (mode:string, para:any)=>{
        const router =  useRouter();
        if(mode == "redirct")
        {
            return(()=> router.push(para)) 
        }
    }
    
    return(
    <button 
    onClick={DynaActor(props.action, props.url)}
    className=" bg-cyan-500 rounded-4xl py-6 px-12 whitespace-nowrap text-2xl cursor-pointer shadow-2xl
    hover:scale-105 hover:bg-cyan-700 transition-[0.3s]">
   {props.label}
    </button>)
}

