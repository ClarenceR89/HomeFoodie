import {
    fetch,
    addTask
} from "domain-task";
import {
    push
} from "react-router-redux";

const setQueryParams = 'SET_QUERY_PARAMS';
const requestFoodItems = 'REQUEST_FOOD_ITEMS';
const receiveFoodItems = 'RECEIVE_FOOD_ITEMS';
const initialState = {
    query: '',
    foodItems: [],
    isLoading: false,
};

export const actionCreators = {
    setQueryParams: (query, redirect = true) => async (dispatch, getState) => {
            if (query == null || query === undefined || query === getState().search.query) return;

            dispatch({
                type: setQueryParams,
                query,
                foodItems: []
            });
            if (redirect) {
                dispatch(push(`search?query=${query}`));
            }
        },
        requestFoodItems: () => async (dispatch, getState) => {
            const {
                foodItems,
                query,
                isLoading
            } = getState().search;

            // //check that query is
            // if (query === null || query === undefined || query === '') {
            //     dispatch(push('/'));
            //     return;
            // };

            if (foodItems !== null && foodItems.length > 0) {
                return;
            }

            if (isLoading) {
                return;
            }

            dispatch({
                query,
                type: requestFoodItems,
            });

            const url = `http://fe-workshop.dylanharbour.com/api/food/?city_id=3&q=${query}`;
            const fetchTask = fetch(url, {
                mode: 'cors',
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                },
            }).then((response) => {
                return response.json();
            }).then((response) => {
                const foodResponse = response;
                dispatch({
                    query,
                    foodItems: foodResponse.data,
                    type: receiveFoodItems,
                });
            });
            addTask(fetchTask);
        }
};

export const reducer = (state, action) => {
    state = state || initialState;
    if (action.type === setQueryParams) {
        return {
            ...state,
            query: action.query,
            foodItems: action.foodItems,
        }
    }

    if (action.type === requestFoodItems) {
        return {
            ...state,
            query: action.query,
            isLoading: true,
        };
    }

    if (action.type === receiveFoodItems) {
        return {
            ...state,
            foodItems: action.foodItems,
            query: action.query,
            isLoading: false
        };
    }

    return state;
};