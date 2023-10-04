import React from 'react'
import useFetchBooks from '../customhooks/useFetchBooks'
import Loader from '../components/Loader'
import BookCard from '../components/BookCard'

function Books() {
    const { data, loading } = useFetchBooks("https://example-data.draftbit.com/books?_page=2&_limit=100")
    return (
        <>
            {loading ? <Loader /> : <div class="container mx-auto flex flex-col justify-center items-center">
                <div class="flex container max-w-5xl mx-auto justify-between flex-wrap">
                    {data?.map((book, index) => <BookCard book={book} />)}
                </div>
            </div>}


        </>
    )
}

export default Books
