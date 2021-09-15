import axios from 'axios';
import { constants } from './constants';

const url = constants.baseURL;

export function getData() {
   return axios(url, {
      method: 'GET'
   })
}