import { AppState } from "../AppState.js"
import { TriviaModel } from "../models/TriviaModel.js"
import { triviaService } from "../services/TriviaService.js"
import { Pop } from "../utils/Pop.js"

export class TriviaController {
  constructor() {
    console.log('trivia controller is up!')
    this.receivedTriviaQuestions()
    AppState.on('triviaModels', this.drawTriviaQuestions)
  }


  async receivedTriviaQuestions() {
    try {
      await triviaService.getQuestions()
      Pop.success('Sucessful request to get trivia questions')
    } catch (error) {
      console.error('could not get questions from API', error)
      Pop.error(error, "could not get trivia questions!")
    }
    console.log('getting trivia questions')
  }

  drawTriviaQuestions() {
    const triviaModels = AppState.triviaModels
    let questionsCardContent = ''
    triviaModels.forEach(triviaModels => questionsCardContent += triviaModels.card)
    const questionsCardElem = document.getElementById('questionsCard')
    questionsCardElem.innerHTML = questionsCardContent
    console.log('questions drawn')
  }

}