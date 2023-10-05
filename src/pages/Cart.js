import React from 'react'
import CartProducts from "../components/CartProducts"
import { useSelector } from 'react-redux'
const Cart = () => {
    const items = useSelector((state) => state?.cart)
    return (
        <>
            {items.length > 0 ? <CartProducts /> : <div className='container h-screen w-full flex justify-center mt-4'><h1 className=' text-xl sm:text-4xl'>No products in the cart</h1></div>}
        </>
    )
}

export default Cart