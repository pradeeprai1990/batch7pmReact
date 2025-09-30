import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Home from './components/pages/Home.jsx'
import About from './components/pages/About.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Login from './components/pages/Login.jsx'
import Register from './components/pages/Register.jsx'
import Error404 from './components/pages/Error404.jsx'

createRoot(document.getElementById('root')).render(
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about-us' element={<About />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />

                <Route path='*' element={<Error404 />} />
            </Routes>
        </BrowserRouter>
    </>


)
