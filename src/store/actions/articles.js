import {GET_PART_ARTICLES, LOAD_ARTICLES} from "./actionTypes";

export const loadArticles =  () => {
    return async dispatch => {
        const data = await (await fetch('https://jsonplaceholder.typicode.com/posts/?_limit=10')).json()
        dispatch({
            type: LOAD_ARTICLES,
            payload: data
        })
    }
}

export const getPartArticles = () => {
    return {
        type: GET_PART_ARTICLES
    }
}