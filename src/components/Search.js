import React, {useState, useEffect} from 'react';
import axios from "axios";

const Search = () => {
    const [term, setTerm] = useState('Search for Something ');


    useEffect(() => {
        const search = () => {

        };


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
