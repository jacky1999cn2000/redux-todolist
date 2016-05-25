'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import { connect } from 'react-redux'
import { getTodos } from '../actions'


class App extends React.Component {
  constructor(){
    super(...arguments);
    this.state = {
    };
  }

  componentDidMount(){
    this.props.dispatch(getTodos());
  }

  render(){
    return (
      <View style={styles.container}>
        <View style={styles.addtodo}>
          <AddTodo />
        </View>
        <View style={styles.todoswrapper}>
          <VisibleTodoList />
        </View>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10
  },
  addtodo: {
    flex: 1
  },
  todoswrapper: {
    flex: 3
  }
})

App = connect(
  state => {
    console.log('state',state);
   return {};
 },
 dispatch => {
   return { dispatch }
 }
)(App)

export default App
