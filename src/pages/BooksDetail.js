import React from 'react'
import { useParams } from 'react-router'
import useFetchBooks from '../customhooks/useFetchBooks'
import Loader from '../components/Loader'
import BookInfomation from '../components/BookInfomation'
function BooksDetail() {
    const { id } = useParams()
    const { data, loading } = useFetchBooks(`https://example-data.draftbit.com/books/${id}`)

    return (
        <>
            {loading ? <Loader /> : <BookInfomation data={data} />}

        </>
    )
}

export default BooksDetail
