import React, { useState } from 'react';

import {
  initiateGetResult,
} from '../actions/result';

import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import SearchResult from './SearchResult';
import SearchForm from './SearchForm';
import Header from './Header';
import { Button } from 'react-bootstrap';

const Dashboard = (props) => {
  const [selectedCategory, setSelectedCategory] = useState('albums');
  const { isValidSession, history } = props;

  const handleSearch = (searchTerm) => {
    if (isValidSession()) {
      props.dispatch(initiateGetResult(searchTerm)).then(() => {
        setSelectedCategory('albums');
      });
    } else {
      history.push({
        pathname: '/',
        state: {
          session_expired: true
        }
      });
    }
  };

  const handleLogout = () => {
     console.log(window.location.hash)
     localStorage.clear();
     window.location.href = '/';
     
   };

  const setCategory = (category) => {
    setSelectedCategory(category);
  };

  const { albums } = props;
  const result = { albums };

   
  return (
    <React.Fragment>
      {isValidSession() ? (
        <div>
          <Header />

          <SearchForm handleSearch={handleSearch} />
          <SearchResult
            result={result}
            setCategory={setCategory}
            selectedCategory={selectedCategory}
            isValidSession={isValidSession}
          />

          <div className="button-logout">
          <Button variant="info" type="submit" onClick={handleLogout}>
             Logout
          </Button>
          </div>
          
        </div>
      ) : (
        <Redirect
          to={{
            pathname: '/',
            state: {
              session_expired: false
            }
          }}
        />
      )}
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    albums: state.albums,
  };
};

export default connect(mapStateToProps)(Dashboard);