import { auth } from '../../firebase';
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux/';
import { Link, useNavigate } from 'react-router-dom';
import googleLogin from '../../images/googleLogin.png';
import googleLoginHover from '../../images/googleLoginHover.png';
import * as S from './LoginPageStyle';
import { __addUser, __updateUser } from '../../redux/modules/userSlice';
import {
  __addUserList,
  __getUserList,
} from '../../redux/modules/allUserListSlice';

function LoginPage() {
  //이메일 회원가입용 state
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  //로그인용 state
  const [LoginEmail, setLoginEmail] = useState('');
  const [LoginPassword, setLoginPassword] = useState('');
  //회원가입, 로그인 토글용
  const [isRegistered, setIsRegistered] = useState(true);
  //구글 로그인 이미지 변환용
  const [isHover, setIsHover] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  // Todo 회원가입 완료 시 alert 뜨고 3초 후에 로그인으로 넘어가도록 수정
  // Todo2 로그인 ↔ 회원가입 왔다갔다 할 때 input창 데이터 안지워지는 부분 수정
  // Todo3 메인, 디테일 페이지에서 로그인 정보 보여주기 세션?쿠키?
  // Todo4 마이페이지 구현(닉네임 수정)
  useEffect(() => {
    dispatch(__getUserList());
  }, [dispatch]);
  const { allUserList } = useSelector((state) => state.allUserList);
  // 회원가입
  const handleRegister = async () => {
    try {
      const createdUser = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      dispatch(
        __addUserList({
          id: createdUser.user.uid,
          email: createdUser.user.email,
        })
      ); // user data 설정
      alert(`${createdUser.user.email}님 안녕하세요!`);
      setIsRegistered(!isRegistered); //로그인 창으로 돌아가기
      setRegisterEmail(''); //state 초기화
      setRegisterPassword(''); // state 초기화
    } catch (err) {
      console.log(err.code);
      switch (err.code) {
        case 'auth/weak-password':
          setErrorMsg('비밀번호는 6자리 이상이어야 합니다');
          alert(errorMsg);
          break;
        case 'auth/invalid-email':
          setErrorMsg('잘못된 이메일 주소입니다');
          alert(errorMsg);
          break;
        case 'auth/email-already-in-use':
          setErrorMsg('이미 가입되어 있는 계정입니다');
          alert(errorMsg);
          break;
        default:
          setErrorMsg('예기치 않은 오류가 발생했습니다. 새로고침을 해주세요.');
          alert(errorMsg);
          break;
      }
    }
  };
  //로그인할 때 초대자도 추가하기 위해서 추가. handleLogin에서 하면 에러남
  const handleUserUpdate = async () => {
    const idList = allUserList.map((user) => user.id);
    const idx = await idList.indexOf(auth.currentUser.uid);
    console.log(idx);
    // dispatch(
    //   __updateUser({
    //     id: auth.currentUser.uid,
    //     invitedUid: allUserList[idx].invitedUid,
    //     invitedEmail: allUserList[idx].invitedEmail,
    //   })
    // );
    dispatch(
      __addUser({
        id: auth.currentUser.uid,
        email: auth.currentUser.email,
        photoURL: auth.currentUser.photoURL ?? '',
        displayName: auth.currentUser.displayName ?? '',
        invitedUid: allUserList[idx].invitedUid,
        invitedEmail: allUserList[idx].invitedEmail,
      })
    );
    alert('로그인완료!');
    navigate('/');
  };

  //로그인
  const handleLogin = async () => {
    try {
      const curUserInfo = await signInWithEmailAndPassword(
        auth,
        LoginEmail,
        LoginPassword
      );
    } catch (err) {
      // setIsAppropriate(false);
      switch (err.code) {
        case 'auth/wrong-password':
          setErrorMsg('비밀번호를 확인해 주세요.');
          alert(errorMsg);
          break;
        case 'auth/invalid-email':
          setErrorMsg('이메일 형식이 맞는지 확인해 주세요.');
          alert(errorMsg);
          break;
        case 'auth/user-not-found':
          setErrorMsg('이메일 주소를 확인해 주세요.');
          alert(errorMsg);
          break;
        default:
          setErrorMsg('예기치 않은 오류가 발생했습니다. 새로고침을 해주세요.');
          alert(errorMsg);
          break;
      }
    }
  };

  //구글 로그인
  const handleGoogleLogin = () => {
    const provider = new GoogleAuthProvider(); // provider를 구글로 설정
    signInWithPopup(auth, provider) // popup을 이용한 signup
      .then((data) => {
        dispatch(__addUser({ id: data.user.uid, email: data.user.email })); // user data 설정
        dispatch(
          __addUserList({
            id: data.user.uid,
            email: data.user.email,
          })
        );
        alert('로그인 완료!');
        navigate('/');
      })
      .catch((err) => {
        // console.log(err);s
      });
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
              handleLogin() && handleUserUpdate();
              e.target[0].value = ''; //제출시 input창 초기화
              e.target[1].value = ''; //제출시 input창 초기화
            }}
          >
            <S.Input
              type='email'
              placeholder='ID'
              onChange={(e) => {
                setLoginEmail(e.target.value);
              }}
            />
            <S.Input
              type='password'
              placeholder='PASSWORD'
              onChange={(e) => setLoginPassword(e.target.value)}
            />
            <input type='submit' value='로그인' />
          </S.Form>
          <p>
            계정이 없으세요?
            <button
              onClick={() => {
                setIsRegistered(!isRegistered);
              }}
            >
              회원가입
            </button>
            하러 가기
          </p>
        </S.Login>
        {/* 회원가입 영역 */}
        <S.Register isRegistered={isRegistered}>
          <h2>회원가입</h2>
          <S.Form
            onSubmit={(e) => {
              e.preventDefault();
              handleRegister();
              e.target[0].value = ''; //input창 초기화
              e.target[1].value = ''; //input창 초기화
            }}
          >
            <S.Input
              type='email'
              placeholder='ID'
              defaultValue=''
              onChange={(e) => setRegisterEmail(e.target.value)}
            />
            <S.Input
              type='password'
              placeholder='PASSWORD'
              defaultValue=''
              onChange={(e) => setRegisterPassword(e.target.value)}
            />
            <input type='submit' value='회원가입' />
          </S.Form>
          <button
            onClick={() => {
              setIsRegistered(!isRegistered);
            }}
          >
            로그인
          </button>
          {/* <button onClick={handleRegister}>회원가입</button> */}
        </S.Register>
      </S.Align>
      <S.Login
        isRegistered={isRegistered}
        onMouseOver={() => setIsHover(true)}
        onMouseOut={() => setIsHover(false)}
      >
        <img
          src={isHover ? googleLoginHover : googleLogin}
          onClick={handleGoogleLogin}
          alt='google logo'
          style={{ cursor: 'pointer', width: '25%', marginTop: '20px' }}
        />
      </S.Login>
    </S.Outer>
  );
}

export default LoginPage;
