import styled from "styled-components";
import { Calendar } from "@fullcalendar/react";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  padding: 30px;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px 70px;
  flex-grow: 1;
  overflow: auto;
  background-color: #f6f8fb;
  .fc-button-primary {
    background-color: #3a8bfe;
    border-color: #3a8bfe;
  }
  .fc .fc-daygrid-day.fc-day-today {
    background-color: #c5dcff;
  }
  .fc-daygrid-event {
    border-radius: 3.125rem;
    background-color: #3a8bfe;
  }
`;

export const StyleWrapper = styled.div`
  .fc-day {
    padding: 0.9375rem;
  }

  .fc-day-sun a {
    color: red;
  }

  .fc-day-sat a {
    color: blue;
  }

  .fc .fc-daygrid-day-number {
    padding: 0rem;
    position: relative;
  }

  .fc-h-event {
    padding: 0.3125rem;
  }

  .fc-col-header {
    padding: 1.25rem;
    background-color: white;
    color: black;
  }
`;
