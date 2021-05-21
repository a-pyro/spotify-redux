import { QUEUE_SONG, UNQUEUE_SONG } from './actionTypes';

export const queueSong = (song) => ({
  type: QUEUE_SONG,
  payload: song,
});

export const unqueueSong = (song) => ({
  type: UNQUEUE_SONG,
  payload: song,
});
