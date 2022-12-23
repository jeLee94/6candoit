import styled from 'styled-components';

export const CommentsWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const TitleInput = styled.input`
  border: 1px solid #eee;
  width: 100%;
  border-radius: 12px;
  outline: none;
  padding: 0 10px;
`;

export const ContentInput = styled.input`
  border: 1px solid #eee;
  width: 100%;
  border-radius: 12px;
  outline: none;
  padding: 0 10px;
`;

export const AddWrap = styled.div`
  margin: 0.625rem;
  background-size: 80%;
  background-color: #3a8bfe;
  display: flex;
  flex-direction: column;
  width: 35%;
  height: 31.25rem;
  padding: 1.875rem;
  border-radius: 1.25rem;
  align-self: stretch;
  overflow: hidden;
  position: relative;
`;

export const DoingTodo = styled.div`
  margin: 0.625rem;
  background-size: 80%;
  background-color: #3a8bfe;
  display: flex;
  flex-direction: column;
  width: 35%;
  height: 31.25rem;
  padding: 1.875rem;
  border-radius: 1.25rem;
  align-self: stretch;
  overflow: hidden;
  position: relative;
`;

export const DoneTodo = styled.div`
  margin: 0.625rem;
  background-size: 80%;
  background-color: #3a8bfe;
  display: flex;
  flex-direction: column;
  width: 35%;
  height: 31.25rem;
  padding: 1.875rem;
  border-radius: 1.25rem;
  align-self: stretch;
  overflow: hidden;
  position: relative;
`;

export const AddTodoBtn = styled.button`
  width: 50px;
  height: 30px;
  cursor: pointer;
  border: 1px solid black;
  border-radius: 0.3rem;
`;
