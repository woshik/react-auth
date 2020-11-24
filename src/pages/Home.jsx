import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../redux/authentication';

const Home = () => {
  const dispatch = useDispatch();

  const logoutHandler = (location) => {
    dispatch(logout());
    return {
      ...location,
      path: '/login',
    };
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link to="/" className="navbar-brand">Navbar</Link>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to={logoutHandler} className="nav-link">Logout</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Home;
