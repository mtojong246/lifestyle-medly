import { AnimationOnScroll } from 'react-animation-on-scroll';

export default function Pricing() {
    return (
        <div className='w-full text-charcoal bg-vanilla' id='direct-pay'>
        <div className='max-w-[1400px] px-10 py-[80px] sm:py-[100px] mx-auto my-0 text-center'>
            <p className='text-[40px] sm:text-[48px] font-bold mb-2'>Pricing plan</p>
            <p className='text-lg sm:text-xl mb-[60px] sm:mb-[120px]'>Discover the right fit, affordable plans for every inch.</p>

            <div className='flex flex-col lg:flex-row justify-center items-stretch lg:gap-0 gap-20 shadow-none lg:shadow-lg'>
            <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce={true} className='shadow-lg lg:shadow-none flex flex-col w-full mx-auto max-w-[600px] lg:w-1/3 text-left bg-white rounded-md lg:rounded-tr-none lg:rounded-br-none'>
                <div className='p-[30px] text-center'>
                    <p className='font-semibold text-[26px]'>Start-Up Plan</p>
                    <p className='font-semibold text-[64px] mt-3 text-nowrap'>$169<span className='font-normal text-lg text-gold'>/month</span></p>
                    <p className='text-md font-medium mt-5 text-darkvanilla'>Duration: 11 weeks</p>
                    <p className='text-md font-medium'>Processing Time: 3-5 days</p>
                    <button className='up mt-8 text-md sm:text-lg font-medium text-white bg-charcoal lg:w-full py-4 lg:px-6 px-4 sm:px-10 rounded-lg'>Start your kickstart today!</button>
                </div>
                <div className='grow bg-maize/[0.15] p-[30px] flex flex-col justify-start items-start gap-10'>
                    <div className='flex justify-start items-start gap-3'>
                    <img src='/check.svg' className='w-6 h-6 dark-gold' />
                    <p className='text-md'>11-weeks of Compounded Semaglutide (0.25mg-0.5mg weekly dose) prescription</p>
                    </div>

                    <div className='flex justify-start items-start gap-3'>
                    <img src='/check.svg' className='w-6 h-6 dark-gold' />
                    <p className='text-md'>BONUS welcome kit full of helpful resources for your first month</p>
                    </div>

                    <div className='flex justify-start items-start gap-3'>
                    <img src='/check.svg' className='w-6 h-6 dark-gold' />
                    <p className='text-md'>FREE Overnight Shipping</p>
                    </div>

                    <div className='flex justify-start items-start gap-3'>
                    <img src='/check.svg' className='w-6 h-6 dark-gold' />
                    <p className='text-md'>FREE Initial Consultation & Follow-up via telehealth</p>
                    </div>

                    {/* <div className='flex justify-start items-start gap-3'>
                    <img src='/check.svg' className='w-6 h-6 dark-gold' />
                    <p className='text-md'>FREE exclusive weekly check-ins with our dedicated weight loss team</p>
                    </div>

                    <div className='flex justify-start items-start gap-3'>
                    <img src='/check.svg' className='w-6 h-6 dark-gold' />
                    <p className='text-md'>FREE in-office injections with personalized teaching by our registered nurses</p>
                    </div>

                    <div className='flex justify-start items-start gap-3'>
                    <img src='/check.svg' className='w-6 h-6 dark-gold' />
                    <p className='text-md'>FREE access to our 24/7 hub of exclusive educational videos and Q&A sessions with our expert providers!</p>
                    </div>

                    <div className='flex justify-start items-start gap-3'>
                    <img src='/check.svg' className='w-6 h-6 dark-gold' />
                    <p className='text-md'>FREE weekly emails with delicious, registered-dietitian-approved meal plans</p>
                    </div> */}

                </div>
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true} className='relative shadow-lg lg:shadow-none flex flex-col w-full mt-[60px] lg:mt-0 mx-auto max-w-[600px] lg:w-1/3 text-left bg-white rounded-md lg:rounded-tr-none lg:rounded-br-none'>
                <div className='absolute top-[-58px] left-0 right-0 p-4 text-center bg-maize rounded-t-md'>
                <p className='font-semibold text-white text-lg'>Limited Time Offer!</p>
                </div>
                <div className='absolute top-0 right-0 bottom-0 left-0 border-maize border-2'></div>
                <div className='p-[30px] text-center'>
                    <p className='font-semibold text-[26px]'>Power-Up Plan</p>
                    <p className='font-semibold text-[64px] mt-3 text-nowrap'>$169<span className='font-normal text-lg text-gold'>/month</span></p>
                    <p className='text-md font-medium mt-5'>Duration: 6 weeks</p>
                    <p className='text-md font-medium'>Processing Time: 3-5 days</p>
                    <button className='relative z-10 up mt-8 text-md sm:text-lg font-medium text-white bg-charcoal lg:w-full py-4 lg:px-6 px-10 rounded-lg'>Unlock your Power-Up now!</button>
                </div>
                <div className='grow bg-maize/[0.15] p-[30px] flex flex-col justify-start items-start gap-10'>
                    <div className='flex justify-start items-start gap-3'>
                    <img src='/check.svg' className='w-6 h-6 dark-gold' />
                    <p className='text-md'>6-weeks of Compounded Tirzepatide (2.5mg-5mg weekly dose) prescription</p>
                    </div>

                    <div className='flex justify-start items-start gap-3'>
                    <img src='/check.svg' className='w-6 h-6 dark-gold' />
                    <p className='text-md'>BONUS welcome kit on your 1st month packed with essential resources!</p>
                    </div>

                    <div className='flex justify-start items-start gap-3'>
                    <img src='/check.svg' className='w-6 h-6 dark-gold' />
                    <p className='text-md'>FREE Overnight Shipping</p>
                    </div>

                    <div className='flex justify-start items-start gap-3'>
                    <img src='/check.svg' className='w-6 h-6 dark-gold' />
                    <p className='text-md'>FREE Initial Consultation & Follow-up via telehealth</p>
                    </div>

                    {/* <div className='flex justify-start items-start gap-3'>
                    <img src='/check.svg' className='w-6 h-6 dark-gold' />
                    <p className='text-md'>FREE exclusive weekly check-ins with our dedicated weight loss team</p>
                    </div>

                    <div className='flex justify-start items-start gap-3'>
                    <img src='/check.svg' className='w-6 h-6 dark-gold' />
                    <p className='text-md'>FREE in-office injections with personalized teaching by our registered nurses</p>
                    </div>

                    <div className='flex justify-start items-start gap-3'>
                    <img src='/check.svg' className='w-6 h-6 dark-gold' />
                    <p className='text-md'>FREE access to our 24/7 hub of exclusive educational videos and Q&A sessions with our expert providers!</p>
                    </div>

                    <div className='flex justify-start items-start gap-3'>
                    <img src='/check.svg' className='w-6 h-6 dark-gold' />
                    <p className='text-md'>FREE weekly emails with delicious, registered-dietitian-approved meal plans</p>
                    </div> */}

                </div>
                
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__fadeInRight" animateOnce={true} className='shadow-lg lg:shadow-none flex flex-col w-full mx-auto max-w-[600px] lg:w-1/3 text-left bg-white rounded-md lg:rounded-tl-none lg:rounded-bl-none'>
                <div className='p-[30px] text-center'>
                    <p className='font-semibold text-[26px]'>Loyalty Program Plan</p>
                    <p className='font-semibold text-[64px] mt-3 text-nowrap'>$99<span className='font-normal text-lg text-gold'>/month</span></p>
                    <p className='text-md font-medium mt-5'>Exclusive discounts</p>
                    <p className='text-md font-medium'>& priority access!</p>
                    <button className='up mt-8 text-md sm:text-lg font-medium text-white bg-charcoal lg:w-full py-4 lg:px-6 px-10 rounded-lg'>Continue Your Journey!</button>
                </div>
                <div className='grow bg-maize/[0.15] p-[30px] flex flex-col justify-start items-start gap-10'>
                        <div className='flex justify-start items-start gap-3'>
                        <img src='/check.svg' className='w-6 h-6 dark-gold' />
                        <p className='text-md'>10% off labs at home for follow-up</p>
                        </div>

                        <div className='flex justify-start items-start gap-3'>
                        <img src='/check.svg' className='w-6 h-6 dark-gold' />
                        <p className='text-md'>Consistent medication delivery to your home</p>
                        </div>

                        <div className='flex justify-start items-start gap-3'>
                        <img src='/check.svg' className='w-6 h-6 dark-gold' />
                        <p className='text-md'>Priority booking for Telehealth and Lab Appointments</p>
                        </div>

                        <div className='flex justify-start items-start gap-3'>
                        <img src='/check.svg' className='w-6 h-6 dark-gold' />
                        <p className='text-md'>FREE monthly consultation with expert physicians</p>
                        </div>

                        {/* <div className='flex justify-start items-start gap-3'>
                        <img src='/check.svg' className='w-6 h-6 dark-gold' />
                        <p className='text-md'>FREE exclusive weekly check-ins with our dedicated weight loss team</p>
                        </div>

                        <div className='flex justify-start items-start gap-3'>
                        <img src='/check.svg' className='w-6 h-6 dark-gold' />
                        <p className='text-md'>FREE in-office injections with personalized teaching by our registered nurses</p>
                        </div>

                        <div className='flex justify-start items-start gap-3'>
                        <img src='/check.svg' className='w-6 h-6 dark-gold' />
                        <p className='text-md'>FREE access to our 24/7 hub of exclusive educational videos and Q&A sessions with our expert providers!</p>
                        </div>

                        <div className='flex justify-start items-start gap-3'>
                        <img src='/check.svg' className='w-6 h-6 dark-gold' />
                        <p className='text-md'>FREE weekly emails with delicious, registered-dietitian-approved meal plans</p>
                        </div> */}

                    </div>
                </AnimationOnScroll>
            </div>

            <div className='max-w-[1200px] mx-auto flex flex-col lg:flex-row justify-center items-stretch mt-20 gap-20 lg:gap-10 '>
                <div className='w-full lg:w-1/2 mx-auto text-left max-w-[600px]'>
                    <p className='text-xl font-semibold'>All plans include:</p>
                    <div className='flex justify-start items-start gap-3 ml-4 sm:ml-10 mt-5'>
                        <img src='/check.svg' className='w-7 h-7 dark-gold' />
                        <p className='text-md'>FREE exclusive weekly check-ins with our dedicated weight loss team</p>
                    </div>
                    <div className='flex justify-start items-start gap-3 ml-4 sm:ml-10 mt-5'>
                        <img src='/check.svg' className='w-7 h-7 dark-gold' />
                        <p className='text-md'>FREE in-office injections with personalized teaching by our registered nurses</p>
                    </div>
                    <div className='flex justify-start items-start gap-3 ml-4 sm:ml-10 mt-5'>
                        <img src='/check.svg' className='w-7 h-7 dark-gold' />
                        <p className='text-md'>FREE access to our 24/7 hub of exclusive educational videos and Q&A sessions with our expert providers!</p>
                    </div>
                    <div className='flex justify-start items-start gap-3 ml-4 sm:ml-10 mt-5'>
                        <img src='/check.svg' className='w-7 h-7 dark-gold' />
                        <p className='text-md'>FREE weekly emails with delicious, registered-dietitian-approved meal plans</p>
                    </div>
                </div>

                <div className='w-full lg:w-1/2 mx-auto text-left max-w-[600px]'>
                    <p className='text-xl font-semibold'>Not included:</p>
                    <div className='flex justify-start items-start gap-3 ml-4 sm:ml-10 mt-5'>
                        <img src='/x.svg' className='w-7 h-7' />
                        <p className='text-md'>Labs (insurance or $50)</p>
                    </div>
                    <div className='flex justify-start items-start gap-3 ml-4 sm:ml-10 mt-5'>
                        <img src='/x.svg' className='w-7 h-7' />
                        <p className='text-md'>Medications (as low as $25/week)</p>
                    </div>
                    <div className='flex justify-start items-start gap-3 ml-4 sm:ml-10 mt-5'>
                        <img src='/x.svg' className='w-7 h-7' />
                        <p className='text-md'>Optional nurse teaching for home injections for as low as $100 (for Central NJ customers)</p>
                    </div>
                </div>
            </div>

            

        </div>

        </div>
    )
}