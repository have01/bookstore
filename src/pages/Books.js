import React, { useEffect, useState } from 'react'
import useFetchBooks from '../customhooks/useFetchBooks'
import Loader from '../components/Loader'
import BookCard from '../components/BookCard'
import GenreFilter from '../components/Genrefilter'

function Books() {
    const { data, loading } = useFetchBooks("https://example-data.draftbit.com/books?_page=2&_limit=100")
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [filterItems, setFilterItems] = useState([])
    const [toggle, setToggle] = useState(true)
    const handleFilter = () => {
        const filteredObj = data.filter((item) => {
            const genres = item.genres.split(', ').map((genre) => genre.trim().toLowerCase());
            return selectedGenres.some((filterItem) => genres.includes(filterItem.toLowerCase()));

        });
        setFilterItems(filteredObj)
        setToggle(!toggle)
    }
    return (
        <>
            <GenreFilter handleFilter={handleFilter} filterItems={filterItems} setFilterItems={setFilterItems} selectedGenres={selectedGenres} setSelectedGenres={setSelectedGenres} setToggle={setToggle} toggle={toggle} />
            {loading ? <Loader /> : <div class="container antialiased  bg-gray-100 mx-auto flex flex-col justify-center items-center">
                <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
                    {filterItems.length > 0 && selectedGenres.length > 0 ? filterItems?.map((book) => <BookCard book={book} />) : data?.map((book) => <BookCard book={book} />)}
                </div>
            </div>}

        </>
    )
}

export default Books
