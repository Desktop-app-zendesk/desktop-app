import axios from 'axios'
import { APIROUTES } from '../utils/routes';

export default axios.create({
   baseURL: APIROUTES.BASE_URL,
   headers: {
      //  Authorization: `<Your Auth Token>`,
      'Content-Type': 'application/json',
      'timeout': 900000,
   },

});
