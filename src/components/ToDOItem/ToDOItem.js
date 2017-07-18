import React from 'react'
import PropTypes from 'prop-types'
import styles from './ToDOItem.css'

const ToDOItem = ({ id, content, getId }) => (
  <div className="ToDOItem" key={id}>
    <p>id:{id}</p>
    <div className="content">{content}</div>
    <input type="checkbox" onChange={()=>{getId(id)}}/>
  </div>
);

export default ToDOItem
