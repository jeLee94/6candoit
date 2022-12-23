import React, { useState } from "react";
import Calendar from "react-calendar";
import * as S from "./CalendarMainStyle";
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
          <Calendar onChange={onChange} value={value} />
        </S.MainContainer>
      </S.Wrapper>
    </>
  );
}

export default CalendarMain;
