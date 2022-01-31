import React from 'react';
import '../css/Header.css';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
    <h1 className="logo">
      <NavLink to='/'>Twitter</NavLink>
    </h1>
    {/* NavLink điều hướng trang thôi còn a là reload lại toàn bộ trang */}
    <nav>
        <ul className="main-nav">
            <li><NavLink to='/login'>Login</NavLink></li>  
            <li><NavLink to='/register'>Register</NavLink></li>
            <li><a href="#" className="user-name">Hello, Tùng</a></li>
            <li><NavLink to='#'>Sign Out</NavLink></li>
        </ul>
    </nav>
</header>
  )
}
