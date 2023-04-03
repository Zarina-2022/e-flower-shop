import actionTypes from "../actions/actionTypes";

const initialState={
    panding: false,
    success: false,
    categories: [],
    error: false,
    errorMessage: ""
}

const categoriesReducer = (state=initialState,action)=>{
    switch (action.type) {
        case actionTypes.categoryActions.GET_CATEGORIES_START:
            return{
                ...state,
                panding: true
            }
            case actionTypes.categoryActions.GET_CATEGORIES_SUCCESS:
                return{
                    ...state,
                    panding:false,
                    success: true,
                    error:false,
                    categories:action.payload
                }
                case actionTypes.categoryActions.GET_CATEGORIES_FAIL:
                    return{
                        ...state,
                        panding:false,
                        success: false,
                        error:true,
                        errorMessage: action.payload
                    }
    
        default:
            return state
    }
}

export default categoriesReducer