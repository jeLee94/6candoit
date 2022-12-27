import styled from "styled-components";

// export const AppLogo = styled.img`
//   width: 200px;
//   height: 200px;
//   overflow: hidden;
//   margin: 50px auto 10px auto;
// `;

export const Outer = styled.div`
  width: 50%;
  margin-right: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  height: 4rem;
  background: #f2f2f2;
  width: 400px;
  border: 0;
  margin: 0 0 15px;
  padding: 25px;
  box-sizing: border-box;
  font-size: 14px;
  border-radius: 10px;
`;

export const MyText = styled.input`
  font-size: 20px;
  margin-bottom: 10px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 400px;
`;

export const Align = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
`;

export const Register = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: ${({ isRegistered }) => {
    return isRegistered ? "none" : "flex";
  }};
`;

export const ProfileImg = styled.img`
  width: 7rem;
  height: 7rem;
  border-radius: 100%;
  object-fit: cover;
  cursor: pointer;
`;

export const LoginWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const ProfileImgInput = styled.input`
  display: none;
`;
