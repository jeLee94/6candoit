import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { SideBar } from '../../components/Layout/Sidebar/SidebarStyle';
import CustomButton from '../../components/Tools/CustomButton';
// import CustomInput from '../../components/Tools/CustomInput';
import {
  __getPost,
  __deletePost,
  __updatePost,
} from '../../redux/modules/posts';
import * as S from './DetailPageStyle';
// import CommentAddForm from './CommentAddForm';
// import CommentsContainer from './CommentsContainer';
// import { __getComment } from '../../../redux/modules/comments';

const DetailPage = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);
  // console.log('post 값: ', posts);
  const param = useParams();
  const post = posts.find((post) => post.id === param.id);

  const [title, setTitle] = useState(post?.title);
  const [content, setContent] = useState(post?.content);
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    // dispatch(__getComment());
    dispatch(__getPost());
  }, [dispatch]);

  const DeletePost = () => {
    // console.log('클릭!');
    // dispatch(__deleteAllComment(post.id));
    dispatch(__deletePost(post.id));
  };

  const changeTitle = (event) => {
    setTitle(event.target.value);
  };

  const changeContent = (event) => {
    setContent(event.target.value);
  };

  const updateTodoHandler = (event) => {
    event.preventDefault();
    // console.log('클릭');
    setEdit(!edit);

    // dispatch(__updatePost(post));
    // if (title.length !== 0 && content.length !== 0) {
    // }
  };

  useEffect(() => {
    if (posts.length < 1) {
      return;
    }
    const post = posts.find((post) => post.id === param.id);
    // console.log('posts: ', posts);
    setTitle(post.title);
    setContent(post.content);
    console.log(post.title, post.content);
  }, [posts]);

  return (
    <>
      <SideBar />
      <S.PostpageWrap>
        <S.PostWrap>
          {/* {post?.title} */}
          {/* {post?.content} */}
          <S.UserSection>{post?.id}</S.UserSection>
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
                <input
                  id='content-input2'
                  value={content}
                  placeholder='내용을 입력해주세요'
                  onChange={changeContent}
                />
              </form>
            ) : (
              post?.content
            )}
          </S.ContentSection>
          <S.ButtonSection>
            {edit ? (
              <button form='editInput' onClick={updateTodoHandler}>
                수정완료
              </button>
            ) : (
              <button onClick={updateTodoHandler}>수정</button>
            )}
            <CustomButton onClick={DeletePost}>삭제</CustomButton>
          </S.ButtonSection>

          <div className='button-layout'>
            <button
              onClick={() => {
                if (title && content) {
                  setEdit(!edit);
                }
              }}
            >
              {edit ? '수정취소' : '수정'}
            </button>
          </div>

          <button>댓글작성</button>
          <Link to={`/`}>
            <span>돌아가기</span>
          </Link>
        </S.PostWrap>
        {/* <CommentAddForm post_id={post?.id}></CommentAddForm> */}
        {/* <CommentsContainer post_id={post?.id}></CommentsContainer> */}
      </S.PostpageWrap>
    </>
  );
};

export default DetailPage;
