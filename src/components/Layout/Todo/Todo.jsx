import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './TodoStyle';
import { useSelector } from 'react-redux';
import PostsContainer from '../Container/PostsContainer';
// import Todo from '../../Todo/Todo';

export default function Todo() {
  const { user } = useSelector((state) => state.user);
  const userName = user[0]?.email.split('@')[0];

  return (
    <>
      <S.Wrapper>
        <S.MainContainer>
          <S.Header>
            <h2>{userName || 'Visitor'}'s TodoList</h2>
          </S.Header>
          <PostsContainer />
        </S.MainContainer>
      </S.Wrapper>
    </>
  );
}
