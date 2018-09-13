import {
    fetch,
    addTask
} from "domain-task";
import {
    push
} from "react-router-redux";

const requestFoodListing = 'REQUEST_FOOD_LISTING';
const receiveFoodListing = 'RECEIVE_FOOD_LISTING';
const initialState = {
    id: '',
    foodItem: {},
    isLoading: false,
};

export const actionCreators = {
    requestFoodListing: (id) => async (dispatch, getState) => {
        if (id === getState().listing.id) {
            return;
        }

        //check that query is
        if (id === null || id === undefined || id === '') {
            dispatch(push('/'));
            return;
        };

        dispatch({
            id,
            type: requestFoodListing,
        });

        const url = `http://fe-workshop.dylanharbour.com/api/food/${id}`;
        const fetchTask = fetch(url, {
            mode: 'cors',
            method: 'GET',
            headers: {
                'content-type': 'application/json',
            },
        }).then(response => {
            return response.json();
        }).then(foodResponse => {
            dispatch({
                id,
                foodItem: foodResponse.data,
                type: receiveFoodListing,
            });
        });
        addTask(fetchTask);
    }
};

export const reducer = (state, action) => {
    state = state || initialState;

    if (action.type === requestFoodListing) {
        return {
            ...state,
            id: action.id,
            isLoading: true,
        };
    }

    if (action.type === receiveFoodListing) {
        return {
            ...state,
            foodItem: action.foodItem,
            id: action.id,
            isLoading: false
        };
    }

    return state;
};