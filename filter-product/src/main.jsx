import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Home from './components/pages/Home.jsx'
import About from './components/pages/About.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Login from './components/pages/Login.jsx'
import Register from './components/pages/Register.jsx'
import Error404 from './components/pages/Error404.jsx'
import Product from './components/pages/Product.jsx'
import Layout from './components/common/Layout.jsx'

createRoot(document.getElementById('root')).render(
    <>
        <BrowserRouter>
            <Routes>

                <Route element={<Layout/>}>

                    <Route path='/' element={<Home />} />
                    <Route path='/about-us' element={<About />} />
                   
                    <Route path='/register' element={<Register />} />
                    <Route path='/product' element={<Product />} />
    
                    <Route path='*' element={<Error404 />} />

                </Route>

                
                 <Route path='/login' element={<Login />} />

            </Routes>
        </BrowserRouter>
    </>


)
