import { FaPhoneAlt, FaFax } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

export default function Contact() {
    return (
        <div className='w-full bg-vanilla text-charcoal py-[100px] px-10'>
            <div className='max-w-[1000px] my-0 mx-auto text-center'>
                <p className='text-[42px] font-semibold mb-[80px]'>GET IN TOUCH</p>
                <div className='flex flex-col md:flex-row justify-center items-stretch gap-10'>
                    <div className='w-full md:w-1/3'>
                        <div className='mx-auto bg-[#C0B9B2] rounded-full w-[100px] h-[100px] flex justify-center items-center'>
                            <FaLocationDot className='white h-[50px] w-[50px]' />
                        </div>
                        <p className='mt-4 text-xl font-semibold mb-3'>ADDRESS</p>
                        <p>441 US-130</p>
                        <p>East Windsor, NJ 08520</p>
                    </div>
                    <div className='w-full md:w-1/3'>
                        <div className='mx-auto bg-[#C0B9B2] rounded-full w-[100px] h-[100px] flex justify-center items-center'>
                            <FaPhoneAlt className='white h-[50px] w-[50px]' />
                        </div>
                        <p className='mt-4 text-xl font-semibold mb-3'>PHONE</p>
                        <p>Main: 201-844-9062</p>
                        <p>Fax: 201-365-5737</p>
                    </div>
                    <div className='w-full md:w-1/3'>
                        <div className='mx-auto bg-[#C0B9B2] rounded-full w-[100px] h-[100px] flex justify-center items-center'>
                            <MdEmail className='white h-[50px] w-[50px]' />
                        </div>
                        <p className='mt-4 text-xl font-semibold mb-3'>EMAIL</p>
                        <a href='mailto:support@lifestylemedly.com' className="hover:text-maize">support@lifestylemedly.com</a>
                    </div>
                </div>
            </div>
        </div>
    )
}