import React from 'react'
import PropTypes from 'prop-types'
import styles from './ToDOItem.css'

const ToDOItem = ({ id, content, getId }) => (
  <div className="ToDOItem" key={id}>
    {content}
    <input type="checkbox" onChange={()=>{getId(id)}}/>
  </div>
);

export default ToDOItem
