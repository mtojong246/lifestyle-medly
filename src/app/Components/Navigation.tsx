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
import ContactPopup from './ContactPopup';
import 'animate.css';

export default function Navigation() {
    const [ isOpen, setIsOpen ] = useState(false);
    const [ isTop, setIsTop ] = useState(true);
    const [ percentage, setPercentage ] = useState(0);
    const pathname = usePathname();
    const { pageCount } = useContext(GlobalContext);

    const [ isScrollingUp, setIsScrollingUp ] = useState(true);
    const [ prevScrollPos, setPrevScrollPos ] = useState(0);

    const toggleOpen = (e:MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setIsOpen(!isOpen)
    };

    useEffect(() => {
        const perc = ((pageCount + 1)/5)*100;
        setPercentage(perc)
    }, [pageCount])

    // const handleScroll = () => {
    //     const current = window.scrollY;
    //     if (current < 1) {
    //         setIsTop(true)
    //     } else {
    //         setIsTop(false);
    //     }
    // }

    const handleDirectionalScroll = () => {
        const currentScrollPos = window.scrollY
        const navbar = document.getElementById('navbar');
        if (navbar) {
            if (currentScrollPos <= navbar.offsetHeight) {
                setIsTop(true)
            } else {
                setIsTop(false)
            }
    
            if (currentScrollPos) {
                setIsScrollingUp(currentScrollPos < prevScrollPos);
                setPrevScrollPos(currentScrollPos);
            } 
        }
        
    };

    useEffect(() => {
        // Add scroll event listener on component mount
        setIsTop(true);
        window.addEventListener('scroll', handleDirectionalScroll);

        // Clean up the event listener on component unmount
        return () => {
        window.removeEventListener('scroll', () => handleDirectionalScroll);
        };
    }, [prevScrollPos]);


    return (
        <div id='navbar' className='w-full sticky top-0 z-30 '>
            {pathname === '/Eligibility' ? (
            <div className={`w-full transition-all ease-in fade-down`} style={{ transform: isScrollingUp ? 'translateY(0)' : 'translateY(-100%)' }}>
                <div className="w-full bg-white my-0 mx-auto px-4 py-10 sm:py-4 relative">
                    <button className='relative z-10 rounded-full p-2 hover:bg-vanilla'><Link href='/'><GoArrowLeft className='text-charcoal h-12 w-12 sm:h-7 sm:w-7' /></Link></button>
                    <div className='absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center'>
                        <img className='sm:w-[50px] sm:h-[50px] w-[100px] h-[100px]' src='/lifestyle_logo.png' />
                    </div>
                </div>
                <div className='w-full h-[2px] bg-vanilla'>
                    <div className={`h-[2px] bg-gold`} style={{width: `${percentage}%`}}></div>
                </div>
            </div>
            ) : (
                <>
                    <div className={`w-full bg-charcoal transition-all ease-in fade-down`} style={{ transform: isScrollingUp ? 'translateY(0)' : 'translateY(-100%)' }}>
                        <div className='max-w-[1400px] my-0 mx-auto p-4 flex justify-between items-center gap-8'>
                            <div className='flex justify-center items-center gap-8'>
                                <Link href='/'><img className='md:w-[50px] md:h-[50px] w-[100px] h-[100px] white' src='/lifestyle_logo.png' /></Link>
                                <Scroll to='how-it-works' spy={true} smooth={true} offset={-50} duration={500} className='hidden md:block hover:cursor-pointer'><p className='under'>How It Works</p></Scroll>
                                <Scroll to='direct-pay' spy={true} smooth={true} offset={-50} duration={500} className='hidden md:block hover:cursor-pointer'><p className='under'>Direct Pay</p></Scroll>
                                <Scroll to='faq' spy={true} smooth={true} offset={-50} duration={500} className='hidden md:block hover:cursor-pointer'><p className='under'>FAQ</p></Scroll>
                            </div>
                            <div className='flex justify-center items-center gap-8'>
                                {/* <Link className='hidden md:block' href='#'>For Patients</Link> */}
                                <Dropdown />
                                <Link className='hidden md:block' href='/Blog'><p className='under'>Blog</p></Link>
                                {/* <Link className='hidden md:block' href='/Contact'><p className='under'>Contact</p></Link> */}
                                <div className='hidden md:block'><ContactPopup/></div>
                                <Link className='hidden md:inline-block' href='/Eligibility'><button id='nav-btn' className='slide-btn py-2 px-6 rounded-full bg-white text-charcoal hidden md:inline-block'>Get Started</button></Link>
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