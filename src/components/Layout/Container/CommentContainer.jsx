import React, { useState, useEffect } from 'react';
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
  const [commentEdit, setCommentEdit] = useState(false);
  const [commentContent, setCommentContent] = useState('');

  const DeleteComment = () => {
    dispatch(__deleteComment(comment.id));
  };

  const changeCommentContent = (event) => {
    setCommentContent(event.target.value);
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

  useEffect(() => {
    setCommentContent(comment.commentContent);
  }, [comment]);

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
    </S.CommentWrap>
  );
};

export default CommentContainer;
