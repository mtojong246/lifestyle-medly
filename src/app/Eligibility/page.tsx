import { FaUserDoctor } from "react-icons/fa6";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import PageOne from "./Components/PageOne";
import PageTwo from "./Components/PageTwo";
import PageThree from "./Components/PageThree";
import TextField from '@mui/material/TextField';
import { Montserrat } from 'next/font/google';
import PageFour from "./Components/PageFour";
import Confirmation from "./Components/Confirmation";


const monst = Montserrat({ subsets: ['latin'] })

export default function Eligibility() {
    return (
        <div className='w-full py-[100px] px-10'>
            <div className='max-w-[900px] mx-auto my-0 text-center text-charcoal'>
                {/* <FaUserDoctor className='h-12 w-12 text-maize mb-5 mx-auto' /> */}
                {/* <PageOne /> */}
                {/* <PageTwo /> */}
                {/* <PageThree /> */}
                {/* <PageFour /> */}
                <Confirmation />
                
                
                <button className='mx-auto mb-0 py-4 px-10 text-lg rounded-full bg-charcoal text-white mt-10 flex justify-center items-center gap-3'>Continue <MdOutlineKeyboardArrowRight className='h-5 w-5'/></button>
            </div>
        </div>
    )
}