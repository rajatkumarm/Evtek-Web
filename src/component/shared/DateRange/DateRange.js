import React from 'react'
import { useState } from "react";
import DatePicker from "react-datepicker";


 const DateRange = ({placeholder,color,dateFormat}) => {   
        const [dateRange, setDateRange] = useState([null, null]);
        const [startDate, endDate] = dateRange;
        return (
            <>
          <DatePicker
            selectsRange={true}
            startDate={startDate}
            endDate={endDate}
            onChange={(update) => {
              setDateRange(update);
            }}
            isClearable={true}
            placeholderText={placeholder}
            dateFormat={dateFormat}
            color={color}
          />
         

</>
        );
      }
      export default DateRange
