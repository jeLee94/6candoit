import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './SidebarStyle.js';
import Ellipse from './Ellipse.png';
import PostContainer from '../Container/PostContainer.jsx';
// import Todo from '../../Todo/Todo';

export default function Sidebar() {
  return (
    <>
      <S.SideBar>
        {/* S.SideBar 처럼 다른 태그들도 styled-component로 변경 부탁드립니다! */}
        {/* styled-component 이름은 PascalCase 형태로 부탁드려요! */}
        <S.SideWrapper>
          <img src={Ellipse} className='App-logo' alt='logo' />
          <div className='side-title'>MENU</div>
          <div className='side-menu'>
            <Link to='/'>
              <span>Main</span>
            </Link>
          </div>
        </S.SideWrapper>
        <div className='wrapper'>
          <div className='main-container'>
            <div className='header'>
              <h2>My Todos</h2>
            </div>
            <PostsContainer />
          </div>
        </div>
      </S.SideBar>
    </>
  );
}
