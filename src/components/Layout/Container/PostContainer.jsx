import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  __deletePost,
  __updatePost,
  // togglePost,
  __togglePost,
} from '../../../redux/modules/posts';
import * as S from './PostContainerStyle';
// import {
//   __deleteComment,
//   __deleteAllComment,
//   __getComment,
// } from '../../redux/modules/comments';

const PostContainer = ({ post }) => {
  // console.log(post);
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const unawareValue = useSelector((state) => state.posts.posts);
  // console.log('store값', unawareValue);
  // const { comments } = useSelector((state) => state.comments);

  const DeletePost = () => {
    // dispatch(__deleteAllComment(post.id));
    dispatch(__deletePost(post.id));
  };

  const togglePostHandler = () => {
    // event.preventDefault();
    // dispatch(__toggleStatusPost(post.id));
    dispatch(__togglePost(post));
    // console.log(dispatch(togglePost(post.id))); //동기적 기능 구현완료
  };

  // const EditPost = () => {
  //   navigate('/editform', {
  //     state: post,
  //   });
  // };

  return (
    <S.CommentWrap>
      <S.ContentsWrap>
        <S.TitleWrap>{post.title}</S.TitleWrap>
        <S.ContentWrap>{post.content}</S.ContentWrap>
        <S.ButtonWrap>
          <S.CusttomButton>
            <Link to={`/${post.id}`}>보기</Link>
          </S.CusttomButton>
          <S.CusttomButton onClick={DeletePost}>삭제</S.CusttomButton>
          <S.CusttomButton onClick={togglePostHandler}>
            {post.isDone ? '진행중' : '완료'}
          </S.CusttomButton>
        </S.ButtonWrap>
      </S.ContentsWrap>
    </S.CommentWrap>
  );
};

export default PostContainer;
