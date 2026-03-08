import { useEffect, useState } from 'react'
import axios from 'axios';

const ApisGet = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        axios.all(
            [axios.get('https://jsonplaceholder.typicode.com/posts')
                , axios.get('https://jsonplaceholder.typicode.com/users')
            ]
        )
            .then(axios.spread((posts, users) => {
                console.log(posts);
                setData(posts.data)
                setLoading(false)
            }))
            .catch((error) => {
                console.log(`Error fetching data: `, error);
                setError(`Failed to fetch the data due to error:- ${error}`);
                setLoading(false);
            })
            .finally(
                () => { return setLoading(false) }
            )

    }, []);

    if (loading) {
        return <p>Loading...</p>
    }

    if (error) {
        return <p>{error}</p>
    }

    return (
        <div>
            <h1>Api's</h1>
            {data.map((value) => {
                return (
                    <ul key={value.id} style={{ border: '2px solid black', margin: '5px' }}>
                        <li><strong>Id:-</strong> {value.userId}</li>
                        <li><strong>Title:-</strong>{value.title}</li>
                        <li><strong>Description:-</strong> {value.body}</li>
                    </ul>
                )
            })}
        </div>
    )
}

export default ApisGet
