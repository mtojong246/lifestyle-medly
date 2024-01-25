'use client';

import Link from "next/link";
import { Link as Scroll, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import { MouseEvent } from "react";
import { RxChevronDown, RxChevronUp } from "react-icons/rx";
import { useState } from "react";
import ContactPopup from "./ContactPopup";



export default function MobileMenu({isOpen, toggleOpen} : {isOpen: boolean, toggleOpen: (e:MouseEvent<HTMLButtonElement>) => void}) {
    const [ openPatients, setOpenPatients ] = useState(false);

    const togglePatients = (e:MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setOpenPatients(!openPatients)
    }

    return (
        <div className={`w-full pt-8 pb-16 px-4 flex flex-col gap-16 block md:hidden text-center text-xl text-charcoal menu-closed ${isOpen ? 'menu-open' : ''}`}>
            <Scroll to='how-it-works' spy={true} smooth={true} offset={-50} duration={500}><button onClick={toggleOpen}>How It Works</button></Scroll>
            <Scroll to='direct-pay' spy={true} smooth={true} offset={-50} duration={500}><button onClick={toggleOpen}>Direct Pay</button></Scroll>
            <Scroll to='faq' spy={true} smooth={true} offset={-50} duration={500}><button onClick={toggleOpen}>FAQ</button></Scroll>
            <div className='w-full'>
                <button onClick={togglePatients} className="mx-auto flex justify-center items-center gap-2 mb-8">For Patients {!openPatients ? <RxChevronDown className='h-6 w-6' /> : <RxChevronUp className='h-6 w-6' />}</button>
                <div className={`w-full text-center flex flex-col gap-8 text-lg menu-closed bg-vanilla text-darkvanilla ${openPatients ? 'smaller-menu-open' : ''}`}>
                    <p>Patient Registration</p>
                    <p>Patient Consent</p>
                    <p>Schedule Appointment</p>
                </div>
                <p className="mt-8">Blog</p>
            </div>
            
            {/* <p>Contact</p> */}
            <div className='block md:hidden'><ContactPopup /></div>
            <p>Get Started</p>
        </div>
    )
}
