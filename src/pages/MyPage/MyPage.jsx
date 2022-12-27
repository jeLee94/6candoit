import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux/';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { auth, imgStorage } from '../../firebase';
import { ref, uploadString, getDownloadURL } from 'firebase/storage';
import * as S from './MyPageStyle';
import Profile from './Profile.png';
import { __getUser, __updateUser } from '../../redux/modules/userSlice';
import blankProfile from '../../images/blankProfile.webp';
import { updateProfile } from 'firebase/auth';
import CustomButton from '../../components/Tools/CustomButton';
import { __updateUserList } from '../../redux/modules/allUserListSlice';

function MyPage() {
  const [attachment, setAttachment] = useState();
  const [nickName, setNickName] = useState('');
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

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

      let EditedUser = {
        id: user[0].id,
        email: user[0].email,
        photoURL: tempUrl,
        displayName: nickName,
      };
      dispatch(__updateUser(EditedUser));
      dispatch(__updateUserList(EditedUser));
      await updateProfile(auth.currentUser, {
        displayName: nickName,
        photoURL: tempUrl,
      });
    }
    alert('프로필 변경 완료!');
  };

  return (
    <S.LoginWrapper>
      <img
        alt='이미지'
        src={Profile}
        style={{ width: '40%', margin: '200px 50px 200px 100px' }}
      ></img>
      <S.Outer>
        <Link
          style={{
            marginBottom: '15px',
            textDecoration: 'none',
            color: 'black',
            fontWeight: 'bold',
          }}
          to={'/'}
        >
          돌아가기
        </Link>
        <S.Align>
          <S.Box>
            <S.Form
              onSubmit={(e) => {
                e.preventDefault();
                storeImg();
              }}
            >
              {auth.currentUser && (
                <S.Align style={{ gap: 10 }}>
                  <div>
                    {!attachment && (
                      <label htmlFor='imgInput'>
                        <S.ProfileImg
                          id='profileView'
                          src={auth.currentUser.photoURL || blankProfile}
                        />
                      </label>
                    )}
                  </div>
                  <label htmlFor='imgInput'></label>
                  <S.ProfileImgInput
                    id='imgInput'
                    type='file'
                    accept='image/*'
                    onChange={fileChange}
                    style={{ display: 'none' }}
                  />
                  {attachment && <S.ProfileImg src={attachment} />}
                  <div>
                    <p>이메일</p>
                    <S.Input
                      type='email'
                      placeholder={user[0].email}
                      disabled={true}
                    />
                  </div>
                  <div>
                    <p>닉네임</p>
                    <S.Input
                      type='text'
                      placeholder={auth.currentUser.displayName || '닉네임'}
                      onChange={nickChange}
                    />
                  </div>
                  <CustomButton type='submit'>프로필 수정</CustomButton>
                </S.Align>
              )}
            </S.Form>
          </S.Box>
        </S.Align>
      </S.Outer>
    </S.LoginWrapper>
  );
}

export default MyPage;
