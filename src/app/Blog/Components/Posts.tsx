'use client';

import { useEffect, useState } from "react";
import { client } from "@/app/api/contentful";

export default function Posts() {
    const [ posts, setPosts ] = useState<any[]>([]);

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


    return (
        <div className='mt-20 flex justify-between items-center flex-wrap gap-10'>
            {posts && posts.map(post => (
                <div className='w-1/2 shadow-lg relative'>
                    <div className="absolute top-0 right-0 bottom-0 left-0 bg-none hover:bg-charcoal/[.2] hover:cursor-pointer transition-all"></div>
                    <img src={post.mainImage.fields.file.url} className='object-fit'/>
                    <div className='p-4'>
                        <p className="text-lg font-semibold mb-2">{post.name}</p>
                        <p>{post.description}</p>
                    </div>
                </div>
            ))}
                
        </div>
    )
}