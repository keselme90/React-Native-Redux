import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TodoApp from './src/TodoApp';
import store from './src/redux/store'
import {Provider} from 'react-redux'

export default function App() {
  return (
    // With the provider our store can be accessed anywhere in the app
    // regardless how deep we need it.
    <Provider store = {store}> 
      <TodoApp/>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
