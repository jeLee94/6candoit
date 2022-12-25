import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams, useNavigate } from 'react-router-dom';
// import Sidebar from '../../components/Layout/Sidebar/Sidebar';
import uuid from 'react-uuid';
// import CustomButton from '../../components/Tools/CustomButton';
import {
  __getPost,
  __deletePost,
  __updatePost,

} from '../../redux/modules/posts';
import { __addComment, __getComment } from '../../redux/modules/comments';
import dayjs from 'dayjs';
import * as S from './DetailPageStyle';
import CommentContainer from '../../components/Layout/Container/CommentContainer';

// import CommentAddForm from './CommentAddForm';
// import CommentsContainer from './CommentsContainer';
// import { __getComment } from '../../../redux/modules/comments';

const DetailPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { posts } = useSelector((state) => state.posts);
  const comments = useSelector((state) => state?.comments);
  const { user } = useSelector((state) => state.user);
  // console.log('post 값: ', posts);
  const param = useParams();
  const post = posts.find((post) => post.id === param.id);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [edit, setEdit] = useState(false);
  const [commentContent, setCommentContent] = useState('');
  const [commentWindow, setCommentWindow] = useState(false);
  const [comment, setComment] = useState('');

  const DeletePost = () => {
    dispatch(__deletePost(post.id));
    navigate('/');
  };

  const updateTodoHandler = (event) => {
    event.preventDefault();

    let EditedPost = {
      id: post.id,
      title,
      content,
      isDone: post.isDone,
    };

    setEdit(!edit);
    dispatch(__updatePost(EditedPost));
  };

  const changeTitle = (event) => {
    setTitle(event.target.value);
  };

  const changeContent = (event) => {
    setContent(event.target.value);
  };

  const changeComment = (event) => {
    setComment(event.target.value);
  };

  console.log('댓글: ', comments);
  //task 추가 버튼
  const onCommentSubmitHandler = (e) => {
    console.log('댓글등록 클릭!');
    e.preventDefault();
    if (commentContent === '') return; // 아무것도 입력하지 않았을 때 dispatch 하지 않음
    // console.log('imgUrl값은?', imgUrl);

    user.length > 0 //로그인 해야만 디스패치 되도록 조건 처리
      ? dispatch(
          __addComment({
            // userName: user[0].email.split('@')[0],
            created_at: dayjs().format('YYYY.MM.DD HH:mm:ss'),
            id: uuid(),
            commentContent,
            // imgUrl: imgDownloadUrl ?? blankProfile,
          })
        )
      : alert('로그인해주세요');

    setCommentContent('');
    // navigate('/');
  };

  useEffect(() => {
    dispatch(__getPost());
  }, [dispatch]);

  // console.log('posts: ', posts);
  // useEffect(() => {
  //   if (comments.length < 1) {
  //     return;
  //   }
  //   setCommentContent(comment);
  // }, [comments]);

  useEffect(() => {
    // console.log('ㅇㅇㅇ');
    // dispatch(__getComment());
    dispatch(__getComment());
  }, [dispatch]);

  useEffect(() => {
    if (posts.length < 1) {
      return;
    }
    // const post = posts.find((post) => post.id === param.id);
    setTitle(post.title);
    setContent(post.content);
  }, [post]);

  return (
    <>
      <S.Wrapper>
        <S.MainContainer>
          <S.Header>
            <h2>Detail</h2>
          </S.Header>
          <S.PostpageWrap>
            <S.PostWrap>
              {/* {post?.title} */}
              {/* {post?.content} */}
              <S.TitleSection>
                {edit ? (
                  <form id='editInput' onSubmit={updateTodoHandler}>
                    <input
                      id='title-input2'
                      value={title}
                      placeholder='제목을 입력해주세요'
                      onChange={changeTitle}
                    />
                  </form>
                ) : (
                  post?.title
                )}
              </S.TitleSection>
              <S.ContentSection>
                {edit ? (
                  <form id='editInput' onSubmit={updateTodoHandler}>
                    <textarea
                      id='content-input2'
                      value={content}
                      placeholder='내용을 입력해주세요'
                      onChange={changeContent}
                    ></textarea>
                  </form>
                ) : (
                  post?.content
                )}
                {edit && (
                  <S.EditBtn
                    id='edit-complete'
                    form='editInput'
                    onClick={updateTodoHandler}
                    disabled={title === '' || content === '' ? true : false}
                  >
                    수정완료
                  </S.EditBtn>
                )}
                <S.EditBtn
                  onClick={() => {
                    setEdit(!edit);
                  }}
                >
                  {edit ? '수정취소' : '수정'}
                </S.EditBtn>
                <S.EditBtn onClick={DeletePost}>삭제</S.EditBtn>
              </S.ContentSection>
              {/* <S.ButtonSection></S.ButtonSection> */}
              <S.CommentSection>
                댓글이 보여지는 영역
                {/* {user.length > 0 && ( //로그인 했을 때만 보이도록
                  <div>
                    {comments.map((comment) => {
                      return (
                        <CommentContainer
                          key={comment.id}
                          comment={comment}
                        ></CommentContainer>
                      );
                    })}
                  </div>
                )} */}
              </S.CommentSection>
              <S.EditBtn
                onClick={() => {
                  setCommentWindow(!commentWindow);
                }}
              >
                댓글작성
              </S.EditBtn>
              <Link to='/'>
                <span>메인으로</span>
              </Link>
              {/* {commentWindow && (
                <div>
                  <input
                    id='comment-input'
                    value={comment}
                    placeholder='댓글 내용을 입력해주세요'
                    onChange={changeComment}
                  ></input>
                  <button onClick={onCommentSubmitHandler}>등록</button>
                </div>
              )} */}
            </S.PostWrap>
            {/* <CommentAddForm post_id={post?.id}></CommentAddForm> */}
            {/* <CommentsContainer post_id={post?.id}></CommentsContainer> */}
          </S.PostpageWrap>
        </S.MainContainer>
      </S.Wrapper>
    </>
  );
};

export default DetailPage;
