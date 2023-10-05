import React, { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import Logo from "../assests/logo.png"
import { useDispatch, useSelector } from 'react-redux'
import { ShoppingCart } from '@mui/icons-material'
import { logout } from '../redux/authSlice';
function Navbar() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const isLoggedIn = useSelector((state) => state?.auth?.isLoggedIn)
    const [toggle, setToggle] = useState(false)
    const [isOpen, setIsOpen] = useState(false);
    const Links = [{ link: "Home", path: "/" },
    { link: "Books", path: "/books" },
    { link: "Authors", path: "/authors" },
    { link: "Contact", path: "/contact" }]
    const items = useSelector((state) => state.cart)
    const handleToggle = () => {
        setToggle(!toggle)
    }
    const handleLogout = () => {
        dispatch(logout())
    };
    return (
        <>
            <nav class="bg-white border-gray-200 dark:bg-gray-900 shadow-lg">
                <div class="w-full flex  mx-auto  bg-slate-700  justify-center items-center">
                    <h1 className='text-lg text-white'>Welcome to BookStore</h1>
                </div>
                <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
                    <Link to="/" class="flex items-center">
                        <img src={Logo} class="h-10 mr-3" alt="bookstore Logo" />
                        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">BookStore</span>
                    </Link>
                    <div class="flex items-center md:order-2">
                        <div as="div" className="relative inline-block text-left">
                            {isLoggedIn ? (
                                <button onClick={handleLogout}>Logout</button>
                            ) : (
                                <NavLink to="/login">Login</NavLink>
                            )}
                        </div>
                        <div as="div" className="relative inline-block text-left">
                            <Link to="/cart">
                                <div className="relative">
                                    <ShoppingCart className="w-6 h-6 mx-2 text-black" />
                                    {true > 0 && (
                                        <div className="absolute bg-purple-600 text-xs w-4 h-4 flex justify-center items-center animate-bounce -top-2 -right-2 rounded-full top- text-white">
                                            {items?.length}
                                        </div>
                                    )}
                                </div>
                            </Link>
                        </div>

                        <button data-collapse-toggle="navbar-user" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false" onClick={() => setIsOpen(!isOpen)}>
                            <span class="sr-only">Open main menu</span>
                            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
                        <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            {Links?.map((val, index) => {
                                return (
                                    <li><NavLink
                                        to={val.path}
                                        className={({ isActive }) =>
                                            isActive ? "text-blue-700 font-bold" : ""
                                        }
                                    >
                                        {val?.link}
                                    </NavLink>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </nav >
            <div className={`w-full  flex sm:hidden flex-grow  lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"}`} >
                <div className="text-sm lg:flex-grow">
                    {Links?.map((val, index) => {
                        return (
                            <NavLink
                                to={val.path}
                                className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                {val?.link}
                            </NavLink>

                        )
                    })}

                </div>
                <div>

                </div>
            </div>

        </>
    )
}

export default Navbar
