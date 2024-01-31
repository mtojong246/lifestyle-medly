'use client';

import { useEffect, useState } from "react";
import { client } from "@/app/api/contentful";
import { useRouter } from "next/navigation";

export default function Posts() {
    const [ posts, setPosts ] = useState<any[]>([]);
    const router = useRouter();

    useEffect(() => {
        const fetchApi = async () => {
            const entry = await client.getEntries()
            if (entry) {
              let list:any[] = [];
              entry.items.forEach(item => {
                  if (item.sys.contentType.sys.id === 'posts') {
                      list.push(item.fields)
                  }
              })
              setPosts(list)
   
            }
          }
      
          fetchApi();
    },[]);

    const slugify = (str: string) => {
        return str
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_-]+/g, '-')
        .replace(/^-+|-+$/g, '');
    }


    return (
        <div className='w-full px-10'>
            <div className='max-w-[900px] mx-auto flex justify-between items-center flex-wrap gap-10'>
                {posts && posts.map(post => (
                    <div onClick={(e:any) => router.push(`/Blog/${slugify(post.name)}`)} className='w-1/2 shadow-lg relative'>
                        <div className="absolute top-0 right-0 bottom-0 left-0 bg-none hover:bg-charcoal/[.2] hover:cursor-pointer transition-all"></div>
                        <img src={post.mainImage.fields.file.url} className='object-fit'/>
                        <div className='p-4'>
                            <p className="text-lg font-semibold mb-2">{post.name}</p>
                            <p>{post.description}</p>
                        </div>
                    </div>
                ))}
                    
            </div>
        </div>
    )
}