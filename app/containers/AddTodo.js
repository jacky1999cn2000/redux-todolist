'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight
} from 'react-native';

import { connect } from 'react-redux'
import { addTodo } from '../actions'

class AddTodo extends React.Component {
  constructor(){
    super(...arguments);
    this.state = {
      item: ''
    };
  }

  render(){
    return (
      <View style={styles.wrapper}>
        <TextInput
          autoFocus={true}
          autoCapitalize="sentences"
          placeholder="What to do next?"
          value={this.state.item}
          onChangeText={(item) => this.setState({item})}
          style={styles.inputwrapper}
        />
        <TouchableHighlight
          style={styles.buttonwrapper}
          underlayColor="gray"
          onPress={() => {
            if(!this.state.item.trim()){
              console.log('no value');
              return
            }
            this.props.dispatch(addTodo(this.state.item))
            this.setState({item:''})
          }}
        >
          <View style={styles.textwrapper}>
            <Text style={styles.textStyle}>Add Todo</Text>
          </View>
        </TouchableHighlight>
      </View>
    )
  }

}

let styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  inputwrapper: {
    height: 40,
    width: 220,
    alignSelf: 'center',
    marginRight: 15,
    borderColor: '#5B29C1',
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: 'white',
    paddingHorizontal: 10
  },
  buttonwrapper:{
    height: 40,
    width: 90,
    alignSelf: 'center',
    backgroundColor: 'blue',
    backgroundColor: '#5B29C1',
    borderColor: '#48209A',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingVertical: 15,
    shadowColor: 'darkgrey',
    shadowOffset: {
       width: 1,
       height: 1
    },
    shadowOpacity: 0.8,
    shadowRadius: 1,
  },
  textwrapper:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textStyle:{
    color: 'white',
    fontWeight: 'bold',
    fontSize: 10
  }
})

AddTodo = connect()(AddTodo)

export default AddTodo
