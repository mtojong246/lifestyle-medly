'use client'

import { IoArrowForwardCircleOutline } from "react-icons/io5";
import Steps from "./Components/Steps";
import Medication from "./Components/Medication";
import { AiFillPlusCircle } from "react-icons/ai";
import Pricing from "./Components/Pricing";
import { useState, MouseEvent, useEffect, useContext } from "react";
import FAQ from "./Components/FAQ";
import { GlobalContext } from "./context/context";
import Link from "next/link";
import { Link as Scroll, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import 'animate.css';

export default function Home() {
  const [ open, setIsOpen ] = useState({
    one: false,
    two: false,
    three: false,
    four: false,
    five: false,
  });
  const { setPageCount } = useContext(GlobalContext);
  const toggleOpen = (e:MouseEvent<HTMLButtonElement>, number: string) => {
    e.preventDefault();
    setIsOpen({
      ...open,
      [number]: !open[number as keyof object],
    })
  }

  

  useEffect(() => {
    localStorage.removeItem('user');
    setPageCount(0);
  }, [])

  return (
    <>
    <div className='w-full text-charcoal'>
      <div className='max-w-[900px] lg:max-w-[1400px] px-10 py-[100px] flex flex-col md:flex-row justify-between items-center flex-wrap mx-auto my-0 gap-10 md:gap-0'>
        <div className='w-full md:w-[50%]'>
          <p className='text-[64px] leading-[5rem] font-bold fade-left'>START Your Weight Loss Journey Now!</p>
          <p className='font-medium text-lg mt-8 fade-left'>Join us on this transformative ride! Our customized program combines powerful medications and expert guidance to curate your weight loss experience.</p>
          <Link className='btn inline-block py-4 px-10 text-lg rounded-full bg-charcoal text-white mt-16 fade-left' href={'/Eligibility'}>How Can We Help?</Link>
          <Scroll to='how-it-works' spy={true} smooth={true} offset={-50} duration={500} ><button id='learn-more' className='flex justify-start items-center mt-16 gap-2 fade-left'>
            <IoArrowForwardCircleOutline className='h-8 w-8 transition ease-in-out duration-[500ms] learn-more' />
            <p className='font-medium text-lg'>Learn More</p>
          </button>
          </Scroll>
        </div>
        <div className='max-w-[600px] w-full md:w-[50%] md:self-end self-center'>
          <img src='/main-img.png' className='object-cover fade-in' />
        </div>
      </div>
    </div>

    <Steps />

    <Medication />

    <Pricing />
    
    <FAQ toggleOpen={toggleOpen} open={open} />

    </>
  )
}