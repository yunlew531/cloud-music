import axios from 'axios';

const req = axios.create({
  baseURL: `${process.env.VUE_APP_BASE_URL}`,
});

export function getRecommendSongList() {
  return req.get('/personalized');
}

export function getSongListDetail(id) {
  return req.get(`/playlist/detail?id=${id}`);
}

export function postLogin({ cellphone, password }) {
  return req.get(`/login/cellphone?phone=${cellphone}&password=${password}&countrycode=886`, { withCredentials: true });
}
