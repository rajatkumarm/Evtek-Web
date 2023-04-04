import React from "react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePick = ({placeholder,color,type,dateFormat,onChange,className})=> {
const [startDate, setStartDate] = useState(null);
return (
<DatePicker selected={startDate} className={className} onChange={(date) => {setStartDate(date); onChange();} }   fixedHeight  placeholderText={placeholder} color={color}    dateFormat={dateFormat}/> );
};

export default DatePick;

