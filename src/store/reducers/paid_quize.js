import {SET_PAID_QUIZE, SET_FREE_QUIZE} from "../actions/paid_quize";

const initialState = {
    quize: [],
    free_quize: []
};
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_PAID_QUIZE: {
            const {quize}  = action.payload;
            console.log(quize, 'reducer quize')
            return {
                ...state,
                quize,
            };
        }
        case SET_FREE_QUIZE: {
            const {free_quize}  = action.payload;
            console.log(free_quize, 'reducer free_quize')
            return {
                ...state,
                free_quize,
            };
        }
        default: {
            return state;
        }
    }
}
