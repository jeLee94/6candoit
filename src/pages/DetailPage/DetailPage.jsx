import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams, useNavigate } from 'react-router-dom';
import uuid from 'react-uuid';
import {
  __getPost,
  __deletePost,
  __updatePost,
} from '../../redux/modules/posts';
import { __addComment, __getComment } from '../../redux/modules/comments';
import dayjs from 'dayjs';
import * as S from './DetailPageStyle';
import Sidebar from '../../components/Layout/Sidebar/Sidebar';
import CommentContainer from '../../components/Layout/Container/CommentContainer';

const DetailPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { posts } = useSelector((state) => state.posts);
  const { comments } = useSelector((state) => state.comments);
  const { user } = useSelector((state) => state.user);
  const param = useParams();
  const post = posts.find((post) => post.id === param.id);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [edit, setEdit] = useState(false);
  const [commentContent, setCommentContent] = useState('');
  const [commentWindow, setCommentWindow] = useState(false);

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

  useEffect(() => {
    dispatch(__getPost());
  }, [dispatch]);

  useEffect(() => {
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
      <Sidebar />
      <S.Wrapper>
        <S.MainContainer>
          <S.Header>
            <h2>Detail</h2>
          </S.Header>
          <S.PostpageWrap>
            <S.PostWrap>
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
                      cols='40'
                      rows='8'
                      id='content-input2'
                      value={content}
                      placeholder='내용을 입력해주세요'
                      onChange={changeContent}
                    ></textarea>
                  </form>
                ) : (
                  post?.content
                )}
              </S.ContentSection>
              <div>
                {post?.userId === user?.[0]?.id ? (
                  <div style={{ gap: '10px' }}>
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
                  </div>
                ) : (
                  <div></div>
                )}
              </div>

              <S.CommentSection>
                {user.length > 0 ? ( //로그인 했을 때만 보이도록
                  <div>
                    {comments
                      .filter((comment) => comment.parentId === param.id)
                      .map((comment) => {
                        return (
                          <CommentContainer
                            key={comment.id}
                            comment={comment}
                          ></CommentContainer>
                        );
                      })}
                  </div>
                ) : (
                  <div></div>
                )}
              </S.CommentSection>
              <S.CommentCreateBtn
                onClick={() => {
                  setCommentWindow(!commentWindow);
                }}
              >
                댓글작성
              </S.CommentCreateBtn>
              {commentWindow && (
                <div>
                  <input
                    id='comment-input'
                    value={commentContent}
                    placeholder='댓글 내용을 입력해주세요'
                    onChange={(e) => {
                      setCommentContent(e.target.value);
                    }}
                  ></input>
                  <button
                    onClick={onCommentSubmitHandler}
                    disabled={commentContent === '' ? true : false}
                  >
                    등록
                  </button>
                </div>
              )}
            </S.PostWrap>
          </S.PostpageWrap>
        </S.MainContainer>
      </S.Wrapper>
    </>
  );
};

export default DetailPage;
