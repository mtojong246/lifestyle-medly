'use client';

import { useEffect, useState } from "react";
import { client } from "@/app/api/contentful";
import VideoModal from "./VideoModal";
import { IoIosPlay } from "react-icons/io";
import { MdOutlinePlayCircleOutline } from "react-icons/md";



export default function Gallery({ search, selection }: { search: string, selection: string }) {
    const [ videos, setVideos ] = useState<any[]>([]);
    const [ filteredVideos, setFilteredVideos ] = useState<any[]>(videos);
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
      }, []);

      useEffect(() => {
        if (search.length && selection === 'videos') {
            const newVideos = videos.filter(video => video.name.toLowerCase().includes(search));
            setFilteredVideos(newVideos)
        } else {
            setFilteredVideos(videos)
        }
    }, [search, selection, videos]);




    return (
        <div className='mt-5 w-full px-10'>
            <div className='max-w-[1200px] mx-auto flex justify-between items-center flex-wrap gap-10'>
                {filteredVideos && filteredVideos.map(vid => (
                    <div onClick={(e:any) => toggleSelected(e, vid.video.fields.file.url)} className='w-full md:w-1/2 relative'>
                        <div className='z-20 absolute top-0 bottom-0 right-0 left-0 bg-black/[.54] hover:bg-black/[.7] hover:cursor-pointer p-4 flex justify-between items-end' >
                            <IoIosPlay className='text-white h-16 w-16 top-[50%] left-[50%] absolute transform -translate-x-1/2 -translate-y-1/2' />
                            <p className="text-white">{vid.name}</p>
                            <p className="text-white">{vid.time}</p>
                        </div>
                        <video>
                            <source src={vid.video.fields.file.url} type="video/mp4"/>
                        </video>
                    </div>
                ))}
                    
            </div>
            {isOpen && <VideoModal selected={selected} toggleSelected={toggleSelected}/>}
        </div>
    )
}