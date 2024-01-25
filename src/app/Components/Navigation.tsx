'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Hamburger from './Hamburger';
import { useState, MouseEvent, useContext, useEffect } from 'react';
import { Link as Scroll, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import Dropdown from './Dropdown';
import { GoArrowLeft } from "react-icons/go";
import { GlobalContext } from '../context/context';
import MobileMenu from './MobileMenu';

export default function Navigation() {
    const [ isOpen, setIsOpen ] = useState(false);
    const [ percentage, setPercentage ] = useState(0);
    const pathname = usePathname();
    const { pageCount } = useContext(GlobalContext);

    const toggleOpen = (e:MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setIsOpen(!isOpen)
    };

    useEffect(() => {
        const perc = ((pageCount + 1)/5)*100;
        setPercentage(perc)
    }, [pageCount])



    return (
        <div className='w-full sticky top-0 bg-white z-10'>
            {pathname === '/Eligibility' ? (
                <>
                <div className="max-w-[1400px] my-0 mx-auto p-4 relative">
                    <button className='relative z-10 rounded-full p-2 hover:bg-vanilla'><Link href='/'><GoArrowLeft className='text-charcoal h-7 w-7' /></Link></button>
                    <div className='absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center'>
                        <img className='md:w-[50px] md:h-[50px] w-[100px] h-[100px]' src='/lifestyle_logo.png' />
                    </div>
                </div>
                <div className='w-full h-[2px] bg-vanilla'>
                    <div className={`h-[2px] bg-gold`} style={{width: `${percentage}%`}}></div>
                </div>
                </>
            ) : (
                <>
                    <div className="w-full shadow-lg">
                        <div className='max-w-[1400px] my-0 mx-auto p-4 flex justify-between items-center gap-8'>
                            <div className='flex justify-center items-center gap-8'>
                                <Link href='/'><img className='md:w-[50px] md:h-[50px] w-[100px] h-[100px]' src='/lifestyle_logo.png' /></Link>
                                <Scroll to='how-it-works' spy={true} smooth={true} offset={-50} duration={500} className='hidden md:block hover:cursor-pointer'><p className='under'>How It Works</p></Scroll>
                                <Scroll to='direct-pay' spy={true} smooth={true} offset={-50} duration={500} className='hidden md:block hover:cursor-pointer'><p className='under'>Direct Pay</p></Scroll>
                                <Scroll to='faq' spy={true} smooth={true} offset={-50} duration={500} className='hidden md:block hover:cursor-pointer'><p className='under'>FAQ</p></Scroll>
                            </div>
                            <div className='flex justify-center items-center gap-8'>
                                {/* <Link className='hidden md:block' href='#'>For Patients</Link> */}
                                <Dropdown />
                                <Link className='hidden md:block' href='#'><p className='under'>Blog</p></Link>
                                <Link className='hidden md:block' href='#'><p className='under'>Contact</p></Link>
                                <Link className='hidden md:inline-block' href='/Eligibility'><button className='py-2 px-6 rounded-full bg-charcoal text-white hidden md:inline-block'>Get Started</button></Link>
                                <button onClick={toggleOpen} className='block md:hidden'><Hamburger isOpen={isOpen}/></button>
                            </div>
                        </div>
                        <MobileMenu isOpen={isOpen} toggleOpen={toggleOpen}/>
                    </div>
                    
                </>
            )}
            
        </div>
    )
}