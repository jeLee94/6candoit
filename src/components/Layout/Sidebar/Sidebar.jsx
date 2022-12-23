import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as S from './SidebarStyle.js';
import Ellipse from './Ellipse.png';
import PostsContainer from '../Container/PostsContainer';

// import Todo from '../../Todo/Todo';
export default function Sidebar() {
  const location = useLocation();
  // console.log('sidebar에서', location.pathname);

  return (
    <>
      <S.SideBar>
        {/* S.SideBar 처럼 다른 태그들도 styled-component로 변경 부탁드립니다! */}
        {/* styled-component 이름은 PascalCase 형태로 부탁드려요! */}
        <S.SideWrapper>
          <S.AppLogo src={Ellipse} />
          <S.SideLogin>
            <Link to='/login'>Login</Link>
          </S.SideLogin>
          <S.SideTitle>MENU</S.SideTitle>
          <S.SideMenu>
            {location.pathname !== '/' && (
              <Link to='/'>
                <span>Main</span>
              </Link>
            )}
            <Link to='/Calendar'>
              <span>Calendar</span>
            </Link>
          </S.SideMenu>
        </S.SideWrapper>
      </S.SideBar>
    </>
  );
}
