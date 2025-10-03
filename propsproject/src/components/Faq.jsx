import React, { useState } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'
import { FaqData } from '../Data/FaqData' //Array -> 10 Items --Object->id,question,answer

export default function Faq() {
    let [currentId,setCurrentId]=useState(FaqData[0].id)

    return (
        <section className='bg-amber-100 py-10'>
            <h2 className='text-center text-4xl font-bold'>Faq</h2>

            <div className='max-w-[1320px] mx-auto '>
                {currentId}
                {

                FaqData.map((obj, index) => {
                    return (
                        <div className='border-1 mt-4'>
                            <h3 onClick={()=>setCurrentId( obj.id==currentId ? 0 : obj.id  )} className='bg-orange-600 cursor-pointer text-white text-[20px] p-2 relative'>
                               
                               {obj.question}

                                {
                                    obj.id==currentId ? 
                                     <FaMinus className='absolute right-2 top-2' />
                                    :
                                     <FaPlus className='absolute right-2 top-2' />
                                }

                              
                            </h3>
                            <div className={` p-3 
                                ${obj.id==currentId ? 'block' : 'hidden' }  
                                
                                `}>
                                {obj.answer}
                            </div>
                        </div>
                    )
                })

                
                }


            </div>
        </section>
    )
}
