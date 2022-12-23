import React, { useState } from 'react';
import Calendar from 'react-calendar';
// import Sidebar from '../Sidebar/Sidebar';

function CalendarMain() {
  const [value, onChange] = useState(new Date());

  return (
    <>
      {/* <Sidebar /> */}
      <Calendar onChange={onChange} value={value} />
    </>
  );
}

export default CalendarMain;
