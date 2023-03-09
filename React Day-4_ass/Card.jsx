import React from 'react'
import "./Card.css"
// const Card = ({img,desc,desig,name}) => {
const Card = (props) => {
    const { img, desc, desig, name } = props;
    return (
        <>     
        
         <div className='full'>  
        <div className='main'>
            <img src={img} alt={name} />
            <h1>{desig}</h1>
            <h3>{name}</h3>
            <p>{desc}</p>
            </div>
            <div>.</div>
        </div>   </>
       
    )
}

export default Card