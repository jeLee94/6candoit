import React, { useState } from "react";
import Calendar from "@fullcalendar/react";
import * as S from "./CalendarMainStyle";
import dayGridPlugin from "@fullcalendar/daygrid";

// import Sidebar from '../Sidebar/Sidebar';

function CalendarMain() {
  const [value, onChange] = useState(new Date());

  return (
    <>
      <S.Wrapper>
        <S.MainContainer>
          <S.Header>
            <h2>Calendar</h2>
          </S.Header>
          <Calendar defaultView="dayGridMonth" plugins={[dayGridPlugin]} />
        </S.MainContainer>
      </S.Wrapper>
    </>
  );
}

export default CalendarMain;
