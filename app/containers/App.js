'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';
// import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import { connect } from 'react-redux'
// import { getTodos } from '../actions'


class App extends React.Component {
  constructor(){
    super(...arguments);
    this.state = {
    };
  }

  // componentDidMount(){
  //   this.props.dispatch(getTodos());
  // }

  // <AddTodo />
  // <VisibleTodoList />
  // <Footer />

  render(){
    return (
      <View style={styles.container}>
        <AddTodo style={styles.addtodo}/>
        <VisibleTodoList />
        <Text style={styles.textwrapper}>
          hello there
        </Text>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60
  },
  addtodo: {
    flex: 1
  },
  textwrapper: {
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
