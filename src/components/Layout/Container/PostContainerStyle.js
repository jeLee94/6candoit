import styled from 'styled-components';

export const CommentWrap = styled.div`
  width: 200px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  border: 1px solid #2a2a2a;
`;

export const ContentsWrap = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;

export const TitleWrap = styled(ContentsWrap)`
  width: 80px;
  justify-content: center;
`;

export const ButtonWrap = styled(ContentsWrap)`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;

export const CusttomButton = styled.button`
  width: 50px;
  height: 30px;
  cursor: pointer;
  border: 1px solid #eee;
`;
