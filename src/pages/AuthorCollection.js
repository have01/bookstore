import { useParams } from 'react-router'
import useFetchBooks from '../customhooks/useFetchBooks';
import BookCard from '../components/BookCard';
import Loader from '../components/Loader';

function AuthorCollection() {
    const { data, loading } = useFetchBooks("https://example-data.draftbit.com/books");
    const { name: authorName } = useParams();
    const filteredBooks = data?.filter((book) => book.authors === authorName);

    if (loading) {
        return <Loader />;
    }
    return (
        <>
            <div className="container flex justify-center my-2 h-5"><h1 className='text-lg font-bold'>Collection of {authorName}</h1></div>
            <div class="flex container h-screen max-w-5xl mx-auto  flex-wrap">
                {filteredBooks?.map((book, index) => <BookCard book={book} />)}
            </div>
        </>
    )
}

export default AuthorCollection
