export default function Medication() {
    return (
    <div className='w-full text-charcoal'>
      <div className='max-w-[1400px] px-10 py-[100px] flex flex-col md:flex-row justify-between items-center flex-wrap mx-auto my-0 gap-10 md:gap-0'>
        <div className='w-full md:w-[50%]'>
          <p className='text-[54px] leading-[5rem] font-bold'>Innovative Health Solutions</p>
          <p className='text-lg mt-8'>Revolutionary GLP-1 medications, such as Ozempic and Wegovy, both forms of human incretin hormone mimics, have been instrumental in transforming the landscape of weight control. These groundbreaking treatments work on the gut, curbing cravings, and promoting a sense of satisfaction. This results in a reduced intake of food and, consequently, successful weight loss. Step into the future of wellness and Join us NOW!</p>
        </div>
        <div className='max-w-[600px] w-full md:w-[50%] md:self-end self-center'>
          <img src='/injection.png' className='object-cover' />
        </div>
      </div>
    </div>
    )
}