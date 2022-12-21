import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { __addPost } from '../../redux/modules/posts';
import CustomButton from '../../components/Tools/CustomButton';
import uuid from 'react-uuid';
import { useNavigate } from 'react-router-dom';

const PostAddForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isDone, setIsDone] = useState('');
  const dispatch = useDispatch();
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

  return (
    <AddWrap>
      <Form onSubmit={onSubmitHandler}>
        <TitleInput
          className='title'
          type='text'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <ContentInput
          type='text'
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
        <CustomButton>추가</CustomButton>
      </Form>
    </AddWrap>
  );
};

export default PostAddForm;

const AddWrap = styled.div`
  /* width: 100%;
  display: flex;
  flex-direction: column; */
`;

const Form = styled.form`
  /* width: 100%;
  display: flex;
  flex-direction: column; */
`;

const TitleInput = styled.input`
  /* border: 1px solid #eee;
  margin-top: 50px;
  height: 25px;
  width: 100%;
  border-radius: 12px;
  outline: none;
  padding: 0 10px; */
`;

const ContentInput = styled.input`
  /* border: 1px solid #eee;
  margin-top: 50px;
  height: 500px;
  width: 100%;
  border-radius: 12px;
  outline: none;
  padding: 0 10px; */
`;
