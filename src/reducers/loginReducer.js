export const manageLogin = (state={token: ''}, action) => {
  switch(action.type) {
    case 'LOGIN':
      return {token: action.payload}
    case 'LOGOUT':
      return {token: ''}
    default:
      return state
  }
}
