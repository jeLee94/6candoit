import React, { useEffect } from 'react';
import Calendar from '@fullcalendar/react';
import * as S from './CalendarMainStyle';
import { useSelector } from 'react-redux';
import dayGridPlugin from '@fullcalendar/daygrid';
import { __getPost } from '../../../redux/modules/posts';
import { useDispatch } from 'react-redux';

function CalendarMain() {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(__getPost());
  }, [dispatch]);

  function getFormatDate(date) {
    let year = date.getFullYear(); //yyyy
    let month = 1 + date.getMonth(); //M
    month = month >= 10 ? month : '0' + month; //month 두자리로 저장
    let day = date.getDate(); //d
    day = day >= 10 ? day : '0' + day; //day 두자리로 저장
    return year + '' + month + '' + day; //'-' 추가하여 yyyy-mm-dd 형태 생성 가능
  }

  const calendarEvents = posts.map((post) => {
    const yyyy = post.toDate?.substring(0, 4);
    const mm = post.toDate?.substring(4, 6);
    const dd = post.toDate?.substring(6, 8);

    const tempDate = new Date(yyyy + '/' + mm + '/' + dd);

    const tomorrow = new Date(tempDate.setDate(tempDate.getDate() + 1));

    const endToDate = getFormatDate(tomorrow);

    return {
      title: post.title,
      start: post.fromDate,
      end: endToDate,
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
              displayEventTime={false}
              style={{ width: '285px' }}
            />
          </S.StyleWrapper>
        </S.MainContainer>
      </S.Wrapper>
    </>
  );
}

export default CalendarMain;
