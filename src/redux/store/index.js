/**
 * Store - holds our state - THERE IS ONLY ONE STATE. 
 * We store the state of the application in one particular place.
 * Unlike regular react application, where each component stores its own state,
 * Redux stores all the state in one place - The Store.
 * 
 * To modify the state we use Actions. The Actions, cannot directly modify the store, they must go through Redcers.
 * 
 * Reducers receive the action, modify the state and give us a new state.
 * 
 * The Action reaches the Reducer by something called a Dispatcher.
 */

import {createStore} from 'redux'

export default store = createStore(rootReducer)