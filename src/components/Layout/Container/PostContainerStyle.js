import styled from 'styled-components';

export const CommentWrap = styled.div`
  background-color: #6ca9ff;
  margin-bottom: 1rem;
  width: 100%;
  height: 8rem;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  flex-direction: column;
  gap: 20px;
  /* border: 1px solid #2a2a2a; */
  border-radius: 0.7rem;
`;

export const ContentsWrap = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`;

export const UserNameWrap = styled.div`
  width: 90%;
  font-size: 1rem;
  justify-content: center;
`;

// export const TitleWrap = styled(ContentsWrap)`
export const TitleWrap = styled.div`
  width: 90%;
  font-size: 1rem;
  justify-content: center;
`;

export const ContentWrap = styled.div`
  width: 90%;
  font-size: 0.7rem;
  justify-content: center;
`;

// export const ButtonWrap = styled(ContentsWrap)`
export const ButtonWrap = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.2rem;
`;

export const CusttomButton = styled.button`
  width: 3rem;
  height: 1.5rem;
  cursor: pointer;
  border: 1px solid #eee;
  border-radius: 0.5rem;
  font-size: 0.7rem;
`;
