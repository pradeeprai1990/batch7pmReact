import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Home from './pages/Home.jsx'

let rootElement = document.getElementById('root')
createRoot(rootElement).render(
    <>
       <Home/>

    </>
)

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
