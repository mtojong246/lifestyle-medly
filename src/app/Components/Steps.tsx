import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";
import 'animate.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';

export default function Steps() {
    return (
    <div className='w-full text-charcoal bg-vanilla' id='how-it-works'>
      <div className='max-w-[1400px] px-10 py-[40px] sm:py-[100px] mx-auto my-0 text-center' >
        <AnimationOnScroll animateIn="animate__heartBeat" animateOnce={true} ><img src='/heart-rate.png' className='h-16 w-16 sm:h-20 sm:w-20 mb-5 mx-auto my-0 ' /></AnimationOnScroll>
        <p className='text-[36px] sm:text-[54px] font-bold mb-5'>A weight loss program that is seamless, empowering, and result-driven.</p>
        <p className='text-lg max-w-[600px] mx-auto my-0'>Welcome to your personally tailored program, where results are  promised and <span className='font-bold'>DELIVERED!</span></p>
        <div className='w-full flex justify-between items-stretch mt-[120px] flex-col md:flex-row gap-24 md:gap-0'>

          <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true} className='border-4 border-charcoal rounded-md p-[30px] flex-grow relative max-w-[600px] mx-auto md:max-w-[32%]'>
            <div className='absolute w-full top-[-55px] left-0 flex justify-center'>
              <div className='bg-maize flex justify-center items-center rounded-full w-[100px] h-[100px]'>
                <img src='/call.png' />
              </div>
            </div>
            <div className='mt-10'>
              <p className='text-[22px] font-bold mb-4'>Step 1</p>
              <p className='text-[28px] font-bold mb-4'><span className='text-maize'>Connect</span> with a Physician</p> 
              <p className='text-md sm:text-lg'>Start your journey by consulting with a qualified provider. Collaborate closely to set your weight loss goals. If it's the right fit for you, your personalized prescription may include the revolutionary GLP-1 medication, a key player in your tailored treatment plan.</p>
            </div>
          </AnimationOnScroll>

          <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true} delay={100} className='border-4 border-charcoal rounded-md p-[30px] flex-grow relative max-w-[600px] mx-auto md:max-w-[32%]'>
            <div className='absolute w-full top-[-55px] left-0 flex justify-center'>
              <div className='bg-maize flex justify-center items-center rounded-full w-[100px] h-[100px]'>
                <img src='/pill.png' />
              </div>
            </div>
            <div className='mt-10'>
              <p className='text-[22px] font-bold mb-4'>Step 2</p>
              <p className='text-[28px] font-bold mb-4'><span className='text-maize'>Launch</span> Your Weightloss Program</p> 
              <p className='text-md sm:text-lg'>Set out on your personalized journey to weight loss with confidence, knowing that our devoted team is here to assist you at every twist and turn. With the right medications and continuous lab support, rest assured that your journey is a seamless and comprehensive experience. Our program is designed with you in mind.</p>
            </div>
          </AnimationOnScroll>

          <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true} delay={200} className='border-4 border-charcoal rounded-md p-[30px] flex-grow relative max-w-[600px] mx-auto md:max-w-[32%]'>
            <div className='absolute w-full top-[-55px] left-0 flex justify-center'>
              <div className='bg-maize flex justify-center items-center rounded-full w-[100px] h-[100px]'>
                <img src='/body.png' />
              </div>
            </div>
            <div className='mt-10'>
              <p className='text-[22px] font-bold mb-4'>Step 3</p>
              <p className='text-[28px] font-bold mb-4'><span className='text-maize'>Enjoy</span> the Result</p> 
              <p className='text-md sm:text-lg'>Stick to your prescribed plan, make changes along with your provider as it fits to your needs and health, and witness your transformation. Embrace the thrill of healthier choices, and a more confident version of you with support of our expert team at every step.</p>
            </div>
          </AnimationOnScroll>
          
        </div>

        <p className='text-lg sm:text-xl max-w-[600px] mx-auto mt-[80px] mb-[40px]'>At Lifestyle Medly, we're not selling a dream – we are helping you curate a lifestyle guided by principles of medicine and healthy living. </p>
        <Link href='/Eligibility'><button className='mx-auto my-0 py-4 px-10 text-lg rounded-full text-white mt-16 flex justify-center items-center gap-3 slide-btn'>Get Started Today <MdOutlineKeyboardArrowRight className='h-5 w-5'/></button></Link>
      </div>
    </div>
    )
}