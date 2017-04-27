export default (state='', action) => {

  switch(action.type) {
    case 'SUBMIT_COMMENT':
    console.log(action)
      return action.comment
    default:
      return state
    }
}
