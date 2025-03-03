import { triviaService } from "../services/TriviaService.js"
import { Pop } from "../utils/Pop.js"

export class TriviaController {
  constructor() {
    console.log('trivia controller is up!')
    this.receivedTriviaQuestions()
  }

  // getResultsBack() {
  //   const result = new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       const randomNum = Math.round(Math.random() * 10)

  //       if (randomNum > 5) {
  //         resolve(`randomNum was ${randomNum}`)
  //       }

  //       else {
  //         reject(`randomNum was ${randomNum}`)
  //       }
  //     }, 4000)
  //   })
  // }


  // async questionsPromise() {

  //   try {
  //     const questions = await this.getResultsBack()
  //     console.log('questions', questions);
  //   } catch (error) {
  //     console.error('promise was rejected')
  //   }
  // }


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
}