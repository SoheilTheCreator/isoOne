'use client'

import Nav from './Nav'
import Link from 'next/link';
// import './HeaderResponsive.css'
import { useState, useEffect , useRef} from 'react';
import { section } from 'framer-motion/client';

const Header_Mobile = ()=>{
  const R = useRef(null)
  const [Vis, setVis] = useState<boolean>(false)
  
  return(
    <section className=''>
     
      <section className='mobile-module-btn'>
        <button className='z-125 absolute top-0 right-0'
        onClick={()=>{
        setVis(ps => !ps)
        }}>menu</button>
      </section>
     
      {Vis? (<section ref={R}
       className='bg-black z-100 w-[100vw] h-[100vh] absolute right-0 top-0 p-4'>

        <section className='flex items-center justify-center m-6'>
          <div>login /sign up</div>
        </section>
        
        <section>
        <nav className="  h-[70vh] font-extrabold text-2xl
        flex flex-col justify-evenly items-center">
          <Link href={'/'}>خانه</Link>
          <Link href={'/Purchase'}>ثبت سفارش</Link>
          <Link href={'/Products'}>محصولات</Link>
          <Link href={'/About'}>درباره ما</Link>
          <Link href={'/Contact'}>تماس با ما</Link>
          <Link href={'/Support'}>پشتیبانی</Link>
        </nav>
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

        <section className='flex items-center justify-center m-6 cursor-pointer rounded-2xl bg-cyan-800 px-8 py-2 shadow-2xl hover:scale-105 hover:bg-cyan-600 transition-[0.3s]'>
          <div>login /sign up</div>
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
