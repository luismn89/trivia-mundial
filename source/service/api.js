import request from 'superagent';
import Cookie from 'js-cookie';

const BASE = '/mundial/trivia/api/v1/';

const URL_LOGIN = `${BASE}login/`;
const URL_REGISTER = `${BASE}user/new/`;
const URL_IS_LOGGED = `${BASE}user/`;
const URL_NEW_QUIZ = `${BASE}quiz/new/`;
const URL_VALID_ANSWER = (id_quiz) => `${BASE}quiz/${id_quiz}/answer/`;
const URL_PASS_RECOVERY = `${BASE}account/change-password/send/`;
const URL_CHANGE_PASS = `${BASE}account/change-password/`;
const URL_WINNERS = `${BASE}win/`;
const URL_DEPARTAMENTOS = `${BASE}departamentos/`;
const URL_PROVINCIAS = (departamento) => `${BASE}provincias/?departamento=${departamento}`;
const URL_DISTRITOS = (provincia) => `${BASE}distritos/?provincia=${provincia}`;

export default {
  makeLogin: (data) => request.post(URL_LOGIN).set('X-CSRFToken', Cookie.get('csrftoken')).send(data),
  registerUser: (data) => request.post(URL_REGISTER).set('X-CSRFToken', Cookie.get('csrftoken')).send(data),
  userLogged: () => request.get(URL_IS_LOGGED),
  initQuiz: (data) => request.post(URL_NEW_QUIZ).set('X-CSRFToken', Cookie.get('csrftoken')).send(data),
  sendAnswer: (data) => request.post(URL_VALID_ANSWER(data.quiz_id)).set('X-CSRFToken', Cookie.get('csrftoken')).send(data),
  passRecovery: (data) => request.post(URL_PASS_RECOVERY).set('X-CSRFToken', Cookie.get('csrftoken')).send(data),
  changePassword: (data) => request.post(URL_CHANGE_PASS).set('X-CSRFToken', Cookie.get('csrftoken')).send(data),
  getWinners: () => request.get(URL_WINNERS),
  getDepartamentos: () => request.get(URL_DEPARTAMENTOS),
  getProvincias: (data) => request.get(URL_PROVINCIAS(data)),
  getDistritos: (data) => request.get(URL_DISTRITOS(data))
}
