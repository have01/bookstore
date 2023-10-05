import React from 'react'

const CartTotal = ({ items }) => {
    const totalPrice = items?.reduce((acc, item) => {
        return acc + item?.num_pages * item?.quantity
    }, 0)
    return (
        <div class="mt-6 mb-16 lg:mb-2 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
            <div class="mb-2 flex justify-between">
                <p class="text-gray-700">Subtotal</p>
                <p class="text-gray-700">{totalPrice}</p>
            </div>
            <div class="flex justify-between">
                <p class="text-gray-700">Shipping</p>
                <p class="text-gray-700">140</p>
            </div>
            <hr class="my-4" />
            <div class="flex justify-between mb-4">
                <p class="text-lg font-bold">Total</p>
                <div class="">
                    <p class="mb-1 text-lg font-bold">
                        {totalPrice}
                    </p>
                </div>
            </div>
            {/* <PayButton /> */}
        </div>
    )
}

export default CartTotal