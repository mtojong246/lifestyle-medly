'use client';

import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from "react-icons/md";
import PageOne from "./Components/PageOne";
import PageTwo from "./Components/PageTwo";
import PageThree from "./Components/PageThree";
import PageFour from "./Components/PageFour";
import Confirmation from "./Components/Confirmation";
import { useState, MouseEvent, useEffect, useContext } from "react";
import { GlobalContext } from "../context/context";

export interface User {
    first_name: string,
    last_name: string,
    gender: string,
    date_of_birth: string,
    age: number,
    email: string,
    phone_number: string,
    waist_size: number,
    weight: number,
    height_feet: number,
    height_inches: number,
    bmi: number,
}

const defaultUser = {
    first_name: '',
    last_name: '',
    gender: '',
    date_of_birth: '',
    age: 0,
    email: '',
    phone_number: '',
    waist_size: 0,
    weight: 0,
    height_feet: 0,
    height_inches: 0,
    bmi: 0,
}

export default function Eligibility() {
    const [ newUser, setNewUser ] = useState<User>(defaultUser);
    const { pageCount, nextPage, previousPage } = useContext(GlobalContext)
    // const [ pageCount, setPageCount ] = useState(0);

    useEffect(() => {
        window.scrollTo(0,0)
    }, [pageCount])

    // const nextPage = (e:MouseEvent<HTMLButtonElement>) => {
    //     e.preventDefault();
    //     const count = pageCount + 1;
    //     setPageCount(count);
    // }

    // const previousPage = (e:MouseEvent<HTMLButtonElement>) => {
    //     e.preventDefault();
    //     const count = pageCount - 1;
    //     setPageCount(count);
    // }

    return (
        <div className='py-[100px] px-10 min-h-screen'>
            <div className='max-w-[900px] mx-auto my-0 text-center text-charcoal'>

                {pageCount === 0 ? (
                    <PageOne />
                ) : pageCount === 1 ? (
                    <PageTwo />
                ) : pageCount === 2 ? (
                    <PageThree />
                ) : pageCount === 3 ? (
                    <PageFour />
                ) : pageCount === 4 ? (
                    <Confirmation />
                ) : null}                

                <div className={`max-w-[600px] mx-auto flex mt-20 ${pageCount !== 0 ? 'justify-between' : 'justify-center'}`}>
                    {pageCount !== 0 && <button onClick={previousPage} className='py-4 px-10 text-lg rounded-full bg-charcoal text-white flex justify-center items-center gap-3'><MdOutlineKeyboardArrowLeft className='h-5 w-5'/> Back</button>}
                    {pageCount !== 4 ? 
                        <button onClick={nextPage} className='py-4 px-10 text-lg rounded-full bg-charcoal text-white flex justify-center items-center gap-3'>Continue <MdOutlineKeyboardArrowRight className='h-5 w-5'/></button>
                    : 
                        <button className='py-4 px-10 text-lg rounded-full bg-charcoal text-white'>Submit</button>
                    }
                </div>
            </div>
        </div>
    )
}