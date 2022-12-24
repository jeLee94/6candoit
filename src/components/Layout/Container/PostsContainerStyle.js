import styled from 'styled-components';

export const CommentsWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const Form = styled.form`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const UserInput = styled.input`
  border: 1px solid #eee;
  width: 100%;
  border-radius: 0.3rem;
  outline: none;
  padding: 0 10px;
`;

export const TitleInput = styled.input`
  border: 1px solid #eee;
  width: 100%;
  border-radius: 0.3rem;
  outline: none;
  padding: 0 10px;
`;

export const ContentInput = styled.textarea`
  border: 1px solid #eee;
  width: 100%;
  border-radius: 0.3rem;
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
  border-radius: 0.7rem;
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
  border-radius: 0.7rem;
  align-self: stretch;
  /* overflow: hidden; */
  overflow: auto;
  position: relative;
  font-size: 1.5rem;
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
  border-radius: 0.7rem;
  align-self: stretch;
  /* overflow: hidden; */
  overflow: auto;
  position: relative;
  font-size: 1.5rem;
`;

export const AddTodoBtn = styled.button`
  width: 50px;
  height: 30px;
  cursor: pointer;
  border: 1px solid black;
  border-radius: 0.3rem;
  /* font-size: 0.5rem; */
`;

export const ProfileImg = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  cursor: pointer;
`;

export const ProfileImgInput = styled.input`
  display: none;
`;
