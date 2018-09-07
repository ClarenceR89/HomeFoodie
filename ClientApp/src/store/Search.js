//import { isNullOrUndefined } from 'util';
import { addTask, fetch } from 'domain-task';

const requestFoodItems = 'REQUEST_FOOD_ITEMS';
const receiveFoodItems = 'RECEIVE_FOOD_ITEMS';
const initialState = {
    query: '',
    foodItems: [],
    isLoading: false
};

export const actionCreators = {
    requestFoodItems: query => async (dispatch, getState) => {
        if (query === null || query === undefined || query === getState().search.query) {
            // Don't issue a duplicate request (we already have or are loading the requested data)
            return;
        }

        dispatch({
            type: requestFoodItems,
            query
        });

        const url = `http://fe-workshop.dylanharbour.com/api/food/?city_id=3&q=${query}`;
        const fetchTask = fetch(url, {
            mode: 'cors',
            method: 'GET',
        }).then((response) => {
            const foodItems = response.json();
            
            dispatch({
                type: receiveFoodItems,
                query,
                foodItems
            });
        }).catch((err) => {
            console.log(err);
            return;
        });

        addTask(fetchTask);

    }
};

export const reducer = (state, action) => {
    state = state || initialState;

    if (action.type === requestFoodItems) {
        return {
            ...state,
            query: action.query,
            isLoading: true
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