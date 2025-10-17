import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Home() {
    let [searchTitle, setSearchTitle] = useState('')
    let [movieList, setMovieList] = useState([])

    let getMovies = () => {
        let apiUrl
        if (searchTitle == '') {
            //Get All Data Api
            apiUrl = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1`
        }
        else {
            apiUrl = `https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=${searchTitle}`
            //Search Data API
        }
        axios.get(apiUrl)
            .then((res) => res.data)
            .then((finalRes) => {
                let { results } = finalRes
                setMovieList(results)
                // console.log(finalRes);

            })
    }

    useEffect(() => {
        getMovies()

    }, [searchTitle])
    return (
        <section className='bg-[#193cb8] min-h-screen'>
            <h1 class="text-center font-bold text-4xl text-white py-10">Movie App</h1>
            <form action="" class="max-w-[1000px] mx-auto">
                {searchTitle}
                <input onChange={(e) => setSearchTitle(e.target.value)} value={searchTitle} placeholder="Search Movie" class="w-[100%] h-[50px] border-2 border-[white] text-white p-[20px] rounded-[25px]" type="text" />

            </form>


            <div className='max-w-[1320px]  gap-5 mt-10 mx-auto grid grid-cols-4'>

                {
                    movieList.length>=1 ?
                    movieList.map((obj,index)=>   <MovieCard data={obj} key={index}/> )    
                  
                    :

                    <div>No Data Found....</div>
                }
                
                
            </div>

        </section>
    )
}


function MovieCard({data}) {
    let {original_title,poster_path}=data
    return (
        <div className="bg-white" >
            <img
                alt=""
                src={`https://image.tmdb.org/t/p/w1280${poster_path}`}
            />
            <h3 className="p-3 font-bold text-center">
                {original_title}
            </h3>
        </div>
    )
}