import styled from "styled-components";

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
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 150px;
`;

export const Input = styled.input`
  height: 4rem;
  background: #f2f2f2;
  width: 300px;
  border: 0;
  padding: 25px;
  box-sizing: border-box;
  font-size: 14px;
  border-radius: 10px;
`;

export const Submit = styled.input`
  margin-left: 20px;
  width: 150px;
  height: 4rem;
  border-radius: 10px;
  background-color: #3a9bfe;
  color: white;
  border: none;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3.125rem 4.375rem;
  flex-grow: 1;
  overflow: auto;
`;

export const Friend = styled.p`
  font-size: 20px;
  margin-right: 20px;
`;
