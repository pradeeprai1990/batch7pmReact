import React from 'react'
import Header from '../common/Header'
import { FaHeart, FaStar } from 'react-icons/fa'
import { productData } from '../../Data/productData'

export default function Home() {
    return (
        <>
            <Header />
            <section className='py-10'>
                <div className='max-w-[1320px] mx-auto grid lg:grid-cols-[55%_auto]  grid-cols-1 gap-5 items-center lg:px-0 px-[20px]'>
                    <div>
                        <h1 className='lg:text-[60px] text-[40px]  font-bold lg:leading-[70px] leading-[50px]'>The experience makes all the difference</h1>
                        <p className='text-[25px] mt-4'>From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.</p>

                        <div className='flex gap-5 mt-[40px]'>
                            <button className='bg-[#ef4444] p-[10px_25px] text-[20px] text-white'>Get started</button>
                            <button className='bg-[#ef4444] p-[10px_25px] text-[20px] text-white'>Offer</button>

                        </div>

                    </div>
                    <div>
                        <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="" />
                    </div>
                </div>
            </section>

            <section className='py-10'>
                <h2 className='text-center lg:text-[50px] text-[30px] font-bold mb-5'>Get difference Product</h2>
                <div className='max-w-[1320px] mx-auto grid grid-cols-4 gap-5'>

                    {
                        productData.map((obj, index) => {
                            return (
                                <div className='border-1 shadow-lg relative'>
                                    <FaHeart className='absolute text-red-500  text-3xl right-[10px] top-0' />


                                    <img className='w-[100%] h-[250px] object-cover' src={obj.image} alt="" />
                                    <div className='p-3'>
                                        <h3 className='font-bold'>
                                            {obj.name}
                                        </h3>
                                        <h4>Rs  {obj.price}</h4>
                                        <p className='text-[12px]'>{obj.category}</p>

                                        <div className='flex justify-between mt-4'>
                                            <div className='flex'>
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                            </div>
                                            <button>Add To Cart</button>
                                        </div>

                                    </div>
                                </div>
                            )
                        })

                    }


                </div>

            </section>
        </>
    )
}
