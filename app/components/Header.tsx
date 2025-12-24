'use client'

import Nav from './Nav'
import Link from 'next/link';


// import './HeaderResponsive.css'
import { MdMenu, MdClose } from "react-icons/md";


import { useState, useEffect , useRef} from 'react';


const Header_Mobile = ()=>{
  const R = useRef(null)
  const [Vis, setVis] = useState<boolean>(false)
  
  useEffect(()=>{},[Vis])

  const closeMenu = ()=>{
    setVis(false)
  }

  return(
    <section className=''>
     
      <section className='mobile-module-btn'>
        <button className='z-125 absolute top-0 right-0'
        onClick={()=>{
        setVis(ps => !ps)
        }}>{!Vis ? <MdMenu size={30}/> : <MdClose size={30}/>}</button>
      </section>
     
      {Vis? (<section ref={R}
       className='bg-black z-100 w-[100vw] h-[100vh] absolute right-0 top-0 p-4'>

        <section>
        <nav className="  h-[70vh] font-extrabold text-2xl
        flex flex-col justify-evenly items-center">
          <Link href={'/'} onClick={closeMenu}>خانه</Link>
          <Link href={'/Purchase'} onClick={closeMenu}>ثبت سفارش</Link>
          <Link href={'/Products'} onClick={closeMenu}>محصولات</Link>
          <Link href={'/About'} onClick={closeMenu}>درباره ما</Link>
          <Link href={'/Contact'} onClick={closeMenu}>تماس با ما</Link>
          <Link href={'/Support'} onClick={closeMenu}>پشتیبانی</Link>
        </nav>
        </section>

        <section className='flex items-center justify-center m-6'>
          <div>ورود / نام نویسی </div>
        </section>

      </section>):('')}
    </section>
  )
}

const Header_desk = ()=>{
  return(
  <section
  
  className='w-full mx-4'>
   <section className=''>
      <section
       className='flex flex-row-reverse w-full items-center justify-end'>

        <section className='whitespace-nowrap flex items-center justify-center m-6 cursor-pointer rounded-2xl bg-cyan-800 px-8 py-2 shadow-2xl hover:scale-105 hover:bg-cyan-600 transition-[0.3s]'>
          <div>ورود / نام نویسی </div>
        </section>
        
        <section className=' w-full px-4 text-md opacity-75'>
        <nav
        style={{fontFamily: 'var(--font-vazir)'}}  
        className="flex flex-row gap-8 ">
          <Link href={'/'}>خانه</Link>
          <Link href={'/Purchase'}>ثبت سفارش</Link>
          <Link href={'/Products'}>محصولات</Link>
          <Link href={'/About'}>درباره ما</Link>
          <Link href={'/Contact'}>تماس با ما</Link> 
          <Link href={'/Support'}>پشتیبانی</Link>
        </nav>
        </section>

      </section>
    </section>
  </section>)
}

export default function Header() {
  
  const [screenWidth, setScreenWidth] = useState<number>(0)
  useEffect(()=>{
    const handleResize = ()=>{
      setScreenWidth(window.innerWidth)
    }
    handleResize()

    window.addEventListener('resize', handleResize)
    return() => window.removeEventListener('resize', handleResize)
  },[])
  return (
      <header 
      style={{fontFamily: 'var(--font-vazir)'}}
      className="relative flex flex-row-reverse justify-around m-4">
        
        <section className='flex justify-center items-center mx-20'>
            <div> logo </div>
        </section>
        
        { screenWidth < 800? <Header_Mobile/> : <Header_desk/>}
      
      </header>
  );
}
