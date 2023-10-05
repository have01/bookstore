
import { useDispatch, useSelector } from "react-redux"
import { cartSliceAction } from "../redux/cartSlice"

const Index = () => {
    const dispatch = useDispatch()
    const items = useSelector((state) => state?.cart)
    const totalPrice = items?.reduce((acc, item) => {
        return acc + item?.num_pages * item?.quantity
    }, 0)
    const handleRemoveFromCart = (id) => {
        dispatch(cartSliceAction.removeFromCart({ id }))
    }
    const handleDecreaseQuantity = (id) => {
        dispatch(cartSliceAction.decreaseQuantity({ id }))
    }
    const handleIncreaseQuantity = (id) => {
        dispatch(cartSliceAction.increaseQuantity({ id }))
    }

    return (
        <>
            <div class="min-h-screen mt-2">
                <h1 class="mb-10 text-center text-2xl font-bold">Cart Items</h1>
                <div class="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
                    <div class="rounded-lg md:w-2/3">
                        {items?.map((value, index) => (
                            <div
                                key={index}
                                class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
                            >

                                <div
                                    class="flex items-center justify-end border-gray-100 sm:hidden"
                                    onClick={() => handleRemoveFromCart(value?.id)}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        class="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </div>

                                <div className="sm:w-[150px]">
                                    <img
                                        src={value?.image_url}
                                        alt="product-image"
                                        className="w-full h-40 object-contain rounded-lg sm:w-40"
                                    />
                                </div>
                                <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                                    <div class="mt-5 sm:mt-0">
                                        <h4 class="text-sm font-bold text-gray-900">
                                            {value?.title}
                                        </h4>

                                    </div>
                                    <div class="mt-4 flex justify-between im sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                                        <div
                                            class="sm:flex items-center justify-end border-gray-100 hidden "
                                            onClick={() => handleRemoveFromCart(value?.id)}
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke-width="1.5"
                                                stroke="currentColor"
                                                class="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    d="M6 18L18 6M6 6l12 12"
                                                />
                                            </svg>
                                        </div>
                                        <div class="flex items-center border-gray-100">
                                            <span
                                                onClick={() => handleDecreaseQuantity(value?.id)}
                                                class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
                                            >
                                                -
                                            </span>
                                            <input
                                                class="h-8 w-8 border bg-white text-center text-xs outline-none"
                                                type="number"
                                                value={value?.quantity}
                                                min="1"
                                            />
                                            <span
                                                onClick={() => handleIncreaseQuantity(value?.id)}
                                                class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                                            >
                                                +
                                            </span>
                                        </div>
                                        <div class="flex items-center space-x-4">
                                            <p class="text-sm font-bold">{value?.quantity * value?.num_pages} INR</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* sub total */}

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
                </div>
            </div>
        </>
    )
}

export default Index
