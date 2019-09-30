import { 
    FETCHING_SMURF_START, 
    FETCHING_SMURF_SUCCESS,
    FETCHING_SMURF_ERR,
    ADD_SMURF_START,
    ADD_SMURF_SUCCESS,
    ADD_SMURF_ERR
} from '../actions';

const initialState = {
    smurfs: [],
    isFetching: false,
    error: ''
};

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCHING_SMURF_START:
            return {
                ...state,
                isFetching: true,
                error: ''
            }
        case FETCHING_SMURF_SUCCESS:
            return {
                ...state,
                smurfs: [...state.smurfs, ...action.payload],
                isFetching: false
            }
        case FETCHING_SMURF_ERR:
            return {
                ...state,
                isFetching: false,
                error: 'Error fetching smurf data'
            }
        case ADD_SMURF_START:
            return {
                ...state,
                fetchingSmurf: true,
                err: ''
            }
        case ADD_SMURF_SUCCESS:
            // console.log('is the action getting here???')            
            return {
                ...state,
                smurfs: action.payload,
                isFetching: false,
                error: ''
            }
        case ADD_SMURF_ERR:
            return {
                ...state,
                isFetching: false,
                error: 'Error adding smurf data'
            }
        default:
            return state;
    }
}