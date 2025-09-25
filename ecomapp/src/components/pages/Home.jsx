import React from 'react'

export default function Home() {
    return (
        <section className='h-screen w-[100%] relative'>
            <video src="/videos/hero.mp4" className='w-[100%] h-screen object-cover' muted autoPlay></video>

            <section className='absolute w-[100%] h-screen top-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.3),rgba(0,0,0,0.3)),linear-gradient(0deg,rgba(14,40,64,0.5),rgba(14,40,64,0.5))]'>
                <header className='max-w-[1240px] mx-auto flex pt-5 gap-5 justify-between items-center'>
                    <figure>
                        <img src="/images/logo.png" alt="" />
                    </figure>
                    <nav className='lg:block hidden'>
                        <ul className='flex gap-[25px]'>
                            <li> <a className=' font-Jost font-[500] text-white uppercase' href="">About</a> </li>
                            <li> <a className=' font-Jost font-[500] text-white uppercase' href="">Products</a> </li>
                            <li> <a className=' font-Jost font-[500] text-white uppercase' href="">Plans</a> </li>
                            <li> <a className=' font-Jost font-[500] text-white uppercase' href="">Location </a> </li>
                            <li> <a className=' font-Jost font-[500] text-white uppercase' href="">Price</a> </li>
                            <li> <a className=' font-Jost font-[500] text-white uppercase' href="">Amenities</a> </li>
                            <li> <a className=' font-Jost font-[500] text-white uppercase' href="">Specification</a> </li>
                            <li> <a className=' font-Jost font-[500] text-white uppercase' href="">Gallery</a> </li>
                            <li> <a className=' font-Jost font-[500] text-white uppercase' href="">Contact us</a> </li>
                        </ul>
                    </nav>
                </header>

                <div className='max-w-[1031px] mx-auto text-center '>
                    <h1 className='lg:pt-[120px] mb-5 pt-[50px] text-white lg:text-[50px] text-[30px] font-Jost font-[500]'>
                        Where Hospitality Meets Home <br />
                        in Mohali’s Tallest Icon
                    </h1>

                    <p className=' lg:text-[23px] text-[20px] font-Jost text-white '>
                        Experience luxury like never before at The Pinnacle Mohali by STJ Group — the tallest residential landmark
                        in IT City, Mohali. Explore 3, 4 & 5 BHK residences that redefine skyline living.

                    </p>
                    <button className='bg-white font-[600] lg:p-[20px_52px]  p-[10px_30px] text-[17px] mt-[80px] text-[#003253]'>Download Brochure</button>

                </div>
            </section>

        </section>
    )
}
