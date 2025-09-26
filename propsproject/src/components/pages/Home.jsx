import React from 'react'
import Header from '../common/Header'
import { FaHeart, FaStar } from 'react-icons/fa'
import { productData } from '../../Data/productData' //Array=[]
import Footer from '../common/Footer'
import BtnComp from '../common/BtnComp'

export default function Home() {

    let cname = "WsCubeTech"

    console.log(cname);
    

    return (
        <>
            <Header
                companyName={cname}
                phone={888888888}
                email="pradeep@wscubetech.ocm"
                user={["ram", "ravi", "raj"]}


            />
            <section className='py-10'>
                <div className='max-w-[1320px] mx-auto grid lg:grid-cols-[55%_auto]  grid-cols-1 gap-5 items-center lg:px-0 px-[20px]'>
                    <div>
                        <h1 className='lg:text-[60px] text-[40px]  font-bold lg:leading-[70px] leading-[50px]'>The experience makes all the difference</h1>
                        <p className='text-[25px] mt-4'>From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.</p>

                        <div className='flex gap-5 mt-[40px]'>
                            
                           <BtnComp bgColor="red" text={"Get started"}/>
                           <BtnComp bgColor="red" text={"Offer"}/>

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
                                <ProductItem key={index}  product={obj}  />
                            )
                        })

                    }








                </div>

            </section>

            <section className='py-10'>
                <h2 className='text-center lg:text-[50px] text-[30px] font-bold mb-5'>Get difference Product</h2>
                <div className='max-w-[1320px] mx-auto grid grid-cols-4 gap-5'>

                    {
                        productData.map((obj, index) => {
                            return (
                                <div  key={index} className='border-1 shadow-lg relative'>
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





            <Footer name="pradeep">

                 <h1>Welcome to ws</h1> 

            </Footer>
        </>
    )
}





function ProductItem({product}) {
    let {name,price,image}=product
    return (
        <div className='border-1 shadow-lg relative'>
            <FaHeart className='absolute text-red-500  text-3xl right-[10px] top-0' />


            <img className='w-[100%] h-[250px] object-cover' src={image} alt="" />
            <div className='p-3'>
                <h3 className='font-bold'>
                    {name}
                </h3>
                <h4>Rs {price}</h4>
                <p className='text-[12px]'>45345</p>

                <div className='flex justify-between mt-4'>
                    <div className='flex'>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                    <BtnComp  text={"Add to Cart"}/>
                </div>

            </div>
        </div>

    )
}