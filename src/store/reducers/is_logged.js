import { IS_LOGGED } from "../actions/is_logged";

const initialState = {
    is_logged: false,
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case IS_LOGGED: {
            const  is_logged  = action.payload;
            console.log(is_logged, 'is_logged')
            return {
                ...state,
                is_logged,
            };
        }
        default: {
            return state;
        }
    }
}

