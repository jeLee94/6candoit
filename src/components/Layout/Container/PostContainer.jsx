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
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
// import {
//   __deleteComment,
//   __deleteAllComment,
//   __getComment,
// } from '../../redux/modules/comments';

const PostContainer = ({ post }) => {
  const dispatch = useDispatch();
  dayjs.extend(relativeTime);
  const createdTime = dayjs(post.created_at).fromNow();

  const DeletePost = () => {
    dispatch(__deletePost(post.id));
  };

  const togglePostHandler = () => {
    // event.preventDefault();
    dispatch(__togglePost(post));
    // console.log(dispatch(togglePost(post.id))); //동기적 기능 구현완료
  };

  return (
    <S.CommentWrap>
      <S.ContentsWrap>
        <S.CreatedAtWrap>{createdTime}</S.CreatedAtWrap>
        {/* <S.UserNameWrap>{post.userName}</S.UserNameWrap> */}
        <S.TitleWrap>{post.title}</S.TitleWrap>
        <S.ContentWrap>{post.content}</S.ContentWrap>
        <S.ButtonWrap>
          <S.CusttomButton>
            <Link to={`/${post.id}`}>상세보기</Link>
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
