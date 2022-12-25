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
  background: linear-gradient(to bottom right, #3a8bfe, #2bddff);
  display: flex;
  flex-direction: column;
  width: 35%;
  height: 600px;
  padding: 1.875rem;
  border-radius: 20px;
  align-self: stretch;
  overflow: hidden;
  position: relative;
  box-shadow: 1px 1px 40px -15px rgba(108, 169, 255, 1);
  -webkit-box-shadow: 1px 1px 40px -15px rgba(108, 169, 255, 1);
  -moz-box-shadow: 1px 1px 40px -15px rgba(108, 169, 255, 1);
`;

export const DoingTodo = styled.div`
  margin: 0.625rem;
  background-size: 80%;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  width: 35%;
  height: 600px;
  padding: 1.875rem;
  border-radius: 20px;
  align-self: stretch;
  /* overflow: hidden; */
  overflow: auto;
  position: relative;
  font-size: 1.5rem;
  box-shadow: 1px 1px 40px -15px rgba(108, 169, 255, 1);
  -webkit-box-shadow: 1px 1px 40px -15px rgba(108, 169, 255, 1);
  -moz-box-shadow: 1px 1px 40px -15px rgba(108, 169, 255, 1);
`;

export const DoneTodo = styled.div`
  margin: 0.625rem;
  background-size: 80%;
  background-color: #eff2f7;
  display: flex;
  flex-direction: column;
  width: 35%;
  height: 600px;
  padding: 1.875rem;
  border-radius: 20px;
  align-self: stretch;
  /* overflow: hidden; */
  overflow: auto;
  position: relative;
  font-size: 1.5rem;
  box-shadow: 1px 1px 40px -15px rgba(108, 169, 255, 1);
  -webkit-box-shadow: 1px 1px 40px -15px rgba(108, 169, 255, 1);
  -moz-box-shadow: 1px 1px 40px -15px rgba(108, 169, 255, 1);
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

export const DoneTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 50px;
  color: #696969;
`;

export const WriteTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 50px;
  color: white;
  text-shadow: 2px 2px 2px #1a5ab5;
`;
