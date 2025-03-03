import { ExampleController } from './controllers/ExampleController.js';
import { TriviaController } from './controllers/TriviaController.js';

class App {

  TriviaController = new TriviaController()


}

window['app'] = new App()


