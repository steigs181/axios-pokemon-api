import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AllPokemon() {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
            .then(response => {
                setData(response.data.results);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
        }, []);

        return (
            <div>
                <h2>All Pokemon:</h2>
                    <ul>
                        {data.length === 0 ? (
                            <li>Loading...</li>
                        ) : (
                            data.map(item => (
                                <li key={item.name}>{item.name}</li>
                            ))
                        )}
                    </ul>
            </div>
        );
    }
export default AllPokemon;

