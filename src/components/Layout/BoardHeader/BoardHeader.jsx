import React, { useState } from 'react';
import * as S from './BoardHeaderStyle';

import PostsContainer from '../Container/PostsContainer';
import { auth } from '../../../firebase';
import { Link } from 'react-router-dom';

export default function BoardHeader() {
  const userName = auth.currentUser
    ? auth.currentUser.displayName ?? auth.currentUser.email
    : 'Visitor';

  return (
    <>
      <S.Wrapper>
        <S.MainContainer>
          <S.Header>
            <h2>
              {userName}
              님의 Board
            </h2>
            <h2>{/* <Link to={'/'}>+ Board에 초대하기</Link> */}</h2>
          </S.Header>
          <PostsContainer />
        </S.MainContainer>
      </S.Wrapper>
    </>
  );
}
