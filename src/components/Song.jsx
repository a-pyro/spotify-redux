import React from 'react';
import { Badge } from 'react-bootstrap';
import { connect } from 'react-redux';
import { queueSong, unqueueSong } from '../redux/actions/queue';
import { playSong } from '../redux/actions/song';

const mapStateToProps = (state) => ({
  songsToPlay: state.songQueue.songsToPlay,
});

const Song = ({ track, playSong, queueSong, unqueueSong, songsToPlay }) => {
  const handlePlaySong = (track) => {
    playSong(track);
  };
  const handleQueue = (track) => {
    if (songsToPlay.some((song) => song.id === track.id)) {
      unqueueSong(track);
      return;
    }
    queueSong(track);
  };

  return (
    <div className='d-flex align-items-center justify-content-between'>
      <div onClick={() => handlePlaySong(track)} className='py-3 trackHover'>
        <span className='card-title trackHover px-3' style={{ color: 'white' }}>
          {track.title}
        </span>

        <small className='duration' style={{ color: 'white' }}>
          {Math.floor(parseInt(track.duration) / 60)}:
          {parseInt(track.duration) % 60 < 10
            ? '0' + (parseInt(track.duration) % 60)
            : parseInt(track.duration) % 60}
        </small>
      </div>
      <div>
        <div
          style={{ cursor: 'pointer' }}
          onClick={() => handleQueue(track)}
          className='text-white badge'
        >
          <Badge>
            {songsToPlay.some((song) => song.id === track.id)
              ? 'UNQUEUE'
              : 'QUEUE'}
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, { playSong, queueSong, unqueueSong })(
  Song
);
