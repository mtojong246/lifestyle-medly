'use client';

import { ChangeEvent, useEffect, useState } from "react";
import { client } from "@/app/api/contentful";
import { useRouter } from "next/navigation";
import { HiMagnifyingGlass } from "react-icons/hi2";


import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function Posts({ search, selection, handleSelection, handleInput }: { search: string, selection: string, handleSelection: (e:any) => void, handleInput: (e:ChangeEvent<HTMLInputElement>) => void }) {
    const [ posts, setPosts ] = useState<any[]>([]);
    const [ filteredArticles, setFilteredArticles ] = useState<any[]>(posts);

    const router = useRouter();


    useEffect(() => {
        const fetchApi = async () => {
            const entry = await client.getEntries()
            console.log(entry)
            if (entry) {
              let list:any[] = [];
              entry.items.forEach(item => {
                  if (item.sys.contentType.sys.id === 'posts') {
                      list.push({
                        ...item.fields,
                        date: new Date(item.sys.createdAt),
                      })
                  }
              })
              setPosts(list)
   
            }
          }
      
          fetchApi();
    },[]);

    useEffect(() => {
        if (search.length && selection === 'articles') {
            console.log(search.length, selection)
            const newPosts = posts.filter(post => post.name.toLowerCase().includes(search));
            setFilteredArticles(newPosts)
        } else {
            setFilteredArticles(posts)
        }
    }, [search, selection, posts]);


    const slugify = (str: string) => {
        return str
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_-]+/g, '-')
        .replace(/^-+|-+$/g, '');
    }




    return (
        <>
            <div className="w-full px-10 py-5 mt-10">
                <div className='max-w-[1200px] mx-auto flex flex-col sm:flex-row justify-between items-stretch gap-5'>
                    <div>
                        <p className="text-[24px]">Latest {selection === 'articles' ? 'Articles' : 'Videos'}</p>
                        <p className='text-[12px] text-slate-400'>1-5 of 5 items</p>
                    </div>
                    <div className='flex justify-center items-center gap-3'>
                        <div className='w-full sm:max-w-[400px] px-2 w-full flex gap-2 justify-between items-center border border-charcoal rounded '>
                            <HiMagnifyingGlass className='w-6 h-6 text-charcoal' />
                            <input value={search} onChange={handleInput} className="focus:outline-none grow py-2" placeholder="Search collection" />
                        </div>
                        <select onChange={handleSelection} className='focus:outline-none border border-charcoal rounded p-2 h-[42px]'>
                            <option value='articles'>Articles</option>
                            <option value='videos'>Videos</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className='w-full px-10 mt-5'>
                <div className='max-w-[1200px] mx-auto flex flex-col center items-center gap-20 md:gap-10'>
                    {filteredArticles && filteredArticles.map(post => (
                        <div onClick={(e:any) => router.push(`/Blog/${slugify(post.name)}`)} className='w-full hover:cursor-pointer flex flex-col md:flex-row justify-between items-stretch gap-5 md:gap-10'>
                            <div className='max-h-[400px] w-full md:w-[60%]'>
                                <img src={post.mainImage.fields.file.url} className='object-cover w-full h-full'/>
                            </div>
                            <div className='w-full md:w-[40%] flex flex-col justify-between'>
                                <div>
                                    <p className='font-bold text-sm mb-5 md:mb-10'>{post.date.toLocaleString('default', {month: 'long'})} {post.date.getDate()}, {post.date.getFullYear()}</p>
                                    <p className="font-medium text-[32px] mb-5 md:mb-10">{post.name}</p>
                                    <p className='text-md md:mb-0 mb-5'>{post.description}</p>
                                </div>
                                <p className='text-sm font-bold'>By {post.author}</p>
                                
                            </div>
                        </div>
                    ))}
                        
                </div>
            </div>
            <Stack spacing={2} className="mt-20">
                <Pagination count={3} variant="outlined" shape="rounded" size="large"/>
            </Stack>
        </>
    )
}