import React from 'react';
import { FaFileAlt } from 'react-icons/fa';
import { IoMdCloudDownload } from 'react-icons/io';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { motion } from "framer-motion";


const Card = ({ data,reference }) => {
    return (
        <motion.div drag dragConstraints={reference} whileDrag={{ scale: 1.2 }} className="card cursor-pointer flex-shrink-0 relative bg-blue-300 w-60 h-72 rounded-[40px] px-8 py-10 overflow-hidden border-2">
            <FaFileAlt />
            <p className='text-md mt-5 font-semibold leading-tight'>{data.desc}</p>
            <div className="footer absolute bottom-0 left-0 w-full">
                <div className='flex items-center justify-between text-dark mb-3 px-8 py-3'>
                    <h5>{data.fileSize}</h5>
                    <span className="icon w-7 h-7  rounded-full flex items-center justify-center">
                        {data.close ? <IoIosCloseCircleOutline /> : <IoMdCloudDownload size="1.3em" color='black' />}

                    </span>
                </div>
                {
                    data.tag.isOpen && (
                        <div className={`tag w-full py-5 ${data.tag.tagColor==="cyan"?"bg-cyan-950": "bg-orange-950"} flex items-center justify-center`}>
                            <h3 className='text-md text-white'>{data.tag.tagTitle}</h3>
                        </div>
                    )
                } 

            </div>
        </motion.div>
    )
}

export default Card
