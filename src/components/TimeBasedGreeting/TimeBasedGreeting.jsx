import React, { useState, useEffect } from 'react';
import { TimeBasedGreetingimg } from '../../utils/images';
import "./TimeBasedGreeting.scss"


const TimeBasedGreeting = () => {
  const [timeOfDay, setTimeOfDay] = useState('');

  useEffect(() => {
    
    const currentHour = new Date().getHours();

    let newTimeOfDay;
    if (currentHour >= 0 && currentHour < 12) {
      newTimeOfDay = 'morning';
    } else if (currentHour >= 12 && currentHour < 18) {
      newTimeOfDay = 'afternoon';
    } else {
      newTimeOfDay = 'evening';
    }

  
    setTimeOfDay(newTimeOfDay);
  }, []);


  const renderContent = () => {
    switch (timeOfDay) {
      case 'morning':
        return <p>Good morning! Have a great day!</p>;
      case 'afternoon':
        return <p>Good afternoon! Hope you're having a good day!</p>;
      case 'evening':
        return <p>Good evening! Wishing you a pleasant evening!</p>;
      default:
        return <p>Hello! Welcome!</p>;
    }
  };

  return (
    <div className="TimeBased">
        <div className='TimeBased-content'>
            <h2 className='TimeBasedGreeting'>{timeOfDay}</h2>
        {renderContent()}
        </div>




      

      <div className="TimeBased-img">
        <img src={TimeBasedGreetingimg} alt="" />
      </div>
    </div>
  );
};

export default TimeBasedGreeting;