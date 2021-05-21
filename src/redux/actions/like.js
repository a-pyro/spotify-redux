import { LIKE_SONG, UNLIKE_SONG } from './actionTypes';

export const likeSong = (song) => ({
  type: LIKE_SONG,
  payload: song,
});

export const unlikeSong = (id) => ({
  type: UNLIKE_SONG,
  payload: id,
});
