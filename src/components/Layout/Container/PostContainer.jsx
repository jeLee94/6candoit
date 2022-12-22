import React from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  __deletePost,
  __updatePost,
  // togglePost,
  __togglePost,
} from '../../../redux/modules/posts';
// import {
//   __deleteComment,
//   __deleteAllComment,
//   __getComment,
// } from '../../redux/modules/comments';

const PostContainer = ({ post }) => {
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
    // console.log(dispatch(togglePost(post.id))); //동기적으로는 구현완료
  };

  // const EditPost = () => {
  //   navigate('/editform', {
  //     state: post,
  //   });
  // };

  return (
    <CommentWrap>
      <ContentsWrap>
        <TitleWrap>{post.title}</TitleWrap>
        <div>{post.content}</div>
        <ButtonWrap>
          <CusttomButton>
            <Link to={`/${post.id}`}>보기</Link>
          </CusttomButton>
          <CusttomButton onClick={DeletePost}>삭제</CusttomButton>
          <CusttomButton onClick={togglePostHandler}>
            {post.isDone ? '진행중' : '완료'}
          </CusttomButton>
        </ButtonWrap>
      </ContentsWrap>
    </CommentWrap>
  );
};

const CommentWrap = styled.div`
  width: 200px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  border: 1px solid #2a2a2a;
`;

const ContentsWrap = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;

const TitleWrap = styled(ContentsWrap)`
  width: 80px;
  justify-content: center;
`;

const ButtonWrap = styled(ContentsWrap)`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;

const CusttomButton = styled.button`
  width: 50px;
  height: 30px;
  cursor: pointer;
  border: 1px solid #eee;
`;

export default PostContainer;
