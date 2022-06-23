import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { Dog } from "../App";
export interface IState {
    dogs: Dog[],
    dog: Dog
}
const initialState = {
    dogs: [{ message: "", status: "" }],
    dog: { message: "", status: "" }
}
const dogReducer = (state: IState = initialState, action: Action) => {
    switch (action.type) {
        case "GET_DOG":
            return { ...state, dog: { message: action.payload.message, status: action.payload.status } };
        case "ADD_DOG":
            let { dogs } = state;
            if (dogs[0].message === "") { dogs = dogs.filter(dog => dog.message !== "") }
            if (dogs.find(dog => dog.message === action.payload.message)) {
                return state
            }
            return {
                ...state,
                dogs: [...dogs, action.payload]
            }
        default:
            return state
    }
}
const reducers = combineReducers({
    reducer: dogReducer,
})

export const store = configureStore({ reducer: reducers, })

type Action = { type: string, payload: Dog }



