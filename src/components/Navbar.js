/** @jsx jsx */
import { useState } from 'react';
import {
  NavLink,
  useRouteMatch
} from 'react-router-dom';
import { jsx, css } from '@emotion/core';

function Navbar() {
  const { url } = useRouteMatch();
  const [isNavVisible, setNavVisibility] = useState(false);

  const styles = css`
    ul {
      display: inline-block;
      list-style: none;
      padding-left: 0;
      margin: 0;
      background-color: black;
      width: 100%;
    }

    ul li {
      float: left;
    }

    ul li.float-right {
      float: right;
    }

    ul li a {
      display: block;
      color: white;
      padding: 10px 30px;
      text-decoration: none;
      font-weight: bold;
      font-size: 1.5em;
      font-family: "Roboto Slab", sans-serif;
    }

    a:hover {
      background-color: gray;
    }

    a.active {
      background-color: white;
      color: black;
    }

    .nav-icon {
      display: none;
      padding: 10px 10px;
      width: 35px;
      cursor: pointer;
    }

    .nav-icon div {
      height: 5px;
      background-color: black;
      margin: 6px 0;
    }

    li.close-nav-button {
      display: none;
    }

    @media (max-width: 768px) {
      .nav-icon {
        display: block;
      }

      ul {
        visibility: ${isNavVisible ? "visible" : "hidden"};
        display: block;
        list-style: none;
        padding-left: 0;
        margin: 0;
        position: fixed;
        width: 200px;
        height: 100%;
        background-color: darkslategrey;
      }
      
      ul li {
        float: none;
      }

      ul li.float-right {
        float: none;
      }

      ul li.close-nav-button {
        display: block;
        overflow: hidden;
      }

      ul li.close-nav-button a {
        display: inline;
        float: right;
        color: black;
        padding: 0px 10px;
        text-decoration: none;
        font-weight: bold;
        font-size: 1.5em;
        font-family: "Roboto Slab", sans-serif;
      }
    }
  `;

  return (
    <nav css={styles}>
      <ul>
        <li className="close-nav-button">
          <a href="" onClick={() => setNavVisibility(prevVisibility => !prevVisibility)}>×</a>
        </li>
        <li>
          <NavLink to={`${url}/home`}>Home</NavLink>
        </li>
        <li>
          <NavLink to={`${url}/news`}>News</NavLink> 
        </li>
        <li>
          <NavLink to={`${url}/about`}>About</NavLink> 
        </li>
        <li className="float-right">
          <NavLink to={`${url}/login`}>Login</NavLink> 
        </li>
      </ul>
      <div className="nav-icon" onClick={() => setNavVisibility(prevVisibility => !prevVisibility)}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
    </nav>
  );
}

export default Navbar;
