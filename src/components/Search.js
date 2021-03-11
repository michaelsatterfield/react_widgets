import React,{useState} from 'react';


const Search = () => {

    const[term,setTerm]= useState('hi');

    const termSubmit = (e)=> {
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
