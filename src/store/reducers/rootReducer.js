import {combineReducers} from "redux";

import articlesReducer from "./articlesReducer";
import settingReducer from "./settingReducer";

export default combineReducers({
    article: articlesReducer,
    setting: settingReducer
})