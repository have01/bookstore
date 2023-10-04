import { useEffect, useState } from 'react'

const useFetchBooks = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true)

    const fetchAPI = async () => {
        try {
            const response = await fetch(url);
            const jsonData = await response.json();
            setData(jsonData);
            setLoading(false)
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        fetchAPI();
    }, []);
    return { data, loading }
}

export default useFetchBooks;
