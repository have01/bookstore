import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (

        <footer class="bg-slate-700 mt-4  text-white shadow   dark:bg-gray-800">
            <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span class="text-sm text-white sm:text-center dark:text-gray-400">© 2023 Developer by @Dheerendra. All Rights Reserved.
                </span>
                <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-white dark:text-gray-400 sm:mt-0">
                    <li>
                        <Link to="books" class="mr-4 hover:underline md:mr-6 ">Book</Link>
                    </li>
                    <li>
                        <Link href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</Link>
                    </li>
                    <li>
                        <Link to="authors" class="mr-4 hover:underline md:mr-6">Authors</Link>
                    </li>
                    <li>
                        <Link to="contact" class="hover:underline">Contact</Link>
                    </li>
                </ul>
            </div>
        </footer>

    )
}

export default Footer