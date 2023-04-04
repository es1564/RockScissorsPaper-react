import React from 'react'

const Box2 = (props) => {
    let result;
    if (props.title == "Computer" && props.result != "tie" && props.result != ""){
        result = props.result=="win"?"lose":"win"
    } else {
        result = props.result;
    }
  return (
    <div className={`box2 ${result}`}>
        <h1>{props.title}!</h1>
        <img 
            className='item-img' 
            src={props.item && props.item.img}>
        </img>
        <h2>{result}</h2>
    </div>
  )
}

export default Box2