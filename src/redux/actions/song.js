import {
  ADD_CURRENT_PLAYING,
  ADD_SONG,
  QUEUE_SONG,
  PLAY_NEXT_SONG,
  PLAY_PREVIOUS_SONG,
  REMOVE_FROM_QUEUE,
} from './actionTypes';

export const addSong = (song) => ({
  type: ADD_SONG,
  payload: song,
});
export const addSongToQueue = (song) => ({
  type: QUEUE_SONG,
  payload: song,
});

export const playSong = (song) => ({
  type: ADD_CURRENT_PLAYING,
  payload: song,
});

export const nextSong = (song) => (dispatch, getState) => {
  const { songQueue } = getState();
  const nextSong = songQueue.queue[0];
  if (!nextSong) return;
  //remove the song from the queue
  dispatch({ type: REMOVE_FROM_QUEUE, payload: song });
  //add the song to current
  dispatch({ type: ADD_CURRENT_PLAYING, payload: song });
};
export const previousSong = (song) => ({
  type: PLAY_PREVIOUS_SONG,
  payload: song,
});
