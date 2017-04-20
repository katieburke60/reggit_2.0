import React from 'react';
import { connect } from 'react-redux'

const RegulationBlob = (props) => {
  return (
    <div dangerouslySetInnerHTML= {{__html: props.body.html_blob}}>
    </div>
  )
}

export default connect()(RegulationBlob)
