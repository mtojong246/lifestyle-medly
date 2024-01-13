import { FaPhoneAlt } from "react-icons/fa";
import { FaFax } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
    return (
        <div className='w-full bg-charcoal p-16'>
            <div className='max-w-[900px] mx-auto my-0 flex justify-between items-start text-sm text-white'>
                <div className='flex flex-col justify-start items-start gap-4'>
                    <p className='font-semibold'>GET IN TOUCH</p>
                    <div>
                        <p>441 US-130</p>
                        <p>East Windsor, NJ 08520</p>
                    </div>
                    <div className='flex justify-center items-center gap-2'><FaPhoneAlt className='h-3 w-3' /> <p>201-844-9062</p></div>
                    <div className='flex justify-center items-center gap-2'><FaFax className='h-3 w-3' /><p>201-365-5737</p></div>
                    <div className='flex justify-center items-center gap-2'><MdEmail className='h-4 w-4'/><a href='mailto:support@lifestylemedly.com' className="hover:text-maize">support@lifestylemedly.com</a></div>
                </div>

                <div className='flex flex-col justify-start items-start gap-4 '>
                    <p className='font-semibold'>COMPANY</p>
                    <a className='hover:text-maize' href='https://docs.google.com/document/d/10OSISyKsOgvIaUuSnPugaGHXJP3Hn9HV/edit?usp=sharing&ouid=110993120075762838849&rtpof=true&sd=true' target="_blank" rel="noreferrer">Terms of Service</a>
                    <a className='hover:text-maize' href='https://docs.google.com/document/d/17vN7Lte3dzR8v4EF0F0XEnO-cLd7yd7I/edit?usp=sharing&ouid=110993120075762838849&rtpof=true&sd=true' target="_blank" rel="noreferrer">Privacy Policy</a>
                    <a className='hover:text-maize' href='https://docs.google.com/document/d/1L41nAEqhLysgaIjE3MjpJngrQuCDcAUS/edit?usp=sharing&ouid=110993120075762838849&rtpof=true&sd=true' target="_blank" rel="noreferrer">Privacy Practices</a>
                    <a className='hover:text-maize' href='https://docs.google.com/document/d/12-evYVypmlqOxi3O8jAHVQCqOpg2mLDo/edit?usp=sharing&ouid=110993120075762838849&rtpof=true&sd=true' target="_blank" rel="noreferrer">State Specific Notices</a>
                </div>

                <div className='flex flex-col justify-start items-start gap-4 '>
                    <p className='font-semibold'>QUICK LINKS</p>
                    <a className='hover:text-maize' href='https://docs.google.com/document/d/1APPpRZmCjbkBhawDEz_k7ApOngIG85n7/edit?usp=sharing&ouid=110993120075762838849&rtpof=true&sd=true' target="_blank" rel="noreferrer">Patient Consent</a>
                    <a className='hover:text-maize' href='https://docs.google.com/document/d/1RemK2_8eyEV8RlUMN5f7O7cIcHwRMS0T/edit?usp=sharing&ouid=110993120075762838849&rtpof=true&sd=true' target="_blank" rel="noreferrer">Patient Registration</a>
                    <a className='hover:text-maize' href='https://chluy.myaestheticrecord.com/online-booking/hash/Ml8yMDgzNl9jbGluaWNz' target="_blank" rel="noreferrer">Schedule Appointment</a>
                </div>

                <div className='flex flex-col justify-start items-center gap-10 '>
                    <img src='/lifestyle_logo.png' width='100px' height='100px' className='white'/>
                </div>
            </div>
        </div>
    )
}