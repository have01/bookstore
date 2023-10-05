import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from "../assests/logo.png"
import { useSelector } from 'react-redux'
import { ShoppingCart } from '@mui/icons-material'

function Navbar() {

    const Links = [{ link: "Home", path: "/" },
    { link: "Books", path: "/books" },
    { link: "Authors", path: "/authors" },
    { link: "Contact", path: "/contact" }]
    const items = useSelector((state) => state.cart)

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
                        <button type="button" class="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                            <span class="sr-only">Open user menu</span>
                            <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="user photo" />
                        </button>
                        <div as="div" className="relative inline-block text-left">
                            <Link to="/cart">
                                <div className="relative">
                                    <ShoppingCart className="w-6 h-6  text-black" />
                                    {true > 0 && (
                                        <div className="absolute bg-purple-600 text-xs w-4 h-4 flex justify-center items-center animate-bounce -top-2 -right-2 rounded-full top- text-white">
                                            {items?.length}
                                        </div>
                                    )}
                                </div>
                            </Link>
                        </div>
                        <div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
                            <div class="px-4 py-3">
                                <span class="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
                                <span class="block text-sm  text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
                            </div>
                            <ul class="py-2" aria-labelledby="user-menu-button">
                                <li>
                                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
                                </li>
                                <li>
                                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
                                </li>
                                <li>
                                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
                                </li>
                                <li>
                                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                                </li>
                            </ul>
                        </div>
                        <button data-collapse-toggle="navbar-user" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
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
                                    </NavLink></li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </nav>


        </>
    )
}

export default Navbar
