'use client';

import Logo from '../../../public/lifestyle_logo.png';
import Link from 'next/link';
import Hamburger from './Hamburger';
import { useState, MouseEvent } from 'react';

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
                    <img className='md:w-[50px] md:h-[50px] w-[100px] h-[100px]' src='/lifestyle_logo.png' />
                    <Link  className='hidden md:block' href='#'>How It Works</Link>
                    <Link className='hidden md:block' href='#'>Direct Pay</Link>
                    <Link className='hidden md:block' href='#'>FAQ</Link>
                </div>
                <div className='flex justify-center items-center gap-8'>
                    <Link className='hidden md:block' href='#'>For Patients</Link>
                    <Link className='hidden md:block' href='#'>Blog</Link>
                    <Link className='hidden md:block' href='#'>Contact</Link>
                    <button className='py-2 px-6 rounded-full bg-charcoal text-white hidden md:block'>Get Started</button>
                    <button onClick={toggleOpen} className='block md:hidden'><Hamburger isOpen={isOpen}/></button>
                </div>
            </div>
        </div>
    )
}