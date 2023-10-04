import React from 'react'
import useFetchBooks from '../customhooks/useFetchBooks';
import BookCard from './BookCard';

function Featured() {
    const { data } = useFetchBooks("https://example-data.draftbit.com/books?_page=1&_limit=20")
    console.log(data)
    return (
        <>
            <div class="container mx-auto flex flex-col justify-center items-center">
                <h1 className='text-2xl font-bold'>Featured Books</h1>
                <div class="flex container max-w-5xl mx-auto justify-between flex-wrap">
                    {data?.map((val, index) =>
                        <div
                            key={index}
                            className="group justify-center shadow-md flex flex-col  object-contain p-2 mt-4 sm:p-4 w-[130px] sm:w-[206px] h-[210px] border-2 sm:h-[250px] bg-white  ml-5 box rounded-sm cursor-pointer"
                        >
                            <div className="h-[134px] sm:h-[180px]">
                                <img
                                    alt=''
                                    src={val?.image_url}
                                    className="h-full w-full object-fill "
                                />
                            </div>
                            <div>
                                <h1 className="w-full mt-3 text-blue-300 line-clamp-2 text-sm font-bold ">
                                    {val?.title} By {val}
                                </h1>
                            </div>
                        </div>
                    )}
                </div>
            </div>

        </>
    )
}
export default Featured;
