export const GET_RESULTS = 'GET_RESULTS';

const headers = new Headers({
  'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
  'X-RapidAPI-Key': 'c74a0a086emshf55ffb8dbdcb59ap17a486jsnb83bb4d3e387',
});

export const searchArtist = (input) => async (dispatch) => {
  try {
    const resp = await fetch(
      'https://striveschool-api.herokuapp.com/api/deezer/search?q=' + input,
      {
        method: 'GET',
        headers,
      }
    );
    if (resp.ok) {
      let data = resp.json();
      dispatch({
        type: GET_RESULTS,
        payload: data,
      });
    } else {
      console.log('error');
    }
  } catch (error) {
    console.log(error);
  }
};
