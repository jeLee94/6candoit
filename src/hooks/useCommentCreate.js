import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import dayjs from 'dayjs';
import uuid from 'react-uuid';
import { __addComment } from '../redux/modules/comments';

export const useCommentCreate = (initialValue) => {
  const dispatch = useDispatch();
  const param = useParams();
  const { posts } = useSelector((state) => state.posts);
  const { user } = useSelector((state) => state.user);
  const [commentContent, setCommentContent] = useState(initialValue);
  const post = posts.find((post) => post.id === param.id);

  const changeCommentContent = (e) => {
    // e.preventDefault();
    setCommentContent(e.target.value);
  };
  //task 추가 버튼
  const onCommentSubmitHandler = (e) => {
    e.preventDefault();
    if (commentContent === '') return; // 아무것도 입력하지 않았을 때 dispatch 하지 않음
    user.length > 0 //로그인 해야만 디스패치 되도록 조건 처리
      ? dispatch(
          __addComment({
            userName: user[0].email.split('@')[0],
            parentId: post.id,
            created_at: dayjs().format('YYYY.MM.DD HH:mm:ss'),
            id: uuid(),
            creator: user[0].id,
            commentContent,
          })
        )
      : alert('로그인해주세요');

    setCommentContent('');
    // navigate('/');
  };
  return [commentContent, changeCommentContent, onCommentSubmitHandler];
};
