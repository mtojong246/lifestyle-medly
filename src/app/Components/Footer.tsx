import { FaPhoneAlt } from "react-icons/fa";
import { FaFax, FaFacebook, FaYoutube, FaTiktok, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Link from "next/link";

export default function Footer() {
    return (
        <div className='w-full bg-charcoal p-16'>
            <div className='max-w-[1000px] mx-auto my-0 flex flex-col md:flex-row justify-between items-stretch md:items-start text-sm text-white gap-16 md:gap-10'>
            <div className='md:hidden flex flex-col justify-start items-center gap-10 '>
                    <img src='/lifestyle_logo.png' width='200px' height='200px' className='white'/>
                </div>
                <div className='flex flex-col justify-start items-center md:items-start gap-4 text-lg md:text-base'>
                    <p className='font-semibold'>GET IN TOUCH</p>
                    <div className='text-center md:text-left'>
                        <p>2650 US-130, Ste B</p>
                        <p>Cranbury, NJ 08512</p>
                    </div>
                    <div className='flex justify-center items-center gap-2'><FaPhoneAlt className='h-3 w-3' /> <p>201-844-9062</p></div>
                    <div className='flex justify-center items-center gap-2'><FaFax className='h-3 w-3' /><p>201-365-5737</p></div>
                    <div className='flex justify-center items-center gap-2'><MdEmail className='h-4 w-4'/><a href='mailto:support@lifestylemedly.com' className="hover:text-maize">support@lifestylemedly.com</a></div>
                </div>

                <div className='flex flex-col justify-start items-center md:items-start gap-4 text-lg md:text-base'>
                    <p className='font-semibold'>COMPANY</p>
                    <Link className='hover:text-maize' href='/TermsOfService' >Terms of Service</Link>
                    <Link className='hover:text-maize' href='/PrivacyPolicy' >Privacy Policy</Link>
                    <Link className='hover:text-maize' href='/PrivacyPractices' >Privacy Practices</Link>
                    <Link className='hover:text-maize' href='/Disclaimer'>Disclaimer</Link>
                </div>

                <div className='flex flex-col justify-start items-center md:items-start gap-4 text-lg md:text-base'>
                    <p className='font-semibold'>QUICK LINKS</p>
                    <a className='hover:text-maize' href='https://drive.google.com/file/d/13k0h3_3sSd5XkgCUk-jlYhjF2mbnBLGt/view?usp=sharing' target='_blank' rel='noreferrer'>Patient Consent</a>
                    <a className='hover:text-maize' href='https://drive.google.com/file/d/1mXaA7C1jHdQ2Lyw1GcKPUEIubEKNhNzK/view?usp=sharing' target='_blank' rel='noreferrer'>Patient Registration</a>
                    <a className='hover:text-maize' href='https://chluy.myaestheticrecord.com/online-booking/hash/Ml8yMDgzNl9jbGluaWNz' target="_blank" rel="noreferrer">Schedule Appointment</a>
                    <p className='font-semibold mt-16 md:mt-5'>STAY IN TOUCH</p>
                    <div className='flex justify-center items-center gap-2'>
                        <a href='https://www.facebook.com/profile.php?id=61555345954621' target="_blank" rel="noreferrer"><FaFacebook className='h-8 w-8 md:h-5 md:w-5 hover:text-maize' /></a>
                        <a href='https://www.instagram.com/lifestylemedly/' target="_blank" rel="noreferrer"><FaInstagram className='h-8 w-8 md:h-5 md:w-5 hover:text-maize' /></a>
                        <a href='https://www.tiktok.com/@_lifestylemedly' target="_blank" rel="noreferrer"><FaTiktok className='h-8 w-8 md:h-5 md:w-5 hover:text-maize' /></a>
                        <a href='https://www.youtube.com/channel/UC7sflAG70ohUbJYCsULx1og' target="_blank" rel="noreferrer"><FaYoutube className='h-8 w-8 md:h-5 md:w-5 hover:text-maize' /></a>
                    </div>
                </div>

                <div className='md:flex hidden flex-col justify-start items-center gap-10 '>
                    <img src='/lifestyle_logo.png' width='150px' height='150px' className='white'/>
                </div>
            </div>
        </div>
    )
}