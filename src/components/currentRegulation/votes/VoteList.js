import React, { Component } from 'react';
import { connect } from 'react-redux'

class VoteList extends Component {
  render() {
    let votesFor = this.props.regulation.votes.filter((vote) => vote.vote === "up").length
    let votesAgainst = this.props.regulation.votes.length - votesFor
    return (
      <div>
        <div style={{width:'100%'}}>
          <div style={{float:'left', width:"50%"}}>
            <div className='vote-count vote-count-2'>{votesFor}</div><br/>
            <div className='vote-text vote-count-1'>Votes For</div>
          </div>

          <div style={{width:"50%", float: 'right'}}>
            <div className='vote-count vote-count-2'>{votesAgainst}</div><br/>
            <div className='vote-text'>Votes Against</div>
          </div>
        </div>
        <br/>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    regulation: state.currentRegulation
  }
}
export default connect(mapStateToProps)(VoteList)
