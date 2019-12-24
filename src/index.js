import React from 'react';
import ReactDOM from 'react-dom';

const getResource = async (url) => {
    const response = await fetch(url);
    return await response.json();
};

getResource("https://swapi.co/api/people/1/")
    .then(body => console.log(body));