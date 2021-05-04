import axios from 'axios';

const KEY = 'AIzaSyCpwDtwFc9RAp5TwFUFToe44MFHLUxLWl0';

export default axios.create({
   baseURL: 'https://www.googleapis.com/youtube/v3',
   params: {
      part: 'snippet',
      maxResults: 10,
      key: KEY,
   },
});
