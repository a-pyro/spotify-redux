import styled from 'styled-components';
import { likeSong, unlikeSong } from '../redux/actions/like.js';

import React from 'react';

import { Row, ListGroup } from 'react-bootstrap';
import { connect } from 'react-redux';
import QueueModal from './QueueModal.jsx';

const mapStateToProps = (state) => ({
  song: state.playingSong.song,
  likedSongs: state.likedSongs.favorites,
  playingSong: state.playingSong.song,
  songQueue: state.songQueue.songsToPlay,
});

const mapDispatchToProps = (dispatch) => ({
  likeSongFunc: (song) => dispatch(likeSong(song)),
  unlikeSongFunc: (id) => dispatch(unlikeSong(id)),
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

const Player = ({ song, songQueue }) => {
  console.log(song);
  return (
    <div className='container-fluid fixed-bottom bg-container pt-1'>
      <ParrentRow>
        <div className='col-lg-10 offset-lg-2'>
          <Row style={{ position: 'relative' }}>
            <div style={songInfoStyle}>
              {/* <img src={song.md5_image} alt='singerpic' /> */}
              <span>{song.title_short}</span>
            </div>
            <div style={queueStyle}>
              {/* <img src={song.md5_image} alt='singerpic' /> */}
              <QueueModal>
                <span className='btn rounded-pill btn-secondary'>Queue</span>
              </QueueModal>
            </div>

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
        <ButtonContainer>
          {/* {props.likedSongs.some((song) => song.id === props.playingSong.id) ?
        <LikeButton> ??? </LikeButton>
        : <UnlikeButton> ???? </UnlikeButton>} */}
          <QueueButton> ???? </QueueButton>
        </ButtonContainer>
      </ParrentRow>
    </div>
  );
};

const ParrentRow = styled(Row)`
  position: relative;
`;

const ButtonContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  right: 0;
`;
// const LikeButton = styled.span``;

const QueueButton = styled.span``;
// const UnlikeButton = styled.span``;

export default connect(mapStateToProps, mapDispatchToProps)(Player);

// const Player = (props) => (
//   <div className='container-fluid fixed-bottom bg-container pt-1'>
//     <ParrentRow>
//       <div className='col-lg-10 offset-lg-2'>
//         <Row>
//           <div className='col-6 col-md-4 col-lg-2 offset-3 offset-md-4 offset-lg-5 playerControls mt-1'>
//             <Row>
//               <a href='/'>
//                 <img src='/playerbuttons/Shuffle.png' alt='shuffle' />
//               </a>
//               <a href='/'>
//                 <img src='/playerbuttons/Previous.png' alt='shuffle' />
//               </a>
//               <a href='/'>
//                 <img src='/playerbuttons/Play.png' alt='shuffle' />
//               </a>
//               <a href='/'>
//                 <img src='/playerbuttons/Next.png' alt='shuffle' />
//               </a>
//               <a href='/'>
//                 <img src='/playerbuttons/Repeat.png' alt='shuffle' />
//               </a>
//             </Row>
//           </div>
//         </Row>
//         <Row className='justify-content-center playBar py-3'>
//           <div className='col-8 col-md-6'>
//             <div id='progress'>
//               <div
//                 className='progress-bar'
//                 role='progressbar'
//                 aria-valuenow={0}
//                 aria-valuemin={0}
//                 aria-valuemax={100}
//               ></div>
//             </div>
//           </div>
//         </Row>
//       </div>
//       <ButtonContainer>
//         {/* {props.likedSongs.some((song) => song.id === props.playingSong.id) ?
//         <LikeButton> ??? </LikeButton>
//         : <UnlikeButton> ???? </UnlikeButton>} */}
//         <QueueButton> ???? </QueueButton>
//       </ButtonContainer>
//     </ParrentRow>
//   </div>
// );
