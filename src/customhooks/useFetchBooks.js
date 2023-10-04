import { useEffect, useState } from 'react'

const useFetchBooks = (url) => {
    const [data, setData] = useState(null);

    const fetchAPI = async () => {
        try {
            const response = await fetch(url);
            const jsonData = await response.json();
            setData(jsonData);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        fetchAPI();
    }, []);
    return { data }
}

export default useFetchBooks;
