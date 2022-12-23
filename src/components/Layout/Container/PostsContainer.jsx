import React, { useState, useEffect } from 'react';
import PostContainer from './PostContainer';
import CustomButton from '../../Tools/CustomButton';
import { useDispatch, useSelector } from 'react-redux';
import { __addPost, __getPost } from '../../../redux/modules/posts';
import uuid from 'react-uuid';
import { useNavigate } from 'react-router-dom';
import * as S from './PostsContainerStyle';

const PostsContainer = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  // const [isDone, setIsDone] = useState('');

  const navigate = useNavigate();

  const { posts } = useSelector((state) => state.posts);
  const { user } = useSelector((state) => state.user);

  //task 추가 버튼
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (title === '' || content === '') return; // 아무것도 입력하지 않았을 때 dispatch 하지 않음

    user.length > 0 //로그인 해야만 디스패치 되도록 조건 처리
      ? dispatch(
          __addPost({
            id: uuid(),
            title,
            content,
            isDone: false,
            userId: user[0].id,
          })
        )
      : alert('로그인해주세요');
    setTitle('');
    setContent('');

    navigate('/');
  };

  useEffect(() => {
    dispatch(__getPost());
  }, [dispatch]);

  return (
    <S.CommentsWrap>
      <S.AddWrap>
        <S.Form onSubmit={onSubmitHandler}>
          <label>
            제목
            <S.TitleInput
              className='title'
              type='text'
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </label>
          <label>
            내용
            <S.ContentInput
              type='text'
              value={content}
              onChange={(e) => {
                setContent(e.target.value);
              }}
            />
          </label>
          <S.AddTodoBtn
            disabled={title === '' || content === '' ? true : false}
          >
            추가
          </S.AddTodoBtn>
        </S.Form>
      </S.AddWrap>

      <S.DoingTodo>
        <div>Doing</div>
        {user.length > 0 && ( //로그인 했을 때만 보이도록
          <div>
            {posts
              .filter(
                (post) => user[0].id === post.userId && post.isDone === false
              )
              .map((post) => {
                return (
                  <PostContainer key={post.id} post={post}></PostContainer>
                );
              })}
          </div>
        )}
      </S.DoingTodo>

      <S.DoneTodo>
        <div>Done</div>
        {user.length > 0 && ( //로그인 했을 때만 보이도록
          <div>
            {posts
              .filter(
                (post) => user[0].id === post.userId && post.isDone === true
              )
              .map((post) => {
                return (
                  <PostContainer key={post.id} post={post}></PostContainer>
                );
              })}
          </div>
        )}
      </S.DoneTodo>
    </S.CommentsWrap>
  );
};

export default PostsContainer;
