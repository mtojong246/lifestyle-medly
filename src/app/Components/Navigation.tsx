'use client';

import Logo from '../../../public/lifestyle_logo.png';
import Link from 'next/link';
import Hamburger from './Hamburger';
import { useState, MouseEvent } from 'react';
import { Link as Scroll, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import Dropdown from './Dropdown';

export default function Navigation() {
    const [ isOpen, setIsOpen ] = useState(false);

    const toggleOpen = (e:MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setIsOpen(!isOpen)
    }

    return (
        <div className='w-full sticky top-0 bg-white z-10'>
            <div className="max-w-[1400px] my-0 mx-auto p-4 flex justify-between items-center gap-8">
                <div className='flex justify-center items-center gap-8'>
                    <Link href='/'><img className='md:w-[50px] md:h-[50px] w-[100px] h-[100px]' src='/lifestyle_logo.png' /></Link>
                    <Scroll to='how-it-works' spy={true} smooth={true} offset={-50} duration={500} className='hidden md:block hover:cursor-pointer'>How It Works</Scroll>
                    <Scroll to='direct-pay' spy={true} smooth={true} offset={-50} duration={500} className='hidden md:block hover:cursor-pointer'>Direct Pay</Scroll>
                    <Scroll to='faq' spy={true} smooth={true} offset={-50} duration={500} className='hidden md:block hover:cursor-pointer'>FAQ</Scroll>
                </div>
                <div className='flex justify-center items-center gap-8'>
                    {/* <Link className='hidden md:block' href='#'>For Patients</Link> */}
                    <Dropdown />
                    <Link className='hidden md:block' href='#'>Blog</Link>
                    <Link className='hidden md:block' href='#'>Contact</Link>
                    <Link className='hidden md:block' href='/Eligibility'><button className='py-2 px-6 rounded-full bg-charcoal text-white hidden md:block'>Get Started</button></Link>
                    <button onClick={toggleOpen} className='block md:hidden'><Hamburger isOpen={isOpen}/></button>
                </div>
            </div>
        </div>
    )
}