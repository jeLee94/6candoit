import React from 'react';
import { Link } from 'react-router-dom';
import Todo from '../../Todo/Todo';
import * as S from './SidebarStyle.js';
import Ellipse from './Ellipse.png';

export default function Sidebar() {
  return (
    <>
      <S.SideBar>
        {/* S.SideBar 처럼 다른 태그들도 styled-component로 변경 부탁드립니다! */}
        {/* styled-component 이름은 PascalCase 형태로 부탁드려요! */}
        <div class='side-wrapper'>
          <img src={Ellipse} className='App-logo' alt='logo' />
          <div class='side-title'>MENU</div>
          <div class='side-menu'>
            <Link to='/'>
              <span>Main</span>
            </Link>
          </div>
        </div>
        <div className='wrapper'>
          <div className='main-container'>
            <div className='header'>
              <h2>My Todos</h2>
            </div>
            {/* <Todo /> */}
          </div>
        </div>
      </S.SideBar>
    </>
  );
}
