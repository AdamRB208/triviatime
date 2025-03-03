// @ts-ignore
export const triviaAPI = axios.create({

  baseURL: 'https://opentdb.com/api.php?amount=10&category=9&type=multiple',
  timeout: 4000,

})
