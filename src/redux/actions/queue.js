import { ADD_TO_QUEUE, REMOVE_FROM_QUEUE } from './actionTypes';

export const addToQueue = (song) => ({
  type: ADD_TO_QUEUE,
  payload: song,
});

export const removeFromQueue = (song) => ({
  type: REMOVE_FROM_QUEUE,
  payload: song,
});
