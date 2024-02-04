export default function VideoModal({ toggleSelected, selected}: { toggleSelected: (e:any, url?:string) => void, selected: string }) {
    return (
        <div className='fixed top-0 bottom-0 right-0 left-0 z-20  flex justify-center items-center p-4'>
            <div onClick={(e:any) => toggleSelected(e)} className='bg-black/[.5] absolute top-0 bottom-0 right-0 left-0'></div>
            <iframe src={selected} className="max-w-[900px] w-full max-h-[500px] h-full relative z-30"></iframe>
            {/* <video className="max-w-[900px] w-full relative z-30" controls autoPlay>
                <source src={selected} type="video/mp4" />
            </video> */}
        </div>
    )
}