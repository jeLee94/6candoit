import React from "react";
import { Link } from "react-router-dom";
import Todo from "../../Todo/Todo";
import "./Sidebar.css";
import Ellipse from "./Ellipse.png";

export default function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <div class="side-wrapper">
          <img src={Ellipse} className="App-logo" alt="logo" />
          <div class="side-title">MENU</div>
          <div class="side-menu">
            <Link to="/">
              <span>Main</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="wrapper">
        <div className="main-container">
          <div className="header">
            <h2>My Todos</h2>
          </div>
          <Todo />
        </div>
      </div>
    </>
  );
}
