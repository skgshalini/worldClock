import React, { useState } from 'react';
import axios from 'axios';
import Timer from './Timer';

const TimezoneApp = () => {
  const [selectedTimezone, setSelectedTimezone] = useState('');
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');


  const handleTimezoneChange = (e) => {
    setSelectedTimezone(e.target.value);
  };

  const fetchInternetTime = () => {
    axios.get(`http://worldtimeapi.org/api/timezone/${selectedTimezone}`)
      .then(response => {
        const { datetime } = response.data;

        let temp = datetime.split("T")[1].split(".")[0].split(":")
        setHours(temp[0])
        setMinutes(temp[1])
        setSeconds(temp[2])
      })
      .catch(error => {
        console.log('Error fetching internet time:', error);
      });
  };

  return (<>
    <div className="TimerWrapper">
      <h1>Time Zone:</h1>
      <div className='TimerForm'>

        <select className='timer-input' value={selectedTimezone} onChange={handleTimezoneChange}>
          <option value="">-- Select Time Zone --</option>
          <option value="America/Los_Angeles">PST (Pacific Standard Time)</option>
          <option value="Asia/Kolkata">IST (Indian Standard Time)</option>
        </select>
        <br />
        <button className='timer-btn' disabled={!selectedTimezone} onClick={fetchInternetTime}>
          Get Time
        </button>
        <br />

      </div>
      {hours &&  <h1>Current Time:</h1> }
      {hours && <Timer hours={hours} minutes={minutes} seconds={seconds} setHours={setHours} setMinutes={setMinutes} setSeconds={setSeconds} />}

    </div>




  </>
  );
};

export default TimezoneApp;
