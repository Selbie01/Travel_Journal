import React from 'react'

export default function Body(props){
    return (
    <div className = "card">
        <img src = {props.image} alt = "" className="card-image"/>
        <div className='card-details'>
            <span className= "country">
                <img src = {`./imgs/${props.decor}`} alt = "" className = "decor"/>
                {props.country}
                <span className="link"> {props.link}</span>
            </span>
            <span className = "location">{props.location}</span>
            <span className='date'>{props.date}</span>
            <span className = "description">{props.description}</span>
       </div>
       </div>
    );
}