export default function sessionReducer(state=localStorage.getItem('jwt'), action){
  switch (action.type) {
    case 'LOGIN':
      return localStorage.getItem('jwt')
    case 'LOGOUT':
      return ''
    default:
      return state
  }
}
