import axios from 'axios';

import { 
	GET_DATA, 
	DELETE_DATA,
	ADD_ITEM
} from './menu-types';


// Get data of tyres from an API

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

// Delete data of tyres from added-list

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

// Add item to added-list

export const addItem = (data) => dispatch => {
    axios.post('https://jsonplaceholder.typicode.com/todos', data
    )
        .then(response => response.json())
        .then(data => {
            dispatch({ 
                type: ADD_ITEM,
                payload: data
            })
        })
        .catch(error => console.log(error));
};
