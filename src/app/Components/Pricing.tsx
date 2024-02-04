'use client';

import { AnimationOnScroll } from 'react-animation-on-scroll';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { client } from '../api/contentful';

export default function Pricing() {
    const router = useRouter();
    const [ plans, setPlans ] = useState<any[]>([]);
    const [ inclusions, setInclusions ] = useState<any | null>(null);
    const [ exclusions, setExclusions ] = useState<any | null>(null);

    const fetchApi = async () => {
        const entries = await client.getEntries();
    
        if (entries) {
            console.log(entries)
          let list:any[] = [];
          entries.items.forEach(item => {
              if (item.fields.inclusions && !item.fields.price) {
                  setInclusions(item.fields.inclusions)
              } else if (item.fields.exclusions) {
                setExclusions(item.fields);
              } else if (item.fields.price) {
                list.push(item.fields);
              }
              setPlans(list)
          })
        }
    }

    useEffect(() => {
        fetchApi();
    }, []);

    console.log(plans)

    return (
        <div className='w-full text-charcoal bg-vanilla' id='direct-pay'>
        <div className='max-w-[1200px] px-10 py-[80px] sm:py-[100px] mx-auto my-0 text-center'>
            <p className='text-[40px] sm:text-[48px] font-bold mb-2'>Pricing plan</p>
            <p className='text-lg sm:text-xl mb-[60px]'>Discover the right fit, affordable plans for every inch.</p>

            <div className='flex flex-col lg:flex-row justify-center items-stretch gap-20 lg:gap-10'>
            {plans && (
            <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce={true} className='border border-maize shadow-lg flex flex-col w-full mx-auto max-w-[600px] text-left bg-white rounded-md'>
                <div className='p-[30px] text-center'>
                    <p className='font-semibold text-[26px]'>{plans[0].planName}</p>
                    <p className='font-semibold text-[64px] mt-3 text-nowrap'>${plans[0].price}</p>
                    <p className='text-md font-medium mt-5'>{plans[0].frequency} <span className='text-maize'>(limited offer)</span>**</p>
                    <p className='text-md font-medium mt-5 text-darkvanilla'>Duration: {plans[0].duration}</p>
                    <p className='text-md font-medium'>Processing Time: {plans[0].processingTime}</p>
                    <button onClick={() => router.push('/Eligibility')} className='up mt-8 text-md sm:text-lg font-medium text-white bg-charcoal py-4 w-full rounded-md'>{plans[0].button}</button>
                </div>
                <div className='grow bg-maize/[0.15] p-[30px] flex flex-col justify-start items-start gap-10'>
                    <div className='flex justify-start items-start gap-3'>
                    <img src='/check.svg' className='w-6 h-6 dark-gold' />
                    <p className='text-md'>4-weeks of Compounded Semaglutide or Tirzeptide prescription *subject to availability</p>
                    </div>

                    <div className='flex justify-start items-start gap-3'>
                    <img src='/check.svg' className='w-6 h-6 dark-gold' />
                    <p className='text-md'>Complimentary 3-Month PPE Start Kit</p>
                    </div>

                    <div className='flex justify-start items-start gap-3'>
                    <img src='/check.svg' className='w-6 h-6 dark-gold' />
                    <p className='text-md'>1 Initial (30-60 min) + 1 Follow-up (20-40 mins), scheduled based on medical needs & doctor availability</p>
                    </div>

                    <div className='flex justify-start items-start gap-3'>
                    <img src='/check.svg' className='w-6 h-6 dark-gold' />
                    <p className='text-md'>Weekly weight loss support calls (up to 4x15 min)</p>
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
            )}

            {/* <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true} className='relative shadow-lg lg:shadow-none flex flex-col w-full mt-[60px] lg:mt-0 mx-auto max-w-[600px] lg:w-1/3 text-left bg-white rounded-md lg:rounded-tr-none lg:rounded-br-none'>
                <div className='absolute top-[-58px] left-0 right-0 p-4 text-center bg-maize rounded-t-md'>
                <p className='font-semibold text-white text-lg'>Limited Time Offer!</p>
                </div>
                <div className='absolute top-0 right-0 bottom-0 left-0 border-maize border-2'></div>
                <div className='p-[30px] text-center'>
                    <p className='font-semibold text-[26px]'>Power-Up Plan</p>
                    <p className='font-semibold text-[64px] mt-3 text-nowrap'>$169<span className='font-normal text-lg text-gold'>/month</span></p>
                    <p className='text-md font-medium mt-5'>Full trial, one-time fee**</p>
                    <p className='text-md font-medium mt-5'>Duration: 6 weeks</p>
                    <p className='text-md font-medium'>Processing Time: 3-5 days</p>
                    <button onClick={() => router.push('/Eligibility')} className='relative z-10 up mt-8 text-md sm:text-lg font-medium text-white bg-charcoal lg:w-full py-4 lg:px-6 px-10 rounded-lg'>Unlock your Power-Up now!</button>
                </div>
                <div className='grow bg-maize/[0.15] p-[30px] flex flex-col justify-start items-start gap-10'>
                    <div className='flex justify-start items-start gap-3'>
                    <img src='/check.svg' className='w-6 h-6 dark-gold' />
                    <p className='text-md'>6-weeks of Compounded Tirzepatide (2.5mg-5mg/week; subject to availability) prescription</p>
                    </div>

                    <div className='flex justify-start items-start gap-3'>
                    <img src='/check.svg' className='w-6 h-6 dark-gold' />
                    <p className='text-md'>Complimentary 3-Month Welcome Kit</p>
                    </div>

                    <div className='flex justify-start items-start gap-3'>
                    <img src='/check.svg' className='w-6 h-6 dark-gold' />
                    <p className='text-md'>1 Initial (30-60 min) + 1 Follow-up (20-40 mins), scheduled based on medical needs & doctor availability.</p>
                    </div>

                    <div className='flex justify-start items-start gap-3'>
                    <img src='/check.svg' className='w-6 h-6 dark-gold' />
                    <p className='text-md'>Up to 4 weekly phone check-ins (15 minutes each)</p>
                    </div>

                </div>
                
            </AnimationOnScroll> */}
            {plans && (
            <AnimationOnScroll animateIn="animate__fadeInRight" animateOnce={true} className='border border-maize shadow-lg flex flex-col w-full mx-auto max-w-[600px] text-left bg-white rounded-md'>
                <div className='p-[30px] text-center'>
                    <p className='font-semibold text-[26px]'>{plans[1].planName}</p>
                    <p className='font-semibold text-[64px] mt-3 text-nowrap'>${plans[1].price}</p>
                    <p className='text-md font-medium mt-5'>{plans[1].frequency}**</p>
                    <p className='text-md font-medium mt-5'>Duration: {plans[1].duration}</p>
                    <p className='text-md font-medium'>Processing Time: {plans[1].processingTime}</p>
                    <button onClick={() => router.push('/Eligibility')} className='up mt-8 text-md sm:text-lg font-medium text-white bg-charcoal py-4 w-full rounded-md'>{plans[1].button}</button>
                </div>
                <div className='grow bg-maize/[0.15] p-[30px] flex flex-col justify-start items-start gap-10'>
                        <div className='flex justify-start items-start gap-3'>
                        <img src='/check.svg' className='w-6 h-6 dark-gold' />
                        <p className='text-md'>4-weeks of Compounded Semaglutide or Tirzeptide prescription *subject to availability</p>
                        </div>


                        <div className='flex justify-start items-start gap-3'>
                        <img src='/check.svg' className='w-6 h-6 dark-gold' />
                        <p className='text-md'>15% off on 3-month PPE kit *Shipping not included</p>
                        </div>

                        <div className='flex justify-start items-start gap-3'>
                        <img src='/check.svg' className='w-6 h-6 dark-gold' />
                        <p className='text-md'>Up to 4 Quarterly Follow-ups (20-40 min), scheduled based on medical needs & doctor availability.</p>
                        </div>

                        <div className='flex justify-start items-start gap-3'>
                        <img src='/check.svg' className='w-6 h-6 dark-gold' />
                        <p className='text-md'>Monthly weight loss support calls (1x15 min)</p>
                        </div>

                        <div className='flex justify-start items-start gap-3'>
                        <img src='/check.svg' className='w-6 h-6 dark-gold' />
                        <p className='text-md'>Priority Telehealth/Lab Booking + Lifestyle Medly deals *subject to availability</p>
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
                )}
            </div>

            <div className='max-w-[1200px] mx-auto flex flex-col lg:flex-row justify-center items-stretch mt-20 gap-20 lg:gap-10 '>
                <div className='w-full lg:w-1/2 mx-auto text-left max-w-[600px]'>
                    <p className='text-xl font-semibold'>All plans include:</p>
                    {inclusions && inclusions.content[0].content.map((content:any) => (
                        <div className='flex justify-start items-start gap-3 ml-4 sm:ml-10 mt-5'>
                            <img src='/check.svg' className='w-7 h-7 dark-gold' />
                            <p className='text-md'>{content.content[0].content[0].value}</p>
                        </div>
                    ))}
                    
                    {/* <div className='flex justify-start items-start gap-3 ml-4 sm:ml-10 mt-5'>
                        <img src='/check.svg' className='w-7 h-7 dark-gold' />
                        <p className='text-md'>Select pharmacy-to-door Rx delivery! Shipping costs may apply.**</p>
                    </div>
                    <div className='flex justify-start items-start gap-3 ml-4 sm:ml-10 mt-5'>
                        <img src='/check.svg' className='w-7 h-7 dark-gold' />
                        <p className='text-md'>Access to our 24/7 hub of exclusive educational videos and Q&A sessions with our expert providers!</p>
                    </div>
                    <div className='flex justify-start items-start gap-3 ml-4 sm:ml-10 mt-5'>
                        <img src='/check.svg' className='w-7 h-7 dark-gold' />
                        <p className='text-md'>Weekly emails with delicious, registered-dietitian-approved meal plans</p>
                    </div>
                    <div className='flex justify-start items-start gap-3 ml-4 sm:ml-10 mt-5'>
                        <img src='/check.svg' className='w-7 h-7 dark-gold' />
                        <p className='text-md'>No lock-in, cancel anytime via email</p>
                    </div> */}
                </div>

                <div className='w-full lg:w-1/2 mx-auto text-left max-w-[600px]'>
                    <p className='text-xl font-semibold'>Not included:</p>
                    {exclusions && exclusions.exclusions.content[0].content.map((content:any) => (
                        <div className='flex justify-start items-start gap-3 ml-4 sm:ml-10 mt-5'>
                            <img src='/x.svg' className='w-7 h-7' />
                            <p className='text-md'>{content.content[0].content[0].value}</p>
                        </div>
                    ))}
                    
                    {/* <div className='flex justify-start items-start gap-3 ml-4 sm:ml-10 mt-5'>
                        <img src='/x.svg' className='w-7 h-7' />
                        <p className='text-md'>Labs (typically covered by insurance)</p>
                    </div>
                    <div className='flex justify-start items-start gap-3 ml-4 sm:ml-10 mt-5'>
                        <img src='/x.svg' className='w-7 h-7' />
                        <p className='text-md'>Optional* Home-drawn Labs ($50 add-on fee** subject to availability)</p>
                    </div>
                    <div className='flex justify-start items-start gap-3 ml-4 sm:ml-10 mt-5'>
                        <img src='/x.svg' className='w-7 h-7' />
                        <p className='text-md'>Optional* Home injections ($100 add-on fee** subject to availability)</p>
                    </div> */}
                    <p className='text-md mt-5 ml-10'>{exclusions && exclusions.disclaimer}</p>
                </div>
            </div>


            

        </div>

        </div>
    )
}