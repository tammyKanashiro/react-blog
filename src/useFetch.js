import { useState, useEffect } from "react";

// Custom hook
const useFetch = (url) => {
    const [data, setData] = useState(null); 
    const [isPending, setPending] = useState(true);
    const [error, setError] = useState(null); 

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then(res => {
                    if (!res.ok) {
                       throw Error('Could not fetch the data for that resouce') ;
                    }
                    
                    return res.json();
                })
                .then(data => {
                    console.log(data);
                    setData(data);
                    setPending(false);
                    setError(null);
                })
                .catch(err => {
                    setError(err.message);
                    setPending(false); 
                })
        }, 1000);
    }, [url]);

    return { data, isPending, error }
}

export default useFetch;
 
