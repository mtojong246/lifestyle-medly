'use client';

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { client } from "@/app/api/contentful";

export default function Post() {
    const params = useParams();
    const [ post, setPost ] = useState<any | null>(null);

    const slugify = (str: string) => {
        return str
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_-]+/g, '-')
        .replace(/^-+|-+$/g, '');
    }

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
              const foundPost = list.find(li => slugify(li.name) === params.slug);
              if (foundPost) {
                setPost(foundPost)
              }
   
            }
          }
      
          fetchApi();
    },[]);

    console.log(post)

    return (
        <div className='w-full py-[40px] px-10'>
            <div className='max-w-[900px] mx-auto text-center text-charcoal'>
            {post && (
                <>
                    <p className='text-[28px] font-semibold mb-1'>{post.name}</p>
                    <p className='text-sm text-[#9A9A9A] mb-10'>Publisher | Date</p>
                    <div className='w-full h-[500px] overflow-hidden mb-5'>
                        <img src={post.mainImage.fields.file.url} className="object-cover w-full h-full object-center" /> 
                    </div>
                    <div className='text-left'>
                    <p className='font-medium mb-5'>{post.description}</p>
                    {post.post.content.map((cont:any) => (
                        <p className='mb-2'>{cont.content[0].value}</p>
                    ))}
                    </div>
                </>
            )}
            </div>
        </div>
    )
}