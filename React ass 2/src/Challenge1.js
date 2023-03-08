import React from 'react'

export default function Challenge1(props) {
  return (
    <>
     <h1>{props.heading}</h1> 
    <input type="text" placeholder='mobile ...' size={58}  />
    <br />
    <br />
    <input type="text" placeholder='password ...' size={58}  />
    <br />
    <br />
    <button >{props.buttom}</button>
    </>
  )
}
