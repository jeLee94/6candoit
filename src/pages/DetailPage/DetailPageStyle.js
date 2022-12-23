import { Children } from 'react';
import styled from 'styled-components';

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
  width: 70%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  border-radius: 0.5rem;
  gap: 20px;
`;

export const TitleSection = styled.div`
  width: 70%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  border-radius: 0.5rem;
  gap: 20px;
`;

export const ContentSection = styled.div`
  width: 70%;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  border-radius: 0.5rem;
  gap: 20px;
`;

export const CommentSection = styled.div`
  width: 70%;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  border-radius: 0.5rem;
  gap: 20px;
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
