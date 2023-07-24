import React from 'react'
import "./SingleLogo.css"
const SingleLogo = (props) => {
  return (
      <div className='Single_Logo'>
          <img src={props.MediaLogo} alt="" className='Media_Logo'/>
    </div>
  )
}

export default SingleLogo