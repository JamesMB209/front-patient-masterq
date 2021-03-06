import { LOAD_CONFIG } from "./actions";

const initialState = {
    business:[],
    doctors:[]
}

export const appConfigReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_CONFIG:
            return Object.assign({}, state, action.data);
        default:
            return state
    }
}