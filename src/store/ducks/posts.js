/**
 * Types
 */
export const Types = {
  LOAD_POSTS_REQUEST: 'posts/LOAD_REQUEST',
  LOAD_POSTS_SUCCESS: 'posts/LOAD_SUCCESS',
  LOAD_POSTS_FAILURE: 'posts/LOAD_FAILURE',
  ADD_POST_REQUEST: 'posts/ADD_REQUEST',
  ADD_POST_SUCCESS: 'posts/ADD_SUCCESS',
  ADD_POST_FAILURE: 'posts/ADD_FAILURE',
  UPDATE_POST_REQUEST: 'posts/UPDATE_REQUEST',
  UPDATE_POST_SUCCESS: 'posts/UPDATE_SUCCESS',
  UPDATE_POST_FAILURE: 'posts/UPDATE_FAILURE',
};

/**
 * Reducer
 */
const INITIAL_STATE = {
  loading: false,
  data: [],
  error: null,
};

export default function posts(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.LOAD_POSTS_REQUEST:
    case Types.ADD_POST_REQUEST:
    case Types.UPDATE_POST_REQUEST:
      return { ...state, loading: true };
    case Types.LOAD_POSTS_FAILURE:
    case Types.ADD_POST_FAILURE:
    case Types.UPDATE_POST_FAILURE:
      return { ...state, loading: false, error: action.payload.error };
    case Types.LOAD_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: [...action.payload.data],
      };
    case Types.ADD_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: [...state.data, action.payload.post],
      };
    case Types.UPDATE_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: state.data.filter(post => (post.id === action.payload.post.id ? action.payload.post : post)),
      };
    default:
      return state;
  }
}

/**
 * Actions
 */
export const Creators = {
  loadPostsRequest: category => ({
    type: Types.LOAD_POSTS_REQUEST,
    payload: { category },
  }),
  loadPostsSucess: data => ({
    type: Types.LOAD_POSTS_SUCCESS,
    payload: { data },
  }),
  loadPostsFailure: error => ({
    type: Types.LOAD_POSTS_FAILURE,
    payload: { error },
  }),
  addPostRequest: (post, cbSuccess) => ({
    type: Types.ADD_POST_REQUEST,
    payload: { post, cbSuccess },
  }),
  addPostSuccess: post => ({
    type: Types.ADD_POST_SUCCESS,
    payload: { post },
  }),
  addPostFailure: error => ({
    type: Types.ADD_POST_FAILURE,
    payload: { error },
  }),
  updatePostRequest: (post, cbSuccess) => ({
    type: Types.UPDATE_POST_REQUEST,
    payload: { post, cbSuccess },
  }),
  updatePostSuccess: post => ({
    type: Types.UPDATE_POST_SUCCESS,
    payload: { post },
  }),
  updatePostFailure: error => ({
    type: Types.UPDATE_POST_FAILURE,
    payload: { error },
  }),
};
