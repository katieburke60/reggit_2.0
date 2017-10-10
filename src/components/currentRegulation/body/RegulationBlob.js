/* eslint-disable */
import React from 'react';

export default (props) => {
  // debugger
  return (
    <div dangerouslySetInnerHTML={ {__html: props.body.html_blob} }>
    </div>
  )
}
