
export class TriviaModel {
  constructor(data) {
    this.difficulty = data.difficulty
    this.category = data.category
    this.question = data.question
    this.correct_answer = data.correct_answer
    this.incorrect_answers = data.incorrect_answers
  }

}



// let exampleData = {

//   "response_code": 0,
//   "results": [
//     {
//       "type": "multiple",
//       "difficulty": "medium",
//       "category": "General Knowledge",
//       "question": "What was the destination of the missing flight MH370?",
//       "correct_answer": "Beijing",
//       "incorrect_answers": [
//         "Kuala Lumpur",
//         "Singapore",
//         "Tokyo"
//       ]
//     },
// }