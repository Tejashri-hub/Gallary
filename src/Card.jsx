import React from 'react';

function Card(props){
  return (
    <div className="main"> 
       <div className="one">
         <img src={props.imgsrc} alt=""/>
       </div> 
       <div className="two">
         <h3> {props.title} </h3>
         <p>{props.para}</p>
         <a href={props.link}>
         <button>Watch</button>
         </a>
       </div>
    </div>

  );
}

export default Card;