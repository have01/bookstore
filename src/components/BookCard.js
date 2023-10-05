import React from 'react'
import { useNavigate } from 'react-router'
function BookCard({ book }) {
    const navigate = useNavigate();
    const handleNavigation = (id) => {
        navigate(`/book/${id}`)
    }
    return (
        <> <div
            key={book?.id}
            onClick={() => handleNavigation(book?.id)}
            className="group justify-center shadow-md flex flex-col  object-contain p-2 mt-4 sm:p-4 w-[130px] sm:w-[206px] h-[210px] border-2 sm:h-[280px] bg-white  box rounded-sm cursor-pointer">
            <div className="h-[134px] sm:h-[180px]">
                <img
                    alt=''
                    src={book?.image_url}
                    className="h-full w-full object-fill "
                />
            </div>
            <div>
                <h1 className="w-full mt-3 text-blue-300 line-clamp-2 text-sm font-bold truncate">
                    {book?.title}
                </h1>
                <span className='text-black'>{book?.authors}</span>
            </div>
        </div></>
    )
}

export default BookCard
