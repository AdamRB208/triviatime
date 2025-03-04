
export class TriviaModel {
  constructor(data) {
    this.difficulty = data.difficulty
    this.category = data.category
    this.question = data.question
    this.correct_answer = data.correct_answer
    this.incorrect_answers = data.incorrect_answers
  }


  get card() {
    return `
    <div class="col-md-3 card m-3">
          <span class="level rounded">${this.difficulty}</span>
          <span class="group rounded">${this.category}</span>
          <div></div>
          <div class="quiz rounded">${this.question}</div>
          <button class="rounded">${this.correct_answer}</button>
          <button class="rounded">${this.incorrect_answers[0]}</button>
          <button class="rounded">${this.incorrect_answers[1]}</button>
          <button class="rounded">${this.incorrect_answers[2]}</button>
        </div>
        `
  }

}


// let incorrect_answers = ''
//     for (let i = 0; i < this.incorrect_answers.length; i++) {
//       incorrect_answers += `<button class="rounded">${this.incorrect_answers[i]}</button>`;
//     }