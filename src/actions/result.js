import {
     SET_ALBUMS,
     ADD_ALBUMS,
     
   } from '../utils/constants';

     import { get } from '../utils/api';

     export const setAlbums = (albums) => ({
          type: SET_ALBUMS,
          albums
     });
     export const addAlbums = (albums) => ({
          type: ADD_ALBUMS,
          albums
     });
     
     export const initiateGetResult = (searchTerm) => {
          return async (dispatch) => {
          try {
               const API_URL = `https://api.spotify.com/v1/search?query=${encodeURIComponent(
               searchTerm
               )}&type=album`;
               
               const result = await get(API_URL);
               console.log(result);
               const { albums } = result;
               (setAlbums(albums));
               dispatch(setAlbums(albums));
          
          return ;
          } catch (error) {
          console.log('error', error);
          }
          };
};

     export const initiateGetResultSong =  async(url) => {
          console.log("initiateGetResultSong in result",url)
            try {
              const API_URL = url
              const result = await get(API_URL);
              console.log("",result);
              return result;
            } catch (error) {
              console.log('error', error);
            }
        };
     