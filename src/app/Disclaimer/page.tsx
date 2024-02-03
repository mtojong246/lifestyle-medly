import Link from "next/link";

export default function Disclaimer() {
    return (
        <div className='w-full pt-10 pb-20 px-10'>
            <div className='max-w-[600px] mx-auto text-charcoal'>
                <span className="inline-block mb-10"><Link href='/' className='text-maize'>Home</Link> / Disclaimer</span>
                <p className='text-[28px] font-semibold mb-5'>Disclaimer</p>
                <p>Our weight loss plans do not constitute a contract for insurance; they are simply alternative fee arrangements for the limited items or services described in this Fee Schedule. We do not insure your health or provide any medical, dental or other healthcare benefits; nor do we solicit, sell or negotiate insurance.  Our weight loss plans are available only to those patients whose insurance does not cover prescription weight loss medications; Lifestyle Medly LLC does not bill any third-party payors on a fee-for-service basis for the weight loss or related medications or the consultations/treatment involving such medications. Please check your policy to ensure that weight loss medications are not covered services under your plan.  Please note that the number of visits with Lifestyle Medly’s providers included in our weight loss plans are not unlimited, and are not for comprehensive medical services, but only for the services described herein.</p>
            </div>
        </div>
    )
}