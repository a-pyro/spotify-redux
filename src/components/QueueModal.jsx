import { useState } from 'react';
import { Modal, Button, ListGroup, Badge } from 'react-bootstrap';
import { connect } from 'react-redux';
import { queueSong, unqueueSong } from '../redux/actions/queue';
import { playSong } from '../redux/actions/song';

const mapStateToProps = (state) => ({
  song: state.playingSong.song,
  likedSongs: state.likedSongs.favorites,
  playingSong: state.playingSong.song,
  songsToPlay: state.songQueue.songsToPlay,
});

const QueueModal = ({
  children,
  playSong,
  queueSong,
  unqueueSong,
  songsToPlay,
}) => {
  const [show, setShow] = useState(false);
  const handleQueue = (track) => {
    if (songsToPlay.some((song) => song.id === track.id)) {
      unqueueSong(track);
      return;
    }
    queueSong(track);
  };
  const handlePlay = (track) => {
    playSong(track);
    unqueueSong(track);
  };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <span variant='primary' onClick={handleShow}>
        {children}
      </span>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup className='shadow'>
            {songsToPlay.map((song) => (
              <ListGroup.Item key={song.onHide}>
                <span className='text-dark'>{song.title}</span>
                <Badge
                  onClick={() => handlePlay(song)}
                  style={{ cursor: 'pointer' }}
                >
                  Play
                </Badge>
                <Badge
                  onClick={() => handleQueue(song)}
                  style={{ cursor: 'pointer' }}
                >
                  Unqueue
                </Badge>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button variant='primary' onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default connect(mapStateToProps, { playSong, queueSong, unqueueSong })(
  QueueModal
);
