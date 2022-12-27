import React from 'react';
import * as S from './BoardHeaderStyle';
import { useSelector } from 'react-redux';
import PostsContainer from '../Container/PostsContainer';
import { Link } from 'react-router-dom';
import { auth } from '../../../firebase';
export default function BoardHeader() {
  const { user } = useSelector((state) => state.user);

  return (
    <>
      <S.Wrapper>
        <S.MainContainer>
          <S.Header>
            <h2>
              {user.length > 0
                ? auth.currentUser?.displayName || user[0].email
                : 'Visitor'}
              님의 Board
            </h2>

            <h2>
              {user.length > 0 && (
                <Link
                  style={{
                    textDecoration: 'none',
                    color: 'black',
                  }}
                  to={'/invite'}
                >
                  + Board에 초대하기
                </Link>
              )}
            </h2>
          </S.Header>
          <PostsContainer />
        </S.MainContainer>
      </S.Wrapper>
    </>
  );
}
