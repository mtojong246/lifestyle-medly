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
        <div className={`w-full block md:hidden text-center text-xl text-white bg-charcoal menu-closed ${isOpen ? 'menu-open' : ''}`}>
            <div className='pt-8 pb-16 flex flex-col gap-10 max-h-[calc(100vh-132px)] overflow-auto'>
            <Scroll to='how-it-works' spy={true} smooth={true} offset={-50} duration={500}><button onClick={toggleOpen}>How It Works</button></Scroll>
            <Scroll to='direct-pay' spy={true} smooth={true} offset={-50} duration={500}><button onClick={toggleOpen}>Direct Pay</button></Scroll>
            <Scroll to='faq' spy={true} smooth={true} offset={-50} duration={500}><button onClick={toggleOpen}>FAQ</button></Scroll>
            <div className='w-full'>
                <button onClick={togglePatients} className="mx-auto flex justify-center items-center gap-2 mb-5">For Patients {!openPatients ? <RxChevronDown className='h-6 w-6' /> : <RxChevronUp className='h-6 w-6' />}</button>
                <div className={`w-full text-center flex flex-col gap-8 text-lg menu-closed bg-gold text-white ${openPatients ? 'smaller-menu-open' : ''}`}>
                    <a className='hover:text-charcoal' href='https://chluy.myaestheticrecord.com/online-booking/hash/Ml8yMDgzNl9jbGluaWNz' target="_blank" rel="noreferrer">Patient Registration</a>
                    <a className='hover:text-charcoal' href='https://chluy.myaestheticrecord.com/online-booking/hash/Ml8yMDgzNl9jbGluaWNz' target="_blank" rel="noreferrer">Patient Consent</a>
                    <a className='hover:text-charcoal' href='https://chluy.myaestheticrecord.com/online-booking/hash/Ml8yMDgzNl9jbGluaWNz' target="_blank" rel="noreferrer">Schedule Appointment</a>
                </div>
                <button className='block md:hidden mt-5 mx-auto' onClick={(e:any) => {toggleOpen(e); router.push('/Blog')}}>Blog</button>
            </div>
            
            {/* <p>Contact</p> */}
            <div className='block md:hidden'><ContactPopup /></div>
            <button className='block md:hidden mx-auto' onClick={(e:any) => {toggleOpen(e); router.push('/Eligibility')}}>Get Started</button>
            </div>
        </div>
    )
}
