import { useNavigate } from 'react-router';

const Authorlist = ({ data }) => {
    const navigate = useNavigate();
    const uniqueAuthors = new Set();
    data.forEach(book => {
        uniqueAuthors.add(book.authors);
    });
    const uniqueAuthorsArray = Array.from(uniqueAuthors);
    const handleAuthorNaviagtion = (name) => {
        navigate(`/book/by/${name}`)
    }

    return (
        <>
            <section class="antialiased bg-gray-100 text-gray-600 px-4 py-4">
                <div class="flex flex-col justify-center h-full">
                    <div class="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
                        <header class="px-5 py-4 border-b border-gray-100">
                            <h2 class="font-semibold text-gray-800">Authors</h2>
                        </header>
                        <div class="p-3">
                            <div class="overflow-x-auto">
                                <table class="table-auto w-full">
                                    <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                                        <tr>
                                            <th class="p-2 whitespace-nowrap">
                                                <div class="font-semibold text-left">Name</div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody class="text-sm divide-y divide-gray-100">
                                        {uniqueAuthorsArray?.map((name, index) => <tr>
                                            <td class="p-2 whitespace-nowrap">
                                                <div class="flex items-center">
                                                    <div class="font-medium text-gray-800 cursor-pointer" onClick={() => handleAuthorNaviagtion(name)}>{name}</div>
                                                </div>
                                            </td>
                                        </tr>)}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Authorlist