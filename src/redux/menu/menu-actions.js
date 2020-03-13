import axios from 'axios';

import { GET_DATA } from './menu-types';


// Get Data of tyres from an API.a1

const getData = () => dispatch => {
    const url = 'https://6aa8944b.ngrok.io';
        axios.get('https://cors-anywhere.herokuapp.com/' + url)
            .then(res => res.json())
            .then(data => {
                dispatch({
                    type: GET_DATA,
                    payload: data
                })
            })
            .catch(error => console.log(error));
};

export default getData;