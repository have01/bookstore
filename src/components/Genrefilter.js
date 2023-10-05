import React from 'react';

const GenreFilter = ({ selectedGenres, setSelectedGenres, handleFilter, toggle, setToggle }) => {
    const handleGenreChange = (genre) => {
        if (selectedGenres.includes(genre)) {
            setSelectedGenres(selectedGenres.filter((g) => g !== genre));
        } else {
            setSelectedGenres([...selectedGenres, genre]);
        }
    };
    const genres = ["Fiction", "Classics", "Historical", "Fantasy"]

    return (
        <>
            <div className="flex w-full justify-center antialiased py-4 bg-gray-100 ">
                <div class="flex items-end container max-w-3xl mx-auto justify-end ">
                    <div class="relative inline-block text-left">
                        <div>
                            <button type="button" class="group inline-flex justify-center text-sm  text-gray-700 font-bold hover:text-gray-900" id="menu-button" aria-expanded="false" aria-haspopup="true" onClick={() => setToggle(!toggle)}>
                                Filter by Genres
                                <svg class="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                                </svg>
                            </button>
                        </div>
                        <div class={` right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none ${toggle ? "hidden" : "absolute"}`} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                            <div class="py-4 px-2 flex flex-col" role="none">
                                {genres.map((genre) => (
                                    <label key={genre}>
                                        <input
                                            type="checkbox"
                                            value={genre}
                                            checked={selectedGenres.includes(genre)}
                                            onChange={() => handleGenreChange(genre)}
                                        />
                                        {genre}
                                    </label>
                                ))}
                                <button className='bg-gray-700 font-bold py-1 text-white w-full' onClick={handleFilter}>Filter</button>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>

    );
};

export default GenreFilter;
