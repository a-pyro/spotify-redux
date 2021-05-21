import React from 'react';
import { Row, ListGroup } from 'react-bootstrap';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  song: state.playingSong.song,
});
const songInfoStyle = {
  position: 'absolute',
  color: 'white',
  display: 'flex',
  flexDirection: 'column',
  left: '8%',
  top: '100%',
};
const queueStyle = {
  position: 'absolute',
  color: 'white',
  display: 'flex',
  flexDirection: 'column',
  right: '8%',
  top: '100%',
};
const listStyle = {
  position: 'absolute',
  color: 'white',
  display: 'flex',
  flexDirection: 'column',
  top: '-650%',
  right: '5%',
  zIndex: '1000',
};

const Player = ({ song }) => {
  console.log(song);
  return (
    <div className='container-fluid fixed-bottom bg-container pt-1'>
      <Row>
        <div className='col-lg-10 offset-lg-2'>
          <Row style={{ position: 'relative' }}>
            <div style={songInfoStyle}>
              {/* <img src={song.md5_image} alt='singerpic' /> */}
              <span>{song.title_short}</span>
            </div>
            <div style={queueStyle}>
              {/* <img src={song.md5_image} alt='singerpic' /> */}
              <span className='btn rounded-pill btn-secondary'>Queue</span>
            </div>

            <ListGroup className='shadow' style={listStyle}>
              <ListGroup.Item>Cras justo odio</ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>Morbi leo risus</ListGroup.Item>
              <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
              <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
            <div className='col-6 col-md-4 col-lg-2 offset-3 offset-md-4 offset-lg-5 playerControls mt-1'>
              <Row>
                <a href='/'>
                  <img src='/playerbuttons/Shuffle.png' alt='shuffle' />
                </a>
                <a href='/'>
                  <img src='/playerbuttons/Previous.png' alt='shuffle' />
                </a>
                <a href='/'>
                  <img src='/playerbuttons/Play.png' alt='shuffle' />
                </a>
                <a href='/'>
                  <img src='/playerbuttons/Next.png' alt='shuffle' />
                </a>
                <a href='/'>
                  <img src='/playerbuttons/Repeat.png' alt='shuffle' />
                </a>
              </Row>
            </div>
          </Row>
          <Row className='justify-content-center playBar py-3'>
            <div className='col-8 col-md-6'>
              <div id='progress'>
                <div
                  className='progress-bar'
                  role='progressbar'
                  aria-valuenow={0}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
            </div>
          </Row>
        </div>
      </Row>
    </div>
  );
};

export default connect(mapStateToProps, {})(Player);
