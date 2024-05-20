import React from 'react'
import '../styles/WhoAreWe.css';
import '../gwc-logo.png';

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
        <button onclick="window.location.href='';" className='button'>
          Meet the Girls Who Code Team!
        </button>
        </div>
        <img className='image-section' src='gwc-logo.png' alt='placeholder image'/>
    </div>
  );
}

export default WhoAreWe
