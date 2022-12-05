import {SET_LAB} from "../actions/laboratory";

const initialState = {
    lab: {},
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_LAB: {
            const {lab}  = action.payload;
            return {
                ...state,
                lab,
            };
        }
        default: {
            return state;
        }
    }
}

