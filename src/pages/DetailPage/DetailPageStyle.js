import { Children } from "react";
import styled from "styled-components";

export const PostpageWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
`;

export const PostWrap = styled.div`
  width: 100%;
  height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const ContentsWrap = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const UserSection = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  border-radius: 0.5rem;
  gap: 20px;
`;

export const TitleSection = styled.div`
  input {
    width: 500px;
    height: 32px;
    font-size: 15px;
    border: 0;
    border-radius: 15px;
    outline: none;
    padding-left: 10px;
    background-color: rgb(233, 233, 233);
  }
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  gap: 20px;
  background: rgb(58, 139, 254);
  background: linear-gradient(
    90deg,
    rgba(58, 139, 254, 1) 0%,
    rgba(43, 221, 255, 1) 100%
  );
  box-shadow: 1px 1px 40px -15px rgba(108, 169, 255, 1);
  -webkit-box-shadow: 1px 1px 40px -15px rgba(108, 169, 255, 1);
  -moz-box-shadow: 1px 1px 40px -15px rgba(108, 169, 255, 1);
`;

export const ContentSection = styled.div`
  input {
    width: 500px;
    height: 32px;
    font-size: 15px;
    border: 0;
    border-radius: 15px;
    outline: none;
    padding-left: 10px;
    background-color: rgb(233, 233, 233);
  }
  width: 100%;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 20px;
  gap: 20px;
  box-shadow: 1px 1px 40px -15px rgba(108, 169, 255, 1);
  -webkit-box-shadow: 1px 1px 40px -15px rgba(108, 169, 255, 1);
  -moz-box-shadow: 1px 1px 40px -15px rgba(108, 169, 255, 1);
`;

export const CommentSection = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 20px;
  gap: 20px;
  box-shadow: 1px 1px 40px -15px rgba(108, 169, 255, 1);
  -webkit-box-shadow: 1px 1px 40px -15px rgba(108, 169, 255, 1);
  -moz-box-shadow: 1px 1px 40px -15px rgba(108, 169, 255, 1);
`;

export const ButtonSection = styled.div`
  /* background-color: green; */
  width: 70%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const EditBtn = styled.button`
  width: 50px;
  height: 30px;
  cursor: pointer;
  border: 1px solid black;
  border-radius: 0.3rem;
`;

// EditCompleteBtn.defaultProps = {
//   disabled: false,
// };

// export const EditCompleteButton = ({ disabled }) => {
//     if()
//   return <EditCompleteBtn disabled={disabled}>수정완료</EditCompleteBtn>;
// };

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
`;
