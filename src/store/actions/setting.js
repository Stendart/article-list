import {SETTING_CARD_SIZE} from "./actionTypes";

export const changeCardSize = (size) => {
    return {
        type: SETTING_CARD_SIZE,
        payload: size
    }
}