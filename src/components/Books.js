import React from 'react'
import useFetchBooks from "../customhooks/useFetchBooks";
const Books = () => {
    const { data } = useFetchBooks("https://jsonplaceholder.typicode.com/posts")
    console.log(data)
    return (
        <>

        </>
    )
}

export default Books


