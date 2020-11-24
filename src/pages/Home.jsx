import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../redux/authentication';

const Home = () => {
  const dispatch = useDispatch();
  const user = useSelector(({ auth }) => auth.user);

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <nav className="navbar navbar-expand-lg justify-content-between navbar-dark bg-dark">
      <Link to="/" className="navbar-brand">{user.name}</Link>
      <ul className="navbar-nav">
        <li className="nav-item">
          <span onClick={logoutHandler} tabIndex="0" role="button" onKeyDown={logoutHandler} className="nav-link">Logout</span>
        </li>
      </ul>
    </nav>
  );
};

export default Home;
