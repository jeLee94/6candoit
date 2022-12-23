import React from "react";
import { Link } from "react-router-dom";
import * as S from "./TodoStyle";
import PostsContainer from "../Container/PostsContainer";

// import Todo from '../../Todo/Todo';

export default function Todo() {
  return (
    <>
      <S.Wrapper>
        <S.MainContainer>
          <S.Header>
            <h2>My Todos</h2>
          </S.Header>
          <PostsContainer />
        </S.MainContainer>
      </S.Wrapper>
    </>
  );
}
