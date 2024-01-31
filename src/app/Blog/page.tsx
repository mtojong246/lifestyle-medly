'use client';
import { useState, MouseEvent } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";

import Gallery from "./Components/Gallery";
import Posts from "./Components/Posts";

export default function Blog() {
    const [ selection, setSelection ] = useState('articles')

    

    const handleSelection = (e:any) => {
        setSelection(e.target.value)
    }

    return (
        <div className='w-full pb-[100px]'>
            <div className='relative w-full px-10 py-20 min-h-[400px] bg-blog bg-cover flex justify-center items-center' style={{backgroundPosition: '50% 60% '}}>
                <div className='absolute top-0 bottom-0 right-0 left-0 bg-black/[.7]'></div>
                <div className='max-w-[900px] mx-auto grow relative z-10 text-left'>
                    <p className='text-[52px] leading-[4rem] font-bold max-w-[600px] mb-3 text-white'>Welcome to our 24/7 Patient Hub</p>
                    <p className='text-white max-w-[600px]'>Discover a wealth of knowledge through insightful articles and engaging video resources, guiding you on your wellness journey.</p>
                    {/* <div className='flex justify-start items-center w-fit mt-10'>
                        <button onClick={viewPosts} className={`rounded-tl rounded-bl border border-r-charcoal px-6 py-3 ${!isGallery ? 'bg-gold text-white border-none' : 'bg-white text-charcoal border-none'}`}>Articles</button>
                        <button onClick={viewGallery} className={`rounded-tr rounded-br px-6 py-3 border  ${isGallery ? 'bg-gold text-white border-none' : 'bg-white text-charcoal border-none'}`}>Media</button>
                    </div> */}
                    {/* <input className="w-full p-3 border border-charcoal rounded mb-5" placeholder="Search" />
                    <div className='border border-charcoal rounded flex justify-start items-center w-fit'>
                        <button onClick={viewPosts} className={`border border-r-charcoal text-sm px-4 py-1 ${!isGallery ? 'bg-charcoal text-white border-t-charcoal border-b-charcoal border-l-charcoal' : 'bg-white text-charcoal border-t-white border-b-white border-l-white'}`}>Posts</button>
                        <button onClick={viewGallery} className={`text-sm px-4 py-1 border  ${isGallery ? 'bg-charcoal text-white border-charcoal' : 'bg-white text-charcoal border-none'}`}>Media</button>
                    </div> */}
                </div>
            </div>
            <div className="w-full px-10 py-5 mt-10">
                <div className='max-w-[900px] mx-auto flex justify-between items-stretch'>
                    <div>
                        <p className="text-[24px]">Latest {selection === 'articles' ? 'Articles' : 'Videos'}</p>
                        <p className='text-[12px] text-slate-400'>1-5 of 5 items</p>
                    </div>
                    <div className='flex justify-center items-center gap-3'>
                        <div className='max-w-[400px] px-2 w-full flex gap-2 justify-between items-center border border-charcoal rounded '>
                            <HiMagnifyingGlass className='w-6 h-6 text-charcoal' />
                            <input className="focus:outline-none grow py-2" placeholder="Search collection" />
                        </div>
                        <select onChange={handleSelection} className='focus:outline-none border border-charcoal rounded p-2 h-[42px]'>
                            <option value='articles'>Articles</option>
                            <option value='videos'>Videos</option>
                        </select>
                    </div>
                </div>
            </div>
            {selection === 'videos' ? <Gallery /> : <Posts />}
            
        </div>
    )
}