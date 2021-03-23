import React from 'react';
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";

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

const options =[
    {
        label: 'The Color Red',
        value: 'red'
    },
    {
        label: 'The Color Green',
        value: 'green'
    },
    {
        label: 'The Color Blue',
        value: 'blue'
    },
];

// eslint-disable-next-line import/no-anonymous-default-export
export default () =>{
    return (
        <div>
           {/*<Search/>*/}
           <Dropdown options={options}/>
        </div>)

}
