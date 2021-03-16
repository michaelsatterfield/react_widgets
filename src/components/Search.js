import React, {useState, useEffect} from 'react';
import axios from "axios";

const Search = () => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);


    //axios api call..async and await go inside the function of a useEffect hook, not part of it
    useEffect(() => {
        const search = async () => {
            const {data} = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term
                }
            })

            setResults(data.query.search);
        };
        if (term && !results.length){
            search();
        }else{


        const timeoutId = setTimeout(() => {
            if (term) {
                search();

            }
        }, 700)
        //built in to useEffect hook; cleanup function by adding a return function, kinda like a while loop
        return () => {
            clearTimeout(timeoutId);
        }
    }}, [term]);


    const termSubmit = (e) => {
        setTerm(e.target.value)
    }

    const renderedResults = results.map((result) => {
        return (
            <div key={result.pageid} className="item">
                <div className="right floated content">
                    <a
                        className="ui button"
                        href={`https://en.wikipedia.org?curid=${result.pageid}`}
                    >
                        Go
                    </a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{__html: result.snippet}}></span>

                </div>
            </div>
        )
    });
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
            <div className={"ui celled list"}>{renderedResults}</div>

        </div>

    );
};

export default Search;
