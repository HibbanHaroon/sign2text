import React from 'react'
import Header from './Header'
import Footer from './Footer'

const HowItWorks = () => {
  return (
    <div>
      <Header/>
      <div className='page_heading'>
      <h1 className='pg_heading mx-auto mb-11 mt-5'>How it works</h1>
      <div className='flex flex-col md:flex-row md:mx-28 mx-4 md:gap-11'>
      <div className='md:w-1/2 flex flex-col justify-center mt-11 mb-11 animate-fade-in-left'>
        <h2 className='headings'>Step 1: Choose the Mode</h2>
        <p className='text'>Select either the static or dynamic mode based on your communication needs.</p>
      </div>
      <div className='md:w-1/2 animate-fade-in-right'>
        <img src="/Images/step_1.png" alt="" className='img'  />
      </div>
    </div>

    <div className='flex flex-col md:flex-row md:mx-28 mt-11 mx-4 md:gap-11'>

      <div className='md:w-1/2 animate-fade-in-left '>
        <img src="/Images/step_2.jpg" alt="" className='img'  />
      </div>

      <div className='md:w-1/2 flex flex-col justify-center mt-11 mb-11 animate-fade-in-right'>
        <h2 className='headings'>Step 2: Turn on the Camera</h2>
        <p className='text'>Activate your device's camera to begin the sign language translation process.</p>
      </div>
    </div>

         <div className='flex flex-col md:flex-row md:mx-28 mt-11 mx-4 md:gap-11'>
      <div className='md:w-1/2 flex flex-col justify-center mt-11 mb-11 animate-fade-in-left'>
        <h2 className='headings'>Step 3: Sit in Frame</h2>
        <p className='text'>Ensure only one person is in the camera frame at a time to facilitate accurate gesture recognition.</p>
      </div>
      <div className='md:w-1/2 animate-fade-in-right'>
        <img src="/Images/step_2.jpg" alt="" className='img'  />
      </div>
    </div>

    <div className='flex flex-col md:flex-row md:mx-28 mt-11 mx-4 md:gap-11'>

      <div className='md:w-1/2 animate-fade-in-left '>
        <img src="/Images/step_4.png" alt="" className='img'  />
      </div>

      <div className='md:w-1/2 flex flex-col justify-center mt-11 mb-11 animate-fade-in-right'>
        <h2 className='headings'>Step 4: Start Talking</h2>
        <p className='text'>Begin communicating through sign language gestures, and Sign2Text will seamlessly translate them into written or spoken language in real-time.</p>
      </div>
    </div>

      </div>
      <Footer/>
    </div>
  )
}

export default HowItWorks