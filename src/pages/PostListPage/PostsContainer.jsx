import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PostContainer from './PostContainer';
import CustomButton from '../../components/Tools/CustomButton';
import { useDispatch, useSelector } from 'react-redux';
import { __addPost, __getPost } from '../../redux/modules/posts';
import uuid from 'react-uuid';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isDone, setIsDone] = useState('');
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
    <CommentsWrap>
      <AddWrap>
        <Form onSubmit={onSubmitHandler}>
          <label>
            제목
            <TitleInput
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
            <ContentInput
              type='text'
              value={content}
              onChange={(e) => {
                setContent(e.target.value);
              }}
            />
          </label>
          <CustomButton>추가</CustomButton>
        </Form>
      </AddWrap>
      <DoingTodo>
        {posts
          .filter((post) => post.isDone === false)
          .map((post) => {
            return <PostContainer key={post.id} post={post}></PostContainer>;
          })}
      </DoingTodo>
      <DoneTodo>
        {posts
          .filter((post) => post.isDone === true)
          .map((post) => {
            return <PostContainer key={post.id} post={post}></PostContainer>;
          })}
      </DoneTodo>
    </CommentsWrap>
  );
};

export default MainPage;

const CommentsWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 2rem;
`;

const AddWrap = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const TitleInput = styled.input`
  border: 1px solid #eee;
  margin-top: 50px;
  height: 25px;
  width: 100%;
  border-radius: 12px;
  outline: none;
  padding: 0 10px;
`;

const ContentInput = styled.input`
  border: 1px solid #eee;
  margin-top: 50px;
  height: 500px;
  width: 100%;
  border-radius: 12px;
  outline: none;
  padding: 0 10px;
`;

const DoingTodo = styled.div`
  width: 35%;
  max-height: 700px;
  display: flex;
  /* flex-direction: row; */
  flex-wrap: wrap;
  overflow: auto;
`;

const DoneTodo = styled.div`
  width: 35%;
  max-height: 700px;
  display: flex;
  /* flex-direction: row; */
  flex-wrap: wrap;
  overflow: auto;
`;
