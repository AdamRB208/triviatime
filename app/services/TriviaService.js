// @ts-ignore
const triviaServiceAPI = axios.create({
  baseURL: 'https://opentdb.com/api.php?amount=10&category=9&type=multiple',
  timeout: 4000,
})

class TriviaService {

  async getQuestions() {

    const response = await triviaServiceAPI.get('https://opentdb.com/api.php?amount=10&category=9&type=multiple')
    console.log('response', response)
  }
}

export const triviaService = new TriviaService()