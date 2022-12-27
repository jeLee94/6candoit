import React, { useState, useEffect } from "react";
import Calendar from "@fullcalendar/react";
import * as S from "./CalendarMainStyle";
import { useSelector } from "react-redux";
import dayGridPlugin from "@fullcalendar/daygrid";
import { __getPost } from "../../../redux/modules/posts";
import { useDispatch } from "react-redux";
// import Sidebar from '../Sidebar/Sidebar';
import CalendarTodo from "./CalendarTodo";
import dayjs from "dayjs";

function CalendarMain() {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);
  const [value, onChange] = useState(new Date());

  useEffect(() => {
    dispatch(__getPost());
  }, [dispatch]);

  const calendarEvents = posts.map((post) => {
    return {
      title: post.title,
      start: post.fromDate,
      end: post.toDate,
    };
  });

  console.log(CalendarTodo);
  return (
    <>
      <S.Wrapper>
        <S.MainContainer>
          <S.Header>
            <h2>Calendar</h2>
          </S.Header>
          <S.StyleWrapper>
            <Calendar
              defaultView="dayGridMonth"
              plugins={[dayGridPlugin]}
              events={calendarEvents}
              displayEventTime={false}
              style={{ width: "285px" }}
            />
          </S.StyleWrapper>
        </S.MainContainer>
      </S.Wrapper>
    </>
  );
}

export default CalendarMain;
