import axios from 'axios';

import { GET_DATA } from './menu-types';


// Get Data of tyres from an API.

export const getData = () => dispatch => {
    // const url = 'https://97a35e17.ngrok.io';
        axios.get('https://jsonplaceholder.typicode.com/todos/1', {
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                dispatch({ 
                    type: GET_DATA,
                    payload: data
                })
            })
            .catch(error => console.log(error));
};
