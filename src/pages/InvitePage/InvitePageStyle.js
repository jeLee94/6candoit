import styled from 'styled-components';

export const Div = styled.div`
  height: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  transition-duration: 0.2s;
  overflow-y: auto;
  overflow-x: hidden;
`;
export const Sidebar = styled.div`
  width: 100%;
  padding-top: 1.875rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: x-large;
`;

export const Contents = styled.div`
  width: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const Input = styled.input`
  height: 30px;
  width: 300px;
`;
export const Submit = styled.input`
  width: 100px;
  height: 34px;
`;
