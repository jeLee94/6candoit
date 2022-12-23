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
  const [user, setUser] = useState('anonymous');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  // const [isDone, setIsDone] = useState('');
  const navigate = useNavigate();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (title === '' || content === '') return; // 아무것도 입력하지 않았을 때 dispatch 하지 않음

    let NewData = {
      id: uuid(),
      title,
      content,
      isDone: false,
    };

    dispatch(__addPost(NewData));
    setTitle('');
    setContent('');

    navigate('/');
  };

  useEffect(() => {
    dispatch(__getPost());
  }, [dispatch]);

  const { posts } = useSelector((state) => state.posts);

  return (
    <S.CommentsWrap>
      <S.AddWrap>
        <S.Form onSubmit={onSubmitHandler}>
          <label>
            작성자
            <S.UserInput
              className='user-name'
              type='text'
              value={user}
              onChange={(e) => {
                setUser(e.target.value);
              }}
            />
          </label>
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
            ></S.ContentInput>
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
        {posts
          .filter((post) => post.isDone === false)
          .map((post) => {
            return <PostContainer key={post.id} post={post}></PostContainer>;
          })}
      </S.DoingTodo>
      <S.DoneTodo>
        <div>Done</div>
        {posts
          .filter((post) => post.isDone === true)
          .map((post) => {
            return <PostContainer key={post.id} post={post}></PostContainer>;
          })}
      </S.DoneTodo>
    </S.CommentsWrap>
  );
};

export default PostsContainer;
