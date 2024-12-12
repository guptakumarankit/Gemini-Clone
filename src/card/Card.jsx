import React from 'react'

const Card = ({content,img}) => {
  return (
    <div>
      <p>{content}</p>
      <img src={img} alt="" />
    </div>
  )
}

export default Card;
