import React, { useState } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../Calendar/calendar.module.scss';

function Calender() {
  const [currentValue, setCurrentValue] = useState(new Date());

  return (
    <div className="App">
      <div className="calendarHome">
        <Calendar
          onChange={(value, event) => {
            setCurrentValue(value);
          }}
          value={currentValue}
        />
      </div>
    </div>
  )
}

export default Calender