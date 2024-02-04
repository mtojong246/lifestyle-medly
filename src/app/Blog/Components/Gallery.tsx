'use client';

import { useEffect, useState } from "react";
import { client } from "@/app/api/contentful";
import VideoModal from "./VideoModal";
import { IoIosPlay } from "react-icons/io";
import { MdOutlinePlayCircleOutline } from "react-icons/md";

const YOUTUBE_BASE_URL = 'https://www.googleapis.com/youtube/v3'
const YOUTUBE_API = 'AIzaSyCyCehn4B-C-vYFDlVm40tXMzOnvhhV3YQ'
const YOUTUBE_ID = 'UC7sflAG70ohUbJYCsULx1og'

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

    // useEffect(() => {
    //     const fetchApi = async () => {
    //       const entry = await client.getEntries()
    //       if (entry) {
    //         let list:any[] = [];
    //         entry.items.forEach(item => {
    //             if (item.sys.contentType.sys.id === 'videos') {
    //                 list.push(item.fields)
    //             }
    //         })
    //         setVideos(list)
 
    //       }
    //     }
    
    //     fetchApi();
    //   }, []);

      useEffect(() => {
        if (search.length && selection === 'videos') {
            const newVideos = videos.filter(video => video.snippet.title.toLowerCase().includes(search));
            setFilteredVideos(newVideos)
        } else {
            setFilteredVideos(videos)
        }
    }, [search, selection, videos]);

    const fetchChannel = async () => {
        const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${YOUTUBE_ID}&type=video&maxResults=50&key=${YOUTUBE_API}`);
        const data = await response.json();
        setVideos(data.items)
    }

    useEffect(() => {
        fetchChannel();
    }, [])

    console.log(filteredVideos)




    return (
        <div className='mt-5 w-full px-10'>
            <div className='max-w-[1200px] mx-auto flex justify-between items-center flex-wrap gap-10'>
                {filteredVideos && filteredVideos.map(vid => (
                    <div onClick={(e:any) => toggleSelected(e, `https://www.youtube.com/embed/${vid.id.videoId}`)} className='w-full md:w-1/2 relative'>
                        <div className='z-20 absolute top-0 bottom-0 right-0 left-0 bg-black/[.54] hover:bg-black/[.7] hover:cursor-pointer p-6 flex justify-between items-end' >
                            <IoIosPlay className='text-white h-16 w-16 top-[50%] left-[50%] absolute transform -translate-x-1/2 -translate-y-1/2' />
                            <p className="text-white text-lg">{vid.snippet.title}</p>
                            <p className="text-white">{}</p>
                        </div>
                        <img src={vid.snippet.thumbnails.high.url} className="w-full h-full object-cover"/>
                        {/* <iframe title={vid} src={`https://www.youtube.com/embed/${vid.id.videoId}`} className="w-full h-full object-fit"></iframe> */}
                        {/* <video>
                            <source src={vid.video.fields.file.url} type="video/mp4"/>
                        </video> */}
                    </div>
                ))}
                    
            </div>
            {isOpen && <VideoModal selected={selected} toggleSelected={toggleSelected}/>}
        </div>
    )
}