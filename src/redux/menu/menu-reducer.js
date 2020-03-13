import { GET_DATA } from './menu-types';

const INITIAL_STATE = {
    data: []
};


const menuReducer = ( state=INITIAL_STATE, action ) => {
    switch (action.type) {
        case GET_DATA: 
            return {
                ...state,
                data: action.payload
            }
            default: {
                return state;
            }
    }
};

export default menuReducer;