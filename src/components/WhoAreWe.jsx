import React from 'react'
import App from "./App";
import './WhoAreWe.css';

const WhoAreWe = () => {
  return (
    <div className='container'>
      <div className='text-section'>
        <h1>
          Who We Are
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus imperdiet sed id elementum. Quam vel aliquam sit vulputate. 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus imperdiet sed id elementum. Quam vel aliquam sit vulputate. 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus imperdiet sed id elementum. Quam vel aliquam sit vulputate. 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus imperdiet sed id elementum. Quam vel aliquam sit vulputate. 
        </p>
        <button className='button'>
          Meet the Girls Who Code Team!
        </button>
        </div>
        <div className='image-section'>
          <img src='gwc-logo.png' alt=''/>
      </div>
    </div>
  )
}

export default WhoAreWe
