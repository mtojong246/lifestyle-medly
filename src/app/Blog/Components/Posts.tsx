'use client';

import { useEffect, useState } from "react";
import { client } from "@/app/api/contentful";
import { useRouter } from "next/navigation";

export default function Posts({ search, selection }: { search: string, selection: string }) {
    const [ posts, setPosts ] = useState<any[]>([]);
    const [ filteredArticles, setFilteredArticles ] = useState<any[]>(posts);

    const router = useRouter();


    useEffect(() => {
        const fetchApi = async () => {
            const entry = await client.getEntries()
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
    )
}