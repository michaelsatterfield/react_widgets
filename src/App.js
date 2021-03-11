import React from 'react';
import Accordion from "./components/Accordion";
import Search from "./components/Search";

const items = [
    {
        title: 'What is React',
        content: 'React is a front end JS framework'
    },
    {
        title: 'Why use React?',
        content: 'React is a favorite library used by engineers'
    },
    {
        title: 'How do you use React?',
        content: 'You use React by creating components and states'
    },
]

// eslint-disable-next-line import/no-anonymous-default-export
export default () =>{
    return (
        <div>
           <Search/>
        </div>)

}
