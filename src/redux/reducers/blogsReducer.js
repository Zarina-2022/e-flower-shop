import actionTypes from "../actions/actionTypes";

const initialState = {
  panding: false,
  success: false,
  blogs: [],
  error: false,
  errorMessage: "",
};

const blogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.blogActions.GET_BLOGS_START:
      return {
        ...state,
        panding: true,
      };
    case actionTypes.blogActions.GET_BLOGS_SUCCESS:
      return {
        ...state,
        panding: false,
        success: true,
        error: false,
        blogs: action.payload,
      };
    case actionTypes.blogActions.GET_BLOGS_FAIL:
      return {
        ...state,
        panding: false,
        success: false,
        error: true,
        errorMessage: action.payload,
      };
      case actionTypes.blogActions.ADD_BLOGS:
      return {
        ...state,
       blogs:[...state.blogs,action.payload]
      };

    default:
      return state;
  }
};

export default blogsReducer;
