export const GET_ALBUM = 'GET_ALBUM';

const headers = new Headers({
  'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
  'X-RapidAPI-Key': 'c74a0a086emshf55ffb8dbdcb59ap17a486jsnb83bb4d3e387',
});

export const searchAlbum = (albumId) => async (dispatch) => {
  try {
    const resp = await fetch(
      'https://striveschool-api.herokuapp.com/api/deezer/album/' + albumId,
      {
        method: 'GET_ALBUM',
        headers,
      }
    );
    if (resp.ok) {
      let data = resp.json();
      dispatch({
        type: GET_ALBUM,
        payload: data,
      });
    } else {
      console.log('error');
    }
  } catch (error) {
    console.log(error);
  }
};
