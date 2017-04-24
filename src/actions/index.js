import axios from 'axios'

export const getRegulationList = () => {
  return (dispatch) => {
    axios
      .get(`http://localhost:4000/regulations`)
      .then(({data}) => {

        dispatch({type: "RECEIVE_REGULATIONS", regulation: data})

      })
  }
}

export const getRegulation = (regulation) => {
  return (dispatch) => {

    axios
    .get(`http://localhost:4000/regulations/${regulation.id}`)
      .then(({data}) => {
        dispatch({type: "SET_CURRENT_REGULATION", regulation: data})
      })
  }
}
export const addVote = (regulation, vote) => {
  return(dispatch) => {
    axios({
      method: 'POST',
      url: `http://localhost:4000/votes`,
      dataType: "json",
      data: {
        vote: vote,
        regulation_id: regulation.id
      },
      // success: function(data) {
      //   alert(data[1]);
      // },
      // error: function(data){
      //   alert("fail");
      // }
      })
    }
}
