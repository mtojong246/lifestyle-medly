import { Dispatch, SetStateAction } from "react";
import { UserType } from "../page";
import 'animate.css';

export default function PageOne() {
    return (
        <>
            <p className='text-[40px] sm:text-[48px] mb-8 sm:mb-5'>Welcome to <span className="text-maize">Lifestyle Medly:</span> Your Curated Weight Loss Program</p>
            <p className='text-xl max-w-[600px] mx-auto'>Please complete this form to help us understand how we can serve you best:</p>
        </>
    )
}