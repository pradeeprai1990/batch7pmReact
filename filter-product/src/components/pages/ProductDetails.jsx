import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';

export default function ProductDetails() {

    let [product, setProduct] = useState(null)
    let { pid } = useParams() //Dynamic value usko get karne kam // Object -{ pid:165 }
    const [mainImage, setMainImage] = useState('');
    const [galleryImages, setGalleryImages] = useState([]);


    console.log(pid);


    useEffect(() => {
        axios.get(`https://wscubetech.co/ecommerce-api/productdetails.php`, {
            params: {
                id: pid
            }
        })
            .then((res) => res.data)
            .then((finalRes) => {
                setProduct(finalRes.product);
                setMainImage(finalRes.product.image)
                setGalleryImages(finalRes.product.multiple_images)
            })

    }, [pid])

    

    // const galleryImages = [
    //     "https://cdn.dummyjson.com/products/images/vehicle/Pacifica%20Touring/thumbnail.png",
    //     "https://cdn.dummyjson.com/products/images/vehicle/Pacifica%20Touring/1.png",
    //     "https://cdn.dummyjson.com/products/images/vehicle/Pacifica%20Touring/2.png",
    //     "https://cdn.dummyjson.com/products/images/vehicle/Pacifica%20Touring/3.png"
    // ];

    

    return (
        <div className="max-w-[1320px] mx-auto px-4 py-8">
            {
                product

                &&

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Product Image Gallery */}
                    <div className="space-y-4">
                        <div className="rounded-lg overflow-hidden">
                            <img
                                src={mainImage}
                                alt="Product"
                                className='w-[100%] h-[400px] object-cover'
                            />
                        </div>
                        <div className="flex gap-2 overflow-x-auto">
                            {
                                galleryImages.map((image, index) => (
                                    <img onClick={() => setMainImage(image)} className='w-25' src={image} />
                                ))
                            }
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className="space-y-4">
                        <h1 className="text-3xl font-bold">
                            {product.name}
                        </h1>
                        <p className="text-2xl font-semibold text-blue-600">
                            Rs {product.price}
                        </p>
                        <div className="flex items-center space-x-2">
                            <span className="text-yellow-400">★★★★☆</span>
                            <span className="text-gray-600">(4.0/5)</span>
                        </div>

                        <p className="text-gray-600">
                           {product.description}
                        </p>

                        <div className="space-y-2">
                            <h3 className="font-semibold">Key Features:</h3>
                            <ul className="list-disc list-inside text-gray-600">
                                <li>High-quality materials</li>
                                <li>Durable construction</li>
                                <li>Premium finish</li>
                                <li>1-year warranty</li>
                            </ul>
                        </div>

                        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                            Add to Cart
                        </button>
                    </div>
                </div>

            }

        </div>
    )
}
