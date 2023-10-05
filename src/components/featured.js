import React, { useState } from 'react'
import useFetchBooks from '../customhooks/useFetchBooks';
import BookCard from './BookCard';
import Loader from './Loader';

function Featured() {
    const { data, loading } = useFetchBooks("https://example-data.draftbit.com/books?_page=1&_limit=20")
    return (
        <>
            <section class="antialiased bg-gray-100 text-gray-600 px-4 py-4">
                {loading ? <Loader /> :
                    <div className='container mx-auto flex justify-center items-center flex-col'>
                        <div className='max-w-5xl container mt-3'>
                            <img src={`https://images.unsplash.com/photo-1618365908648-e71bd5716cba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80`} alt="bookstore" srcset="" className='object-fill w-full h-[350px]' />
                        </div>
                        <div class="container mx-auto flex flex-col justify-center items-center">
                            <h1 className='text-2xl font-bold my-4'>Featured Books</h1>
                            <div class="flex container max-w-5xl mx-auto justify-between flex-wrap">
                                {data?.map((book, index) => <BookCard book={book} />)}
                            </div>
                        </div>
                    </div>}
            </section>
        </>
    )
}
export default Featured;
