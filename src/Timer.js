
import React, { useEffect } from 'react'
const Timer = ({ hours, minutes, seconds, setSeconds, setMinutes, setHours }) => {



  useEffect(() => {
    let interval;

    interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1)
      } else if (minutes > 0) {
        setMinutes(minutes - 1)
        setSeconds(59)
      } else if (hours > 0) {
        setHours(hours - 1)
        setMinutes(59)
        setSeconds(59)
      } else {
        setHours(23)
        setMinutes(59)
        setSeconds(59)
      }
    }, 1000);


    return () => {

      clearInterval(interval);
    };
  });


  return (
    <div className='Timer'>
      <p>



        <span className='time-box'>{String(hours).padStart(2, '0')}</span>
        <span >:</span>
        <span className='time-box'>{String(minutes).padStart(2, '0')}</span>
        <span>:</span>
        <span className='time-box'>{String(seconds).padStart(2, '0')}</span>

      </p>


    </div>
  )
}

export default Timer
