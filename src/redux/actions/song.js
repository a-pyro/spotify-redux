import {
  ADD_CURRENT_PLAYING,
  PLAY_PREVIOUS_SONG,
  UNQUEUE_SONG,
} from './actionTypes';

export const playSong = (song) => ({
  type: ADD_CURRENT_PLAYING,
  payload: song,
});

export const nextSong = (song) => (dispatch, getState) => {
  const { songQueue } = getState();
  const nextSong = songQueue.queue[0];
  if (!nextSong) return;
  //remove the song from the queue
  dispatch({ type: UNQUEUE_SONG, payload: song });
  //add the song to current
  dispatch({ type: ADD_CURRENT_PLAYING, payload: song });
};
export const previousSong = (song) => ({
  type: PLAY_PREVIOUS_SONG,
  payload: song,
});
