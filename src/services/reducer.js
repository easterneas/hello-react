import initialState from './state.js'

export default function reducer(state = initialState, action) {
  switch(action.type){
    // Users
    case "GET_USER":
      return {
        ...state,
        users: action.payload
      }

    case "ADD_NEW_USER":
      const newState = { ...state }

      newState.users.push(action.payload)

      return newState

    // People
    case "GET_PEOPLE":
      return {
        ...state,
        people: action.payload
      }

    // Authentication
    case "USER_LOGIN":
      return {
        ...state,
        auth: {
          username: action.payload.username,
          isLoggedIn: action.payload.isLoggedIn
        }
      }

    case "SHOW_ERROR":
      return {
        ...state,
        error: action.payload
      }
    
    case "SET_FORM_ERROR":
      return {
        ...state,
        formError: action.payload
      }

    case "DISMISS_ERROR":
      return {
        ...state,
        error: null
      }

    default:
      return state
  }
}