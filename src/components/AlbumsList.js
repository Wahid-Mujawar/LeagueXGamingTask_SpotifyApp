import React from 'react';
import { Card } from 'react-bootstrap';
import _ from 'lodash';
import music from '../images/music.jpeg';
import SpotifyPlayer from 'react-spotify-web-playback';
import { useState } from "react";

import {
  initiateGetResultSong,
} from '../actions/result';

const AlbumsList = ({ albums, props }) => {
  const [current_track, setcurrenttrack] = useState('');
  const handlePlaySong = (event) => {
    console.log("event---", event)
    const urlsong = event;
    console.log("urlsong", urlsong)
    initiateGetResultSong(urlsong).then((res) => {
      setcurrenttrack(res.uri)
    });
  };

  return (
    <React.Fragment>
      
        {current_track !== "" ? <SpotifyPlayer autoPlay='true'
        token={JSON.parse(localStorage.getItem('params')).access_token}
        uris={[current_track]}
      />:""}

      {Object.keys(albums).length > 0 && (
        <div className="albums">
          {albums.items.map((album, index) => {
            return (
              <React.Fragment key={index}>
                <Card style={{ width: '18rem' }} onClick={(e) => handlePlaySong(album.href)}>
                  <a
                    // href={album.external_urls.spotify}
                    rel="noopener noreferrer"
                    className="card-image-link"
                  >
                    {!_.isEmpty(album.images) ? (
                      <Card.Img
                        variant="top"
                        src={album.images[0].url}
                        alt=""
                      />
                    ) : (
                      <img src={music} alt="" />
                    )}
                  </a>
                  
                </Card>
              </React.Fragment>
            );
          })}
        </div>
      )}
    </React.Fragment>
  );
};
export default AlbumsList;