import React from 'react'
import useFetchBooks from '../customhooks/useFetchBooks'
import Loader from '../components/Loader'
import Authorlist from '../components/Authorlist'

const Author = () => {
    const { data, loading } = useFetchBooks("https://example-data.draftbit.com/books")

    return (
        <>
            {loading ? <Loader /> : <Authorlist data={data} />}
        </>
    )
}

export default Author