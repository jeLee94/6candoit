import styled from 'styled-components';

export const PostpageWrap = styled.div`
  font-size: 1.3rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1.25rem;
`;

export const PostWrap = styled.div`
  width: 100%;
  height: 43.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;
`;

export const ContentsWrap = styled.div`
  width: 100%;
  height: 18.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;
`;

export const UserSection = styled.div`
  width: 70%;
  height: 6.25rem;

  display: flex;
  align-items: center;
  justify-content: center;
  border: 0.0625rem solid black;
  border-radius: 0.5rem;
  gap: 1.25rem;
`;

export const TitleSection = styled.div`
  input {
    width: 31.25rem;
    height: 2rem;
    font-size: 1.3rem;
    border: 0;
    border-radius: 0.9375rem;
    outline: none;
    padding-left: 0.625rem;
    background-color: rgb(233, 233, 233);
  }
  width: 100%;
  height: 18.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1.25rem;
  gap: 1.25rem;
  background: rgb(58, 139, 254);
  background: linear-gradient(
    90deg,
    rgba(58, 139, 254, 1) 0%,
    rgba(43, 221, 255, 1) 100%
  );
  box-shadow: 0.0625rem 0.0625rem 2.5rem -0.9375rem rgba(108, 169, 255, 1);
  -webkit-box-shadow: 0.0625rem 0.0625rem 2.5rem -0.9375rem rgba(108, 169, 255, 1);
  -moz-box-shadow: 0.0625rem 0.0625rem 2.5rem -0.9375rem rgba(108, 169, 255, 1);
`;

export const ContentSection = styled.div`
  textarea {
    /* width: 31.25rem; */
    height: 2rem;
    font-size: 1.3rem;
    border: 0;
    border-radius: 0.9375rem;
    outline: none;
    padding-left: 0.625rem;
    background-color: rgb(233, 233, 233);
  }

  width: 100%;
  height: 31.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 1.25rem;
  gap: 1.25rem;
  box-shadow: 0.0625rem 0.0625rem 2.5rem -0.9375rem rgba(108, 169, 255, 1);
  -webkit-box-shadow: 0.0625rem 0.0625rem 2.5rem -0.9375rem rgba(108, 169, 255, 1);
  -moz-box-shadow: 0.0625rem 0.0625rem 2.5rem -0.9375rem rgba(108, 169, 255, 1);
`;

export const CommentSection = styled.div`
  width: 100%;
  height: 31.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  overflow: auto;
  border-radius: 1.25rem;
  gap: 1.25rem;
  box-shadow: 0.0625rem 0.0625rem 2.5rem -0.9375rem rgba(108, 169, 255, 1);
  -webkit-box-shadow: 0.0625rem 0.0625rem 2.5rem -0.9375rem rgba(108, 169, 255, 1);
  -moz-box-shadow: 0.0625rem 0.0625rem 2.5rem -0.9375rem rgba(108, 169, 255, 1);
`;

export const ButtonSection = styled.div`
  /* background-color: green; */
  width: 70%;
  height: 6.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;
`;

export const EditBtn = styled.button`
  width: 3.125rem;
  height: 1.875rem;
  cursor: pointer;
  border: 0.0625rem solid black;
  border-radius: 0.3rem;
`;

export const CommentCreateBtn = styled.button`
  width: 3.125rem;
  height: 1.875rem;
  cursor: pointer;
  border: 0.0625rem solid black;
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
