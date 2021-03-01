import React from 'react';
import _ from 'lodash';
import { Redirect } from 'react-router-dom';
import AlbumsList from './AlbumsList';

const SearchResult = (props) => {
     const {isValidSession, result, setCategory, selectedCategory } = props;
     const { albums } = result;

     if (!isValidSession()) {
          return (
            <Redirect
              to={{
                pathname: '/',
                state: {
                  session_expired: true
                }
              }}
            />
          );
        }

     return (
    <React.Fragment>
      <div className="button-search">
        {!_.isEmpty(albums.items) && (
          <button
            className={`${
              selectedCategory === 'albums' ? 'btn active' : 'btn'
            }`}
            onClick={() => setCategory('albums')}
          >
            Albums
          </button>
        )}
        
        
      </div>
          <div className={`${selectedCategory === 'albums' ? '' : 'hide'}`}>
               {albums && <AlbumsList albums={albums} />}
          </div>
      
    </React.Fragment>
  );
};

export default SearchResult;