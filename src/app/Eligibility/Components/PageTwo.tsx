export default function PageTwo() {
    return (
        <div className='max-w-[600px] mx-auto'>
            <p className='text-xl mb-10'>Please provide the following information:</p>
            <div className='flex justify-between items-center gap-5 mb-5'>
                <div className='text-left grow'>
                    <label className='block'>First name</label>
                    <input className="rounded block p-4 border-b border-darkvanilla focus:border-maize focus:outline-none w-full bg-[#e8e8e8]/[.54]" />
                </div>
                <div className='text-left grow'>
                    <label className='block'>Last name</label>
                    <input className="rounded block p-4 border-b border-darkvanilla focus:border-maize focus:outline-none w-full bg-[#e8e8e8]/[.54]" />
                </div>
            </div>
            <div className='text-left mb-5'>
                <label className='block'>Date of birth</label>
                <input className="rounded p-4 border-b border-darkvanilla w-full focus:border-maize focus:outline-none bg-[#e8e8e8]/[.54]" type='date' />
            </div>
            <div className='text-left mb-5'>
                <label className='block'>Phone number</label>
                <input className="rounded p-4 border-b border-darkvanilla w-full focus:border-maize focus:outline-none bg-[#e8e8e8]/[.54]"  />
            </div>
            <div className='text-left mb-5'>
                <label className='block'>Email</label>
                <input className="rounded p-4 border-b border-darkvanilla w-full focus:border-maize focus:outline-none bg-[#e8e8e8]/[.54]" />
            </div>
            <div className='mb-5 text-left'>
                <label className='block'>Height</label>
                <div className='flex justify-between items-center gap-5 '>
                    <input className="rounded p-4 border-b border-darkvanilla grow focus:border-maize focus:outline-none bg-[#e8e8e8]/[.54]" placeholder="Feet" />
                    <input className="rounded p-4 border-b border-darkvanilla grow focus:border-maize focus:outline-none bg-[#e8e8e8]/[.54]" placeholder="Inches" />
                </div>
            </div>
            <div className='flex justify-between items-center gap-5 mb-5'>
                <div className='text-left grow'>
                    <label className='block'>Weight</label>
                    <input className="rounded p-4 border-b border-darkvanilla w-full focus:border-maize focus:outline-none bg-[#e8e8e8]/[.54]" placeholder="lbs" />
                </div>
                <div className='text-left grow'>
                    <label className='block'>BMI</label>
                    <input className="rounded p-4 border-b border-darkvanilla w-full focus:border-maize focus:outline-none bg-[#e8e8e8]/[.54]" placeholder="lbs" />
                </div>
            </div>
        </div>
    )
}