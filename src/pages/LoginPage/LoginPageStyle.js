import styled from 'styled-components';

export const Outer = styled.div`
  width: 40rem;
  height: 30rem;
  display: flex;
  flex-direction: column;
  margin: 10% auto;
  border: 1px solid gray;
  border-radius: 10px;
  box-shadow: 10px 5px 5px 3px gray;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  height: 2rem;
  width: 20rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const Align = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Login = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: ${({ isRegistered }) => {
    return isRegistered ? 'flex' : 'none';
  }};
`;

export const Register = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: ${({ isRegistered }) => {
    return isRegistered ? 'none' : 'flex';
  }};
`;
