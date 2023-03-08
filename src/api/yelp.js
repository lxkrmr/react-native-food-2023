import axios from 'axios';
import secret from './secret';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer ' + secret,
  },
});
