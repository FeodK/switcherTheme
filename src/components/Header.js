import React, { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

function Header() {
  const { userName } = useContext(UserContext);
  return <h1>Привет, {userName}!</h1>;
}

export default Header;
