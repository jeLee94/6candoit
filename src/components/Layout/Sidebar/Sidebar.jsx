import React, { useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import * as S from './SidebarStyle.js';
import Ellipse from './Ellipse.png';
import { signOut } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { __getUser, __deleteUser } from '../../../redux/modules/userSlice.js';
import { auth } from '../../../firebase.js';
import CustomButton from '../../Tools/CustomButton.jsx';

export default function Sidebar() {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(__getUser());
  }, [dispatch]);

  const { user } = useSelector((state) => state.user);

  const handleLogout = async () => {
    //세션 or 쿠기 삭제
    dispatch(__deleteUser(user));
    // dispatch(__getUser());
    navigate("/");
    await signOut(auth);
  };
  console.log(user[0].photoURL);
  return (
    <>
      <S.SideBar>
        <div
          style={{
            width: '100%',
            height: '80px',
            backgroundColor: 'black',
            color: 'white',
          }}
        >
          로고 영역
        </div>
        <S.SideWrapper>
          <S.ProfileWrapper>
            {/* 이미지 받아오기 */}

          <S.SideLogin>
            {user.length === 0 ? (
              <div>
                <div>환영합니다!</div>
                <Link to='/login'>Login</Link>
              </div>
            ) : (
              <div>
                <div>{user[0].email}님</div>
                <button onClick={handleLogout}>로그아웃</button>
              </div>
            )}
          </S.SideLogin>
          <S.SideTitle>MENU</S.SideTitle>
          <S.SideMenu>
            {location.pathname !== "/" && (
              <Link to="/">
                <span>Main</span>
              </Link>
            )}
            <Link to="/Calendar">
              <span>Calendar</span>
            </Link>
          </S.SideMenu>
        </S.SideWrapper>
      </S.SideBar>
    </>
  );
}
