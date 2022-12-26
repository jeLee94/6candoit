import styled from 'styled-components';

export const dot = styled.div`
  height: 0.5rem;
  width: 0.5rem;
  background-color: #f87171;
  border-radius: 50%;
  display: flex;
  margin-left: 0.0625rem;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  padding: 1.875rem;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3.125rem 4.375rem;
  flex-grow: 1;
  overflow: auto;
  background-color: #f6f8fb;
  .fc-button-primary {
    background-color: #3a8bfe;
    border-color: #3a8bfe;
  }
`;

export const StyleWrapper = styled.div`
  .fc-day {
    padding: 15px;
  }

  .fc-day-sun a {
    color: red;
  }

  .fc-day-sat a {
    color: blue;
  }

  .fc .fc-daygrid-day-number {
    padding: 0px;
    position: relative;
  }

  .fc-h-event {
    padding: 5px;
  }

  .fc-col-header {
    padding: 20px;
    background-color: white;
    color: black;
  }
`;
