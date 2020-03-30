import axios from 'axios';

import { GET_DATA, DELETE_DATA } from './menu-types';


// Get Data of tyres from an API Action.

export const getData = () => dispatch => {
        axios.get('https://jsonplaceholder.typicode.com/todos', {
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

// Delete Data Action

export const deleteData = (id) => dispatch => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}/`, {
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            dispatch({
                type: DELETE_DATA,
                payload: data
            })
        })
        .catch(error => console.log(error));
};
