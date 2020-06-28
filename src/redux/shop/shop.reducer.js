import shopActionsType from './shop.type';

const INITIAL_STATE = {
    collections: null,
    isFetching: false,
    errorMessage: ''
}

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case shopActionsType.FETCH_COLLECTIONS_START:
            return {
                ...state,
                isFetching: true
            }
        case shopActionsType.FETCH_COLLECTIONS_SUCESS:
            return {
                ...state,
                isFetching: false,
                collections: action.payload
            }
        case shopActionsType.FETCH_COLLECTIONS_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }
        default:
            return state;
    }
}

export default shopReducer;