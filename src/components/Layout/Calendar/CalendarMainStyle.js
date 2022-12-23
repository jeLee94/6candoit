import styled from "styled-components";

export const dot = styled.div`
  height: 0.5rem;
  width: 0.5rem;
  background-color: #f87171;
  border-radius: 50%;
  display: flex;
  margin-left: 0.0625rem;
`;

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
