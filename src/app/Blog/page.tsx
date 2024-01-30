'use client';
import { useState, MouseEvent } from "react";

import Gallery from "./Components/Gallery";
import Posts from "./Components/Posts";

export default function Blog() {
    const [ isGallery, setIsGallery ] = useState(false);

    const viewPosts = (e:MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setIsGallery(false);
    }

    const viewGallery = (e:MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setIsGallery(true);
    }

    return (
        <div className='w-full py-[100px] px-10'>
            <div className='max-w-[900px] mx-auto text-charcoal'>
                <p className='text-[52px] font-semibold mb-3'>Patient Hub</p>
                <input className="w-full p-3 border border-charcoal rounded mb-5" placeholder="Search" />
                <div className='border border-charcoal rounded flex justify-start items-center w-fit'>
                    <button onClick={viewPosts} className={`border border-r-charcoal text-sm px-4 py-1 ${!isGallery ? 'bg-charcoal text-white border-t-charcoal border-b-charcoal border-l-charcoal' : 'bg-white text-charcoal border-t-white border-b-white border-l-white'}`}>Posts</button>
                    <button onClick={viewGallery} className={`text-sm px-4 py-1 border  ${isGallery ? 'bg-charcoal text-white border-charcoal' : 'bg-white text-charcoal border-none'}`}>Media</button>
                </div>
                {isGallery ? <Gallery /> : <Posts />}
            </div>
        </div>
    )
}