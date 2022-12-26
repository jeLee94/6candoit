import React, { useState, useEffect } from 'react';
import Calendar from '@fullcalendar/react';
import * as S from './CalendarMainStyle';
import { useSelector } from 'react-redux';
import dayGridPlugin from '@fullcalendar/daygrid';
import { __getPost } from '../../../redux/modules/posts';
import { useDispatch } from 'react-redux';
// import Sidebar from '../Sidebar/Sidebar';

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
      date: post.created_at.split(' ')[0].split('.').join('-'),
    };
  });

  return (
    <>
      <S.Wrapper>
        <S.MainContainer>
          <S.Header>
            <h2>Calendar</h2>
          </S.Header>
          <S.StyleWrapper>
            <Calendar
              defaultView='dayGridMonth'
              plugins={[dayGridPlugin]}
              events={calendarEvents}
            />
          </S.StyleWrapper>
        </S.MainContainer>
      </S.Wrapper>
    </>
  );
}

export default CalendarMain;
