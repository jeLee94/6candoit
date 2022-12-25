import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux/';
import { Link, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { auth, imgStorage } from '../../firebase';
import { ref, uploadString, getDownloadURL } from 'firebase/storage';
// import google from './google.png';
import * as S from './MyPageStyle';
import * as P from '../../components/Layout/Container/PostsContainerStyle';
import {
  __getUser,
  __addUser,
  __deleteUser,
  __updateUser,
} from '../../redux/modules/userSlice';
import blankProfile from '../../images/blankProfile.webp';
import { updateProfile } from 'firebase/auth';

function MyPage() {
  //이메일 회원가입용 state
  const [attachment, setAttachment] = useState();
  //회원가입, 로그인 토글용
  const [isRegistered, setIsRegistered] = useState(true);
  const [nickName, setNickName] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const [imgDownloadUrl, setImagDownloadUrl] = useState(null);

  // console.log(user);
  // Todo 회원가입 완료 시 alert 뜨고 3초 후에 로그인으로 넘어가도록 수정
  // Todo2 로그인 ↔ 회원가입 왔다갔다 할 때 input창 데이터 안지워지는 부분 수정
  // Todo3 메인, 디테일 페이지에서 로그인 정보 보여주기 세션?쿠키?
  // Todo4 마이페이지 구현(닉네임 수정)
  useEffect(() => {
    dispatch(__getUser());
  }, [dispatch]);

  const nickChange = async (event) => {
    setNickName(event.currentTarget.value);
  };
  const fileChange = async (event) => {
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
      const profileURL = finishedEvent.currentTarget.result;
      localStorage.setItem('profileURL', profileURL);
    };
  };

  const storeImg = async () => {
    if (attachment !== '') {
      const imgRef = ref(
        imgStorage,
        `${auth.currentUser.uid}/profileUrl/${uuidv4()}/` //마지막데이터가져오게하려면?
      );
      const profileURL = localStorage.getItem('profileURL');
      const response = await uploadString(imgRef, profileURL, 'data_url');
      const tempUrl = await getDownloadURL(response.ref);
      setImagDownloadUrl(tempUrl);

      console.log('1', imgDownloadUrl);

      let EditedUser = {
        id: user[0].id,
        email: user[0].email,
        photoURL: profileURL,
      };
      dispatch(__updateUser(EditedUser));
      await updateProfile(auth.currentUser, {
        displayName: nickName,
        photoURL: tempUrl,
      });
    }
    alert('프로필 변경 완료!');
  };

  return (
    <S.Outer>
      <Link to={'/'}>돌아가기</Link>
      <S.Align>
        {/* 로그인영역 isRegistered => styled 컴포넌트에 props 전달 */}
        <S.Login isRegistered={isRegistered}>
          <h2>로그인</h2>

          <S.Form
            onSubmit={(e) => {
              e.preventDefault();
              storeImg();
            }}

            // handleLogin();
            // e.target[0].value = ''; //제출시 input창 초기화
            // e.target[1].value = ''; //제출시 input창 초기화
          >
            {user.length > 0 && (
              <S.Align style={{ gap: 10 }}>
                <div>
                  {!attachment && (
                    <label htmlFor='imgInput'>
                      <P.ProfileImg
                        id='profileView'
                        src={auth.currentUser.photoURL || blankProfile}
                      />
                    </label>
                  )}
                </div>
                <label htmlFor='imgInput'></label>
                <P.ProfileImgInput
                  id='imgInput'
                  type='file'
                  accept='image/*'
                  onChange={fileChange}
                  style={{ display: 'none' }}
                />
                {attachment && <P.ProfileImg src={attachment} />}
                <div>
                  <span>이메일 </span>
                  <S.Input
                    type='email'
                    placeholder={user[0].email}
                    disabled={true}
                    // value={user[0].id}
                  />
                </div>
                <div>
                  <span>닉네임 </span>
                  <S.Input
                    type='text'
                    placeholder={auth.currentUser.displayName || '닉네임'}
                    onChange={nickChange}
                  />
                </div>
                <input style={{ width: 100, height: 30 }} type='submit' />
              </S.Align>
            )}
          </S.Form>
        </S.Login>
      </S.Align>
    </S.Outer>
  );
}

export default MyPage;
