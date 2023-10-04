import React, { useState } from 'react'
import useFetchBooks from '../customhooks/useFetchBooks';
import BookCard from './BookCard';
import Loader from './Loader';

function Featured() {
    const { data, loading } = useFetchBooks("https://example-data.draftbit.com/books?_page=1&_limit=20")
    return (
        <>
            {loading ? <Loader /> : <div class="container mx-auto flex flex-col justify-center items-center">
                <h1 className='text-2xl font-bold my-4'>Featured Books</h1>
                <div class="flex container max-w-5xl mx-auto justify-between flex-wrap">
                    {data?.map((book, index) => <BookCard book={book} />)}
                </div>
            </div>}


        </>
    )
}
export default Featured;
