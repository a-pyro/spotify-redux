import React from 'react';
import { connect } from 'react-redux';
import {} from '../redux/actions/song';

const Song = ({ track, addSong, addSongToQueue }) => {
  const handlePlaySong = (track) => {
    // addSong(track);
  };
  const handleAddQueue = (track) => {
    // addSongToQueue(track);
  };

  return (
    <div className='py-3 trackHover'>
      <span className='card-title trackHover px-3' style={{ color: 'white' }}>
        {track.title}
      </span>
      <span onClick={() => handlePlaySong(track)} className='text-white badge'>
        Play Song
      </span>
      <span onClick={() => handleAddQueue(track)} className='text-white badge'>
        Add to QUEUE
      </span>
      <small className='duration' style={{ color: 'white' }}>
        {Math.floor(parseInt(track.duration) / 60)}:
        {parseInt(track.duration) % 60 < 10
          ? '0' + (parseInt(track.duration) % 60)
          : parseInt(track.duration) % 60}
      </small>
    </div>
  );
};

export default connect(null, {})(Song);
