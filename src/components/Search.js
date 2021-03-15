import React, {useState, useEffect} from 'react';
import axios from "axios";

const Search = () => {
    const [term, setTerm] = useState('');


    //axios api call..async and await go inside the function of a useEffect, not part of it
    useEffect(() => {
        const search = async () => {
            await axios.get('https://en.wikipedia.org/w/api.php', {
               params: {
                   action: 'query',
                   list: 'search',
                   origin: '*',
                   format: 'json',
                   srsearch: term
               }
            })
        };

        search();
    }, [term]);

    const termSubmit = (e) => {
        setTerm(e.target.value)
    }


    return (
        <div>
            <div className={"ui form"}>
                <div className={"field"}>
                    <label>Enter search Term</label>
                    <input className={"input"}
                           type={'text'}
                           value={term}
                           onChange={termSubmit}
                    />
                </div>
            </div>
        </div>

    );
};

export default Search;
