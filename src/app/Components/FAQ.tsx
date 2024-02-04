'use client';

import { MouseEvent } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { client } from "../api/contentful";
import { useState, useEffect } from "react";

export default function FAQ() {
  const [ faqs, setFaqs ] = useState<any[]>([]);
  const [ open, setIsOpen ] = useState<any | null>(null);

  const toggleOpen = (e:MouseEvent<HTMLButtonElement>, number: string) => {
    e.preventDefault();
    setIsOpen({
      ...open,
      [number]: !open[number as keyof object],
    })
  }
  
  const fetchApi = async () => {
    const entries = await client.getEntries();

    if (entries) {
      let list:any[] = [];
      let numbersObj:any = {};
      entries.items.forEach(item => {
          if (item.fields.question) {
              list.push(item.fields)
          }
      })
      setFaqs(list);
      list.forEach((li,i) => {
        numbersObj[i.toString() as keyof object] = false;
      })
      setIsOpen(numbersObj)

    }
  }

  useEffect(() => {
    fetchApi();
  }, []);

  console.log(faqs)



  
  return (
    <div className='w-full text-charcoal' id='faq'>
      <div className='max-w-[1200px] mx-auto px-10 py-[40px] sm:py-[80px] flex flex-col justify-center items-center gap-[46px]'>
        {faqs && faqs.map((faq, index) => {
          
          return (
            <div className='w-full'>
              <div className='flex justify-between items-start gap-6'>
                <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce={true}><p className=' text-[28px] sm:text-[42px] font-bold max-w-[1200px]'>{faq.question}</p></AnimationOnScroll>
                <AnimationOnScroll animateIn="animate__fadeInRight" animateOnce={true}><button onClick={(e:MouseEvent<HTMLButtonElement>) => toggleOpen(e, index.toLocaleString())}><AiFillPlusCircle className={`hover:text-gold h-[60px] w-[60px] text-maize transition ease-in-out duration-[500ms] ${open[index.toLocaleString()] ? 'rotate' : ''}`} /></button></AnimationOnScroll>
              </div>
              <div className={`border border-maize rounded-md p-8 mt-10 text-[18px] closed ${open[index.toLocaleString()] ? 'faq-open' : ''}`}>
                {faq.video && (
                  <video className="w-full mb-5 border border-charcoal " controls>
                    <source src={faq.video.fields.file.url} type={faq.video.fields.file.contentType}></source>
                  </video>
                )}
                <p className='font-semibold mb-5 text-[28px] sm:text-[32px]'>Answer:</p>
                {faq.formattedAnswers.content && faq.formattedAnswers.content.map((content:any, i:number) => (
                  <>
                  {content.content.map((c:any, index:number) => {
                    
                    if (c.nodeType === 'text') {
                      return (
                        <p className={`${c.marks && c.marks.length ? 'font-bold' : 'font-normal'} mb-5`}>{c.value}</p>
                      )
                    } else if (c.nodeType === 'list-item') {
                      return (
                      <ul className='list-disc pl-10 my-5'>
                      {c.content.map((list:any) => (
                        <li>{list.content[0].value}</li>
                      ))}
                      </ul>
                      )
                      
                    }
                    
                  })}
                  </>
                  // <p className={`${i < content.length-1 ? 'mb-5' : 'mb-0'}`}>{content.content[0].value}</p>
                ))}
                
              </div>
            </div>
          )
        })}
        

        {/* <div className='w-full'>
          <div className='flex justify-between items-start gap-6'>
            <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce={true}><p className='text-[28px] sm:text-[42px] font-bold max-w-[1200px]'>What is Tirzepatide for Weight Loss?</p></AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInRight" animateOnce={true}><button onClick={(e:MouseEvent<HTMLButtonElement>) => toggleOpen(e, 'two')}><AiFillPlusCircle className={`hover:text-gold h-[60px] w-[60px] text-maize transition ease-in-out duration-[500ms] ${open.two ? 'rotate' : ''}`} /></button></AnimationOnScroll>
          </div>
          <div className={`border border-maize rounded-md p-8 mt-10 text-[18px] closed ${open.two ? 'faq-open' : ''}`}>
            <p className='font-semibold mb-5 text-[28px] sm:text-[32px]'>Answer:</p>
            <p className='mb-5'>Tirzepatide is like a precision tool designed for weight management. It acts as a dual GIP and GLP-1 receptor agonist, targeting two key hormones that regulate appetite and insulin. Initially developed to manage type 2 diabetes, tirzepatide's effectiveness in weight loss emerged as a significant benefit. This discovery led to focused research, revealing impressive results in body weight reduction. In clinical trials, tirzepatide demonstrated remarkable efficacy:</p>
            <ul className='list-disc ml-20'>
              <li className='mb-5'>15.3% of adults on a 5 mg dose achieved an average weight loss of 25% (around 57 lbs)</li>
              <li>32.3% of adults on a 10 mg dose saw similar results (approximately 58 lbs)</li>
            </ul>
          </div>
        </div>

        <div className='w-full'>
          <div className='flex justify-between items-start gap-6'>
            <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce={true}><p className='text-[28px] sm:text-[42px] font-bold max-w-[1200px]'>How do Semaglutide and Tirzepatide Help with Weight Loss?</p></AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInRight" animateOnce={true}><button onClick={(e:MouseEvent<HTMLButtonElement>) => toggleOpen(e, 'three')}><AiFillPlusCircle className={`hover:text-gold h-[60px] w-[60px] text-maize transition ease-in-out duration-[500ms] ${open.three ? 'rotate' : ''}`} /></button></AnimationOnScroll>
          </div>
          <div className={`border border-maize rounded-md p-8 mt-10 text-[18px] closed ${open.three ? 'faq-open' : ''}`}>
            <p className='font-semibold mb-5 text-[28px] sm:text-[32px]'>Answer:</p>
            <p className='mb-5'>Semaglutide and Tirzepatide are like special helpers for losing weight. They both work in ways that make your body better at managing weight.</p>
            <p className='mb-5 font-semibold'>Semaglutide:</p>
            <ul className='list-disc ml-20 mb-5'>
              <li className='mb-5'>It acts like a hormone in your body to control hunger. This means you feel less hungry and eat less.</li>
              <li className='mb-5'>It helps to balance your insulin, which is important for controlling blood sugar and stopping cravings.</li>
              <li>It slows down how fast your food is digested, so you feel full longer.</li>
            </ul>
            <p className='mb-5 font-semibold'>Tirzepatide:</p>
            <ul className='list-disc ml-20 mb-5'>
              <li className='mb-5'>It also works like a hormone to control hunger and insulin.</li>
              <li>What's cool about Tirzepatide is that it targets two hormones at once, making it really effective at managing weight.</li>
            </ul>
            <p className='mb-5'>Both of these medicines were first used for type 2 diabetes but were found to help a lot with weight loss too. In studies, a lot of people lost a significant amount of weight using these medicines. They're not magic injections, though. They work best when you also eat healthily and exercise.</p>
            <p className='mb-5'>Remember, these medicines are only for people with a doctor's prescription, and they can have some side effects. But most of these side effects are mild and go away after a while.</p>
          </div>
        </div>

        <div className='w-full'>
          <div className='flex justify-between items-start gap-6'>
            <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce={true}><p className='text-[28px] sm:text-[42px] font-bold max-w-[1200px]'>What are those side effects and how common are they?</p></AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInRight" animateOnce={true}><button onClick={(e:MouseEvent<HTMLButtonElement>) => toggleOpen(e, 'four')}><AiFillPlusCircle className={`hover:text-gold h-[60px] w-[60px] text-maize transition ease-in-out duration-[500ms] ${open.four ? 'rotate' : ''}`}/></button></AnimationOnScroll>
          </div>
          <div className={`border border-maize rounded-md p-8 mt-10 text-[18px] closed ${open.four ? 'faq-open' : ''}`}>
            <p className='font-semibold mb-5 text-[28px] sm:text-[32px]'>Answer:</p>
            <ul className='list-disc ml-10'>
              <li className='mb-5'>Stomach related side effects - nausea, vomiting, diarrhea, constipation, abdominal pain (approx 1 in 10 people experience these) </li>
              <li className='mb-5'>Site reactions (3 in a 100 people reported)</li>
              <li className='mb-5'>Fatigue (up to 1 in 10 people reported)</li>
              <li>Headaches (up to 2 in 10 reported)</li>
            </ul>
          </div>
        </div>

        <div className='w-full'>
          <div className='flex justify-between items-start gap-6'>
            <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce={true}><p className='text-[28px] sm:text-[42px] font-bold max-w-[1200px]'>How does our curated weight loss program work?</p></AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInRight" animateOnce={true}><button onClick={(e:MouseEvent<HTMLButtonElement>) => toggleOpen(e, 'five')}><AiFillPlusCircle className={`hover:text-gold h-[60px] w-[60px] text-maize transition ease-in-out duration-[500ms] ${open.five ? 'rotate' : ''}`} /></button></AnimationOnScroll>
          </div>
          <div className={`border border-maize rounded-md p-8 mt-10 text-[18px] closed ${open.five ? 'faq-open' : ''}`}>
            <p className='font-semibold mb-5 text-[28px] sm:text-[32px]'>Answer:</p>
            <div className='ml-10'>
              <p className='mb-5'><span className='inline-block mr-2 font-semibold'>Step 1:</span> We begin with a quick online questionnaire to understand your goals, health history, and lifestyle and consent to treat you.</p>
              <p className='mb-5'><span className='inline-block mr-2 font-semibold'>Step 2:</span> A dedicated nurse will personally guide you through enrollment, ensuring your safety and answering any questions.</p>
              <p className='mb-5'><span className='inline-block mr-2 font-semibold'>Step 3:</span> A telehealth appointment with your weight loss provider lets you review your blood work and discuss your personalized roadmap.</p>
              <p className='mb-5'><span className='inline-block mr-2 font-semibold'>Step 4:</span> Based on your blood work and needs, your provider selects the optimal medication dosing based on your needs and desired weight loss goal.</p>
              <p className='mb-5'><span className='inline-block mr-2 font-semibold'>Step 5:</span> We will place your order through one of our partner pharmacies for home delivery.  We will also ship a complementary injection and PPE customized kit to the patient’s home.</p>
              <p className='mb-5'><span className='inline-block mr-2 font-semibold'>Step 6:</span> We equip you with comprehensive medication training via video training or in person office injection training support to ensure a smooth and confident start. (inquire about our optional nurse at home teaching) for medication injection for your FIRST TIME.</p>
              <p className='mb-5'><span className='inline-block mr-2 font-semibold'>Step 7:</span> Together: Stay on track with weekly phone follow-ups where we monitor your progress, address any concerns, and receive ongoing nutritional and motivational coaching.</p>
              <p><span className='inline-block mr-2 font-semibold'>Step 8:</span> Reach Your Peak: As you achieve milestones, your provider and weight loss specialist will help you gain and maintain desired effect. Whether it’s medication dosage adjustment or to celebrate your triumphs. We will always be available.</p>
            </div>
          </div>
        </div>

        <div className='w-full'>
          <div className='flex justify-between items-start gap-6'>
            <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce={true}><p className='text-[28px] sm:text-[42px] font-bold max-w-[1200px]'>Do you accept insurance?</p></AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInRight" animateOnce={true}><button onClick={(e:MouseEvent<HTMLButtonElement>) => toggleOpen(e, 'six')}><AiFillPlusCircle className={`hover:text-gold h-[60px] w-[60px] text-maize transition ease-in-out duration-[500ms] ${open.six ? 'rotate' : ''}`}/></button></AnimationOnScroll>
          </div>
          <div className={`border border-maize rounded-md p-8 mt-10 text-[18px] closed ${open.six ? 'faq-open' : ''}`}>
            <p className='font-semibold mb-5 text-[28px] sm:text-[32px]'>Answer:</p>
            <p>We currently operate on a private-pay basis. You can Use your pre-tax HSA (health Savings account) for payment. While we don't directly accept payments from insurance providers, you can get an itemized bill from us, which can be submitted to your insurance for reimbursement or towards your annual deductible obligations depending on your insurance plan coverage. please check with your insurance provider for further details on thier policies.</p>
          </div>
        </div> */}


      </div>
    </div>
    )
}