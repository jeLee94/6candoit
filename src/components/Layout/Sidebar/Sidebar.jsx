import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import * as S from './SidebarStyle.js';
import Ellipse from './Ellipse.png';
import { signOut } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { __getUser, __deleteUser } from '../../../redux/modules/userSlice.js';
import { auth } from '../../../firebase.js';


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
    navigate('/');
    await signOut(auth);
  };

  return (
    <>
      <S.SideBar>
        {/* S.SideBar 처럼 다른 태그들도 styled-component로 변경 부탁드립니다! */}
        {/* styled-component 이름은 PascalCase 형태로 부탁드려요! */}
        <S.SideWrapper>
          <S.AppLogo src={Ellipse} />

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
