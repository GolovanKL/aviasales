import React from 'react';
import logo from '../../Assets/Logo.png';
import './Header.module.scss';

export default function Header() {
  return (
    <header >
      <img src={logo} alt="logo" />
    </header>
  );
}
