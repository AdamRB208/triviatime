import { TriviaModel } from './models/TriviaModel.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {
  /** 
     * @type {TriviaModel[]} 
  */
  TriviaModel = []

}

export const AppState = createObservableProxy(new ObservableAppState())