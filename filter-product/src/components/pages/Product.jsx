import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loading from '../common/Loading'
import ResponsivePagination from 'react-responsive-pagination';
import { Link } from 'react-router';
export default function Product() {

    let [loader, setLoader] = useState(false)

    let [sorting, setSorting] = useState(null)
    let [rating, setRating] = useState(null)
    let [categoryFilter, setCategoryFilter] = useState([])
    let [brandFilter, setBrandFilter] = useState([])
    let [priceFilter, setPriceFilter] = useState([null, null])
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null); //14





    let [category, setCategory] = useState([])
    let [brand, setBrand] = useState([])
    let [product, setProduct] = useState([])
    let getCategories = async () => {
        let apiRes = await fetch('https://wscubetech.co/ecommerce-api/categories.php')
        let finalRes = await apiRes.json()
        setCategory(finalRes.data);

    }

    let getBrands = async () => {
        let apiRes = await fetch('https://wscubetech.co/ecommerce-api/brands.php')
        let finalRes = await apiRes.json()
        setBrand(finalRes.data);

    }

    //["ram","ravi","raj"] -> String  ram,ravi,raj



    let getProducts = () => {

        setLoader(true)

        axios.get(`https://wscubetech.co/ecommerce-api/products.php`, {
            params: {
                page: currentPage,
                limit: 12,
                categories: categoryFilter.join(","),// ["ram","ravi"] //ram,ravi
                brands: brandFilter.join(","),
                price_from: priceFilter[0],
                price_to: priceFilter[1],
                discount_from: '',
                discount_to: '',
                rating,
                sorting
            }
        })
            .then((res) => res.data)

            .then((finalRes) => {

                window.scrollTo({
                    top: "0px",
                    behavior: "smooth"
                })

                setProduct(finalRes.data);
                setTotalPages(finalRes.total_pages)
                setLoader(false)

            })
            .catch((error) => {

            })
    }


    let getCategoryCheckData = (e) => {
        if (
            e.target.checked
            &&
            !categoryFilter.includes(e.target.value)
        ) {

            setCategoryFilter(
                [...categoryFilter, e.target.value]
            )

        }
        else {
            setCategoryFilter(
                categoryFilter.filter((value) => value != e.target.value)
            )

        }

    }

    let getBrandCheckData = (e) => {
        if (
            e.target.checked
            &&
            !brandFilter.includes(e.target.value)
        ) {

            setBrandFilter(
                [...brandFilter, e.target.value]
            )

        }
        else {
            setBrandFilter(
                brandFilter.filter((value) => value != e.target.value)
            )

        }

    }

    useEffect(() => {
        getCategories()
        getBrands()

    }, [])

    useEffect(() => {
        getProducts()
    }, [currentPage, sorting, rating, categoryFilter, brandFilter, priceFilter])


    // useEffect(()=>{
    //     window.onscroll=(e)=>{
    //          console.log( window.scrollY);

    //     }
    // },[])
    return (
        <div>
            <div className=" grid md:grid-cols-[20%_auto] grid-cols-1 p-10">

                {/* Aside Filter Section */}
                <aside className=" bg-gray-50 p-4 rounded-lg">
                    sorting  {sorting}
                    <h2 className="text-xl font-bold mb-4">Filters</h2>
                    <div className="space-y-4 border-1 p-3 h-[250px] overflow-y-scroll">
                        <div>
                            <h3 className="font-semibold mb-2">Category</h3>

                            <div className="space-y-2">

                                {
                                    category.map((obj, index) => {
                                        return (
                                            <label key={index} className="flex items-center">
                                                <input value={obj.slug}

                                                    onChange={
                                                        getCategoryCheckData
                                                    }

                                                    type="checkbox" className="mr-2" />
                                                {obj.name}
                                            </label>
                                        )
                                    })}



                            </div>
                        </div>

                    </div>
                    <div className="space-y-4 border-1 p-3  h-[250px] overflow-y-scroll">
                        <div>
                            <h3 className="font-semibold mb-2">Brand</h3>

                            <div className="space-y-2">
                                {
                                    brand.map((obj, index) => {
                                        return (
                                            <label key={index} className="flex items-center">
                                                <input value={obj.slug}
                                                    onChange={getBrandCheckData}
                                                    type="checkbox" className="mr-2" />
                                                {obj.name}
                                            </label>
                                        )
                                    })}
                            </div>
                        </div>

                    </div>
                    <div className="space-y-4 border-1 p-3 ">
                        <div>
                            <h3 className="font-semibold mb-2">Price</h3>

                            <div className="space-y-2">

                                <label className="flex items-center">
                                    <input onClick={() => setPriceFilter([10, 250])} name='price' type="radio" className="mr-2" />
                                    Rs. 10 to Rs. 250
                                </label>

                                <label className="flex items-center">
                                    <input onClick={() => setPriceFilter([250, 500])} name='price' type="radio" className="mr-2" />
                                    Rs. 250 to Rs. 500
                                </label>
                                <label className="flex items-center">
                                    <input onClick={() => setPriceFilter([500, 1000])} name='price' type="radio" className="mr-2" />
                                    Rs. 500 to Rs. 1000
                                </label>
                                <label className="flex items-center">
                                    <input onClick={() => setPriceFilter([1000, 100000])} name='price' type="radio" className="mr-2" />
                                    Rs. 1000 to Above
                                </label>

                            </div>
                        </div>

                    </div>
                    <div className="space-y-4 border-1 p-3 ">
                        <div>
                            <h3 className="font-semibold mb-2">DISCOUNT RANGE
                            </h3>

                            <div className="space-y-2">

                                <label className="flex items-center">
                                    <input type="radio" className="mr-2" />
                                    5% and above
                                </label>

                                <label className="flex items-center">
                                    <input type="radio" className="mr-2" />
                                    10% and above
                                </label>
                                <label className="flex items-center">
                                    <input type="radio" className="mr-2" />
                                    15% and above
                                </label>
                                <label className="flex items-center">
                                    <input type="radio" className="mr-2" />
                                    20% and above
                                </label>

                            </div>
                        </div>

                    </div>
                    <div className="space-y-4 border-1 p-3 ">
                        <div>
                            <h3 className="font-semibold mb-2">Rating
                            </h3>

                            <div className="space-y-2">

                                <label onClick={() => setRating(4)} className="flex items-center">
                                    <input type="radio" name='rating' className="mr-2" />
                                    4★ & above
                                </label>

                                <label onClick={() => setRating(3)} className="flex items-center">
                                    <input type="radio" name='rating' className="mr-2" />
                                    3★ & above
                                </label>
                                <label onClick={() => setRating(2)} className="flex items-center">
                                    <input type="radio" name='rating' className="mr-2" />
                                    2★ & above
                                </label>
                                <label onClick={() => setRating(1)} className="flex items-center">
                                    <input type="radio" name='rating' className="mr-2" />
                                    1★ & above
                                </label>

                            </div>
                        </div>

                    </div>
                </aside>

                {/* Products Grid */}
                <div className="">
                    <div className='flex justify-end'>
                        <select onChange={(e) => setSorting(e.target.value)} className='border-1 p-3' name="" id="">
                            <option value="">Sort by : Recommended</option>
                            <option value="1">Name : A to Z</option>
                            <option value="2">Name : Z to A</option>
                            <option value="3">Price : Low to High</option>
                            <option value="4">Discounted Price : Low to High</option>
                            <option value="5">Discounted Price : High to Low</option>
                            <option value="6">Rating : Low to High</option>
                            <option value="7">Rating : High to Low</option>
                        </select>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">


                        {
                            loader ?

                                <Loading />
                                :

                                product.map((obj, index) => <ProductItem key={index} data={obj} />)
                        }

                    </div>

                    <ResponsivePagination
                        current={currentPage} //1
                        total={totalPages} //14
                        onPageChange={setCurrentPage} //Current page 
                    />
                </div>

            </div>
        </div>
    )
}


function ProductItem({ data }) {
    let { name, description, price, image,id } = data
    return (
        <div className="bg-white p-4 rounded-lg shadow border-1">
            <Link to={`/product-details/${id}`}>
                <img src={image} alt="Product" className="w-full h-40 object-cover rounded" />
           </Link>
            <h3 className="mt-2 font-semibold">
                {name}
            </h3>
            <p>
                {description}

            </p>
            <p className="text-gray-600">
                {price}
            </p>
            <Link to={`/product-details/${id}`}>
                 <button className='p-2 bg-red-500'>View Details</button>
            </Link>
        </div>
    )
}