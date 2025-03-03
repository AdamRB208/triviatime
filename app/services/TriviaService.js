import { AppState } from "../AppState.js"
import { TriviaModel } from "../models/TriviaModel.js"

// @ts-ignore
const triviaServiceAPI = axios.create({
  baseURL: 'https://opentdb.com/api.php?amount=10&category=9&type=multiple',
  timeout: 4000,
})

class TriviaService {

  async getQuestions() {

    const response = await triviaServiceAPI.get('https://opentdb.com/api.php?amount=10&category=9&type=multiple')
    console.log('received trivia questions', response.data)

    const triviaModels = response.data.results.map(pojo => new TriviaModel(pojo))
    AppState.triviaModels = triviaModels
    console.log('questions!', AppState.triviaModels)
  }
}

export const triviaService = new TriviaService()