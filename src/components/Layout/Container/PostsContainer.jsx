import React, { useState, useEffect } from 'react';
import PostContainer from './PostContainer';
import { useDispatch, useSelector } from 'react-redux';
import {
  __addPost,
  __getPost,
  __updatePost,
} from '../../../redux/modules/posts';
import { useNavigate } from 'react-router-dom';
import uuid from 'react-uuid';
import * as S from './PostsContainerStyle';
import dayjs from 'dayjs';
import blankProfile from '../../../images/blankProfile.webp';
import { v4 as uuidv4 } from 'uuid';
import { auth, imgStorage } from '../../../firebase';
import { ref, uploadString, getDownloadURL } from 'firebase/storage';
// import {
//   doc,
//   addDoc,
//   updateDoc,
//   deleteDoc,
//   collection,
//   orderBy,
//   query,
//   getDocs,
//   runTransaction,
// } from 'firebase/firestore';

const PostsContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { posts } = useSelector((state) => state.posts);
  const { user } = useSelector((state) => state.user);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [attachment, setAttachment] = useState();
  const [imgUrl, setImgUrl] = useState(blankProfile);
  const [imgDownloadUrl, setImagDownloadUrl] = useState(null);
  // const [imgUploaded, setImgUploaded] = useState(false);
  // const [user, setUser] = useState('anonymous');
  console.log('2', imgDownloadUrl);
  const defaultProfileImg = {
    width: '3rem',
    height: '3rem',
    borderRadius: '50%',
  };

  const fileChange = (event) => {
    // setImgUploaded(!imgUploaded);
    const {
      target: { files },
    } = event;
    const theFile = files[0];
    const reader = new FileReader();
    reader.readAsDataURL(theFile);
    reader.onloadend = (finishedEvent) => {
      const {
        currentTarget: { result },
      } = finishedEvent;
      setAttachment(result);
      const imgDataUrl = finishedEvent.currentTarget.result;
      localStorage.setItem('imgDataUrl', imgDataUrl);
    };
  };
  const clearImgClick = () => {
    setAttachment(null);
    setImagDownloadUrl(null);
    console.log(imgDownloadUrl);
    // imgDownloadUrl = await getDownloadURL(null);
  };

  const storeImg = async (event) => {
    event.preventDefault();
    // const { uid, photoURL, displayName } = auth.currentUser;
    if (attachment !== '') {
      const imgRef = ref(
        imgStorage,
        `${auth.currentUser.uid}/post_images/${uuidv4()}`
      );
      const imgDataUrl = localStorage.getItem('imgDataUrl');
      const response = await uploadString(imgRef, imgDataUrl, 'data_url');
      const tempUrl = await getDownloadURL(response.ref);
      setImagDownloadUrl(tempUrl);
      console.log('1', imgDownloadUrl);
    }
  };

  // console.log('imgUrl값은?', imgUrl);

  //task 추가 버튼
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (title === '' || content === '') return; // 아무것도 입력하지 않았을 때 dispatch 하지 않음

    user.length > 0 //로그인 해야만 디스패치 되도록 조건 처리
      ? dispatch(
          __addPost({
            userName: user[0].email.split('@')[0],
            created_at: dayjs().format('YYYY.MM.DD HH:mm:ss'),
            id: uuid(),
            title,
            content,
            isDone: false,
            userId: user[0].id,
            imgUrl: imgDownloadUrl ?? blankProfile,
          })
        )
      : alert('로그인해주세요');

    setTitle('');
    setContent('');

    navigate('/');
  };

  useEffect(() => {
    dispatch(__getPost());
  }, [dispatch]);

  // console.log('posts: ', posts);
  useEffect(() => {
    if (posts.length < 1) {
      return;
    }
    posts.map((post) => setImgUrl(post.imgUrl));
  }, [posts]);

  // console.log(auth.currentUser?.photoURL);

  return (
    <S.CommentsWrap>
      <S.AddWrap>
        <label htmlFor='imgInput'>
          <S.ProfileImg
            id='profileView'
            src={blankProfile}
            style={defaultProfileImg}
          />
        </label>
        <S.ProfileImgInput
          id='imgInput'
          type='file'
          accept='image/*'
          onChange={fileChange}
        />
        {attachment && <S.ProfileImg src={attachment} />}
        <button onClick={storeImg}>스토리지</button>
        <button onClick={clearImgClick}>Clear Img</button>
        <S.Form onSubmit={onSubmitHandler}>
          {/* {userName} */}
          <label>
            제목
            <S.TitleInput
              className='title'
              type='text'
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </label>
          <label>
            내용
            <S.ContentInput
              type='text'
              value={content}
              onChange={(e) => {
                setContent(e.target.value);
              }}
            ></S.ContentInput>
          </label>
          <S.AddTodoBtn
            disabled={title === '' || content === '' ? true : false}
          >
            추가
          </S.AddTodoBtn>
        </S.Form>
      </S.AddWrap>

      <S.DoingTodo>
        <div>Doing</div>
        {user.length > 0 && ( //로그인 했을 때만 보이도록
          <div>
            {posts
              .filter(
                (post) => user[0].id === post.userId && post.isDone === false
              )
              .map((post) => {
                return (
                  <PostContainer key={post.id} post={post}></PostContainer>
                );
              })}
          </div>
        )}
      </S.DoingTodo>

      <S.DoneTodo>
        <div>Done</div>
        {user.length > 0 && ( //로그인 했을 때만 보이도록
          <div>
            {posts
              .filter(
                (post) => user[0].id === post.userId && post.isDone === true
              )
              .map((post) => {
                return (
                  <PostContainer key={post.id} post={post}></PostContainer>
                );
              })}
          </div>
        )}
      </S.DoneTodo>
    </S.CommentsWrap>
  );
};

export default PostsContainer;
