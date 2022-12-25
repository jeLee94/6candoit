import React, { useState } from 'react';
import * as S from './BoardHeaderStyle';

import PostsContainer from '../Container/PostsContainer';
import { auth } from '../../../firebase';

export default function BoardHeader() {
  const userName =
    // auth.currentUser ??
    // (auth.currentUser.displayName ||
    auth.currentUser.email;
  // );

  return (
    <>
      <S.Wrapper>
        <S.MainContainer>
          <S.Header>
            <h2>{userName || 'Visitor'}님의 Board</h2>
          </S.Header>
          <PostsContainer />
        </S.MainContainer>
      </S.Wrapper>
    </>
  );
}
