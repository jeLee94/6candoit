import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  __deleteComment,
  __updateComment,
} from '../../../redux/modules/comments';
import * as S from './CommentContainerStyle';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
// import {
//   __deleteComment,
//   __deleteAllComment,
//   __getComment,
// } from '../../redux/modules/comments';

const CommentContainer = ({ comment }) => {
  const dispatch = useDispatch();
  dayjs.extend(relativeTime);
  const createdTime = dayjs(comment.created_at).fromNow();
  const DeleteComment = () => {
    dispatch(__deleteComment(comment.id));
  };

  return (
    <S.CommentWrap>
      <S.ContentsWrap>
        <S.CreatedAtWrap>{createdTime}</S.CreatedAtWrap>
        {/* <S.UserImgView src={post?.imgUrl} /> */}
        <S.UserNameWrap>{comment.userName}</S.UserNameWrap>
        <S.TitleWrap>{comment.title}</S.TitleWrap>
        <S.ContentWrap>{comment.content}</S.ContentWrap>
        <S.ButtonWrap>
          <S.CusttomButton onClick={DeleteComment}>삭제</S.CusttomButton>
        </S.ButtonWrap>
      </S.ContentsWrap>
    </S.CommentWrap>
  );
};

export default CommentContainer;
