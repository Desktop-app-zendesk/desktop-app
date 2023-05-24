import axios from 'axios'
import { API_ROUTES } from '../utils/routes';

export default axios.create({
   baseURL: API_ROUTES.BASE_URL,
   headers: {
      //  Authorization: `<Your Auth Token>`,
      'Content-Type': 'application/json',
      'timeout': 900000,
   },

});
