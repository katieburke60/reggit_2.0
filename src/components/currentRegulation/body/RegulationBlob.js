/* eslint-disable */
import React from 'react';

export default (props) => {
  return (
    <div dangerouslySetInnerHTML={ {__html: props.body.html_blob} }>
    </div>
  )
}
