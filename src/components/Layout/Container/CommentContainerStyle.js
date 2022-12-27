import styled from "styled-components";

export const CommentWrap = styled.div`
  width: 60rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 10px;
  border-bottom: 1px solid black;
  overflow: hidden;
`;

export const CommentTextWrap = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
`;

export const CreatedAtWrap = styled.div`
  width: 90%;
  font-size: 0.8rem;
  /* color: grey; */
  justify-content: center;
`;

// export const UserImgView = styled.img`
//   width: 3rem;
//   height: 3rem;
//   border-radius: 50%;
//   justify-content: center;
// `;

export const UserNameWrap = styled.div`
  width: 90%;
  font-size: 1rem;
  justify-content: center;
`;

export const CommentContentWrap = styled.div`
  width: 90%;
  font-size: 1rem;
  justify-content: center;
  padding-left: 0.3rem;
`;

// export const ButtonWrap = styled(ContentsWrap)`
export const ButtonWrap = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.3rem;
  justify-content: center;
`;

export const EditBtn = styled.button`
  width: 3.125rem;
  height: 1.875rem;
  cursor: pointer;
  border: 0.0625rem solid black;
  border-radius: 0.3rem;
`;

export const DeleteButton = styled.button`
  width: 3.125rem;
  height: 1.875rem;
  cursor: pointer;
  border: 0.0625rem solid black;
  border-radius: 0.3rem;
`;
