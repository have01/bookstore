import React from 'react'
import { useParams } from 'react-router'
import useFetchBooks from '../customhooks/useFetchBooks'
import { Rating } from '@mui/material'
import Loader from '../components/Loader'
import Bookabout from '../components/BookAbout'

function BooksDetail() {
    const { id } = useParams()
    const { data, loading } = useFetchBooks(`https://example-data.draftbit.com/books/${id}`)

    return (
        <>
            {loading ? <Loader /> : <Bookabout data={data} />}

        </>
    )
}

export default BooksDetail
