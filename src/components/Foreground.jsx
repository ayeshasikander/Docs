import React from 'react';
import Card from './Card';
import { useRef } from 'react';

const Foreground = () => {

    const ref=useRef(null);

    const data=[
        {
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
            fileSize:"10mb",
            close:true,
            tag:{
                isOpen:true,
                tagTitle:"Download Now",
                tagColor:"cyan",
            }
        },
       
        {
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
            fileSize:"10mb",
            close:false,
            tag:{
                isOpen:true,
                tagTitle:"Updating",
                tagColor:"cyan",
            }
        },
        {
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
            fileSize:"10mb",
            close:true,
            tag:{
                isOpen:true,
                tagTitle:"Read more",
                tagColor:"orange",
            }
        },
        {
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
            fileSize:"12mb",
            close:false,
            tag:{
                isOpen:false,
                tagTitle:"upload more",
                tagColor:"cyan",
            }
        },
        {
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
            fileSize:"10mb",
            close:true,
            tag:{
                isOpen:true,
                tagTitle:"Download Now",
                tagColor:"orange",
            }
        },
        {
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
            fileSize:"12mb",
            close:false,
            tag:{
                isOpen:false,
                tagTitle:"upload more",
                tagColor:"cyan",
            }
        },
    ]

    return (
        <div ref={ref} className="flex gap-5 flex-wrap absolute top-0 left-0  z-[3] p-5 foreground w-full h-full">
            {
                data.map((item,index)=>{
                    return <Card data={item} key={index} reference={ref}/>
                })
            }
            
        </div>
    )
}

export default Foreground
