'use client';

import { useEffect, useState } from "react";
import { client } from "@/app/api/contentful";
import VideoModal from "./VideoModal";

export default function Gallery() {
    const [ videos, setVideos ] = useState<any[]>([]);
    const [ selected, setSelected ] = useState('');
    const [ isOpen, setIsOpen ] = useState(false);

    const toggleSelected = (e:any, url?: string) => {
        e.preventDefault();
        setIsOpen(!isOpen);
        if (url) setSelected(url)
    }

    useEffect(() => {
        const fetchApi = async () => {
          const entry = await client.getEntries()
          if (entry) {
            let list:any[] = [];
            entry.items.forEach(item => {
                if (item.sys.contentType.sys.id === 'videos') {
                    list.push(item.fields)
                }
            })
            setVideos(list)
 
          }
        }
    
        fetchApi();
      }, [])


    return (
        <>
            <div className='mt-20 flex justify-between items-center flex-wrap gap-10'>
                {videos && videos.map(vid => (
                    <div onClick={(e:any) => toggleSelected(e, vid.video.fields.file.url)} className='w-1/2 relative'>
                        <div className='z-10 absolute top-0 bottom-0 right-0 left-0 bg-black/[.54] hover:bg-black/[.7] hover:cursor-pointer p-4 flex justify-start items-end' >
                            <p className="text-white">{vid.name}</p>
                        </div>
                        <video>
                            <source src={vid.video.fields.file.url} type="video/mp4"/>
                        </video>
                    </div>
                ))}
                    
            </div>
            {isOpen && <VideoModal selected={selected} toggleSelected={toggleSelected}/>}
        </>
    )
}