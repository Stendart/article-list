import {SETTING_CARD_SIZE} from "../actions/actionTypes";

const initialState = {
    cardSize: 'big'
}

export default function settingReducer(state=initialState, actions) {
    switch (actions.type) {
        case SETTING_CARD_SIZE:
            return {...state, cardSize: actions.payload}
        default:
            return state
    }
}