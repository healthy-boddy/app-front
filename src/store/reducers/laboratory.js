import {SET_LAB, SET_SAVED_ANALYSE_ID} from "../actions/laboratory";

const initialState = {
    lab: {},
    analyseId: ''
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_LAB: {
            const {lab}  = action.payload;
            console.log(lab.id, 'reducer id')
            return {
                ...state,
                lab,
            };
        }
        case SET_SAVED_ANALYSE_ID: {
            const {analyseId}  = action.payload;
            console.log(analyseId,'analyseId from reducer')
            return {
                ...state,
                analyseId
            };
        }
        default: {
            return state;
        }
    }
}

