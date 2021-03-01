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
               dispatch(setAlbums(albums));
          
          return ;
          } catch (error) {
          console.log('error', error);
          }
          };
     };
     