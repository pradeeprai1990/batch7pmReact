import React, { createContext, useEffect, useState } from 'react'


export let cartContext = createContext()

export default function MainContext({ children }) {

    let [cart, setCart] = useState(
        localStorage.getItem("CART") ?
            JSON.parse(localStorage.getItem("CART"))
            :
            []
    )
    let [wishList, setWishList] = useState([])

    let obj = {
        cart,
        setCart,
        wishList,
        setWishList
    }

    useEffect(() => {
        localStorage.setItem("CART", JSON.stringify(cart))
    }, [cart]) //Cart ADD | DELETE | UPDATE
    return (
        <cartContext.Provider value={obj}>
            {children}
        </cartContext.Provider>
    )
}
