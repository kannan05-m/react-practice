import React from 'react'

const Card = (props) => {
  return (
    <div className='card'>
      <img src = {props.img}></img>
      <h1>{props.artist} , {props.number}</h1>
      <p>{props.song} </p>
      <button>Play song </button>
    </div>
  )
}

export default Card