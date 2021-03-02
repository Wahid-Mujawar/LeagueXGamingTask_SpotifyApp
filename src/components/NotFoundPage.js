import React from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <React.Fragment>
      <Header />
      Page not found. Goto <Link to="/dashboard">Home Page</Link>
    </React.Fragment>
  );
};
export default NotFoundPage;