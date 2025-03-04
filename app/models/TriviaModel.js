
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
    <div class="col-md-4 card">
          <span class="level rounded">difficulty</span>
          <span class="group rounded">category</span>
          <div></div>
          <div class="quiz rounded">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet quibusdam error
            soluta blanditiis quis modi veniam doloribus itaque nisi pariatur.</div>
          <button class="rounded">correct answer</button>
          <button class="rounded">incorrect answer</button>
          <button class="rounded">incorrect answer</button>
          <button class="rounded">incorrect answer</button>
        </div>
        `
  }



}

