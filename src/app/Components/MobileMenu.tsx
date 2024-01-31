'use client';

import Link from "next/link";
import { Link as Scroll, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import { MouseEvent } from "react";
import { RxChevronDown, RxChevronUp } from "react-icons/rx";
import { useState, useEffect } from "react";
import ContactPopup from "./ContactPopup";
import { useRouter } from "next/navigation";



export default function MobileMenu({isOpen, toggleOpen} : {isOpen: boolean, toggleOpen: (e:MouseEvent<HTMLButtonElement>) => void}) {
    const [ openPatients, setOpenPatients ] = useState(false);
    const router = useRouter();

    const togglePatients = (e:MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setOpenPatients(!openPatients)
    }

    useEffect(() => {
        if (!isOpen) {
            setOpenPatients(false)
        }
    }, [isOpen])


    return (
        <div className={`w-full pt-8 pb-16 flex flex-col gap-10 md:hidden text-center text-xl text-charcoal menu-closed ${isOpen ? 'menu-open' : ''}`}>
            <Scroll to='how-it-works' spy={true} smooth={true} offset={-50} duration={500}><button onClick={toggleOpen}>How It Works</button></Scroll>
            <Scroll to='direct-pay' spy={true} smooth={true} offset={-50} duration={500}><button onClick={toggleOpen}>Direct Pay</button></Scroll>
            <Scroll to='faq' spy={true} smooth={true} offset={-50} duration={500}><button onClick={toggleOpen}>FAQ</button></Scroll>
            <div className='w-full'>
                <button onClick={togglePatients} className="mx-auto flex justify-center items-center gap-2 mb-5">For Patients {!openPatients ? <RxChevronDown className='h-6 w-6' /> : <RxChevronUp className='h-6 w-6' />}</button>
                <div className={`w-full text-center flex flex-col gap-8 text-lg menu-closed bg-charcoal text-white ${openPatients ? 'smaller-menu-open' : ''}`}>
                    <a className='hover:text-gold' href='https://docs.google.com/document/d/1APPpRZmCjbkBhawDEz_k7ApOngIG85n7/edit?usp=sharing&ouid=110993120075762838849&rtpof=true&sd=true' target="_blank" rel="noreferrer">Patient Registration</a>
                    <a className='hover:text-gold' href='https://docs.google.com/document/d/1RemK2_8eyEV8RlUMN5f7O7cIcHwRMS0T/edit?usp=sharing&ouid=110993120075762838849&rtpof=true&sd=true' target="_blank" rel="noreferrer">Patient Consent</a>
                    <a className='hover:text-gold' href='https://chluy.myaestheticrecord.com/online-booking/hash/Ml8yMDgzNl9jbGluaWNz' target="_blank" rel="noreferrer">Schedule Appointment</a>
                </div>
                <button className='block md:hidden mt-5 mx-auto' onClick={(e:any) => {toggleOpen(e); router.push('/Blog')}}>Blog</button>
            </div>
            
            {/* <p>Contact</p> */}
            <div className='block md:hidden'><ContactPopup /></div>
            <button className='block md:hidden mx-auto' onClick={(e:any) => {toggleOpen(e); router.push('/Eligibility')}}>Get Started</button>
        </div>
    )
}
