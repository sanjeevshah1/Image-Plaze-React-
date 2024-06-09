import "./Next.css"
import React from 'react'

const Next = ({handleIncrease}) => {
  return (
    <div className="next">
        <button id="show-more" onClick={handleIncrease}>Show More</button>
    </div>
  )
}

export default Next