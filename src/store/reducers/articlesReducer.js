import {LOAD_ARTICLES} from "../actions/actionTypes";

const initialState = []

export default function articlesReducer (state = initialState, action) {
    switch (action.type) {
        case LOAD_ARTICLES:
            return [...state, ...action.payload]
        default:
            console.log('Дошло')
            return state
    }
}