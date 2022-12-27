import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  __deleteComment,
  __updateComment,
} from '../../../redux/modules/comments';
import * as S from './CommentContainerStyle';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { useCommentEdit } from '../../../hooks/useCommentEdit';

const CommentContainer = ({ comment }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  dayjs.extend(relativeTime);
  const createdTime = dayjs(comment.created_at).fromNow();
  const [commentEdit, setCommentEdit] = useState(false);
  const [commentContent, changeCommentContent] = useCommentEdit('', comment);

  const DeleteComment = () => {
    dispatch(__deleteComment(comment.id));
  };

  const updateCommentHandler = (event) => {
    event.preventDefault();

    let EditedComment = {
      id: comment.id,
      commentContent,
    };

    setCommentEdit(!commentEdit);
    dispatch(__updateComment(EditedComment));
  };

  return (
    <S.CommentWrap>
      {/* <S.UserImgView src={post?.imgUrl} /> */}
      <S.CommentTextWrap>
        <S.UserNameWrap>{comment.userName}</S.UserNameWrap>
        <S.CommentContentWrap>
          {commentEdit ? (
            <form id='editInput' onSubmit={updateCommentHandler}>
              <input
                cols='40'
                rows='8'
                id='content-input2'
                value={commentContent}
                placeholder='내용을 입력해주세요'
                onChange={changeCommentContent}
              />
            </form>
          ) : (
            comment.commentContent
          )}
        </S.CommentContentWrap>
        <S.CreatedAtWrap>{createdTime}</S.CreatedAtWrap>
      </S.CommentTextWrap>
      {comment.creator === user[0].id ? (
        <S.ButtonWrap>
          {commentEdit && (
            <S.EditBtn
              id='comment-edit'
              form='commentEditInput'
              onClick={updateCommentHandler}
              disabled={comment === '' ? true : false}
            >
              수정완료
            </S.EditBtn>
          )}
          <S.EditBtn
            onClick={() => {
              setCommentEdit(!commentEdit);
            }}
          >
            {commentEdit ? '수정취소' : '수정'}
          </S.EditBtn>
          <S.DeleteButton onClick={DeleteComment}>삭제</S.DeleteButton>
        </S.ButtonWrap>
      ) : (
        <div></div>
      )}
    </S.CommentWrap>
  );
};

export default CommentContainer;
