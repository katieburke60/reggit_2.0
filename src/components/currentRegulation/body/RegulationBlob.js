//NOTE: Page not getting hit

import React from 'react';
import { connect } from 'react-redux'

const RegulationBlob = (props) => {
  return (
    <div>
      {props.body.html_blob}
    </div>
  )
}

export default connect()(RegulationBlob)
