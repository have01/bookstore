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
            <div class="flex container max-w-5xl mx-auto  flex-wrap">
                {filteredBooks?.map((book, index) => <BookCard book={book} />)}
            </div>
        </>
    )
}

export default AuthorCollection
