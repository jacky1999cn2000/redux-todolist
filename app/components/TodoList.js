'use strict';

import React, { PropTypes } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ListView
} from 'react-native';

// import ImmutablePropTypes from 'react-immutable-proptypes'
import {fromJS, is} from 'immutable';
import Todo from './Todo'

const countries = fromJS([
    {name: 'China', population: '1,393,783,836'},
    {name: 'India', population: '1,267,401,849'},
    {name: 'U.S.A.', population: '322,583,006'},
    {name: 'Indonesia', population: '252,812,245'},
    {name: 'Brazil', population: '202,033,670'}
])

const renderRow = (rowData, sectionID, rowID) => {

  return (
    <TouchableHighlight>
      <View>
        <Text>
          {rowID}
        </Text>
        <Text>
          {rowData.get('text')}
        </Text>
      </View>
    </TouchableHighlight>
  )
}

class TodoList extends React.Component {
  constructor(){
    super(...arguments);
    this.ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => !is(r1, r2)
    })
  }

  render(){
    return (
      <ListView
        dataSource={this.ds.cloneWithRows(this.props.todos.toArray())}
        enableEmptySections={true}
        renderRow={renderRow} />
    )
  }
}

// const TodoList = ({ todos, onTodoClick }) => (
//   <ul>
//     {todos.map(todo =>
//       <Todo
//         key={todo.get('id')}
//         text={todo.get('text')}
//         completed={todo.get('completed')}
//         onClick={() => onTodoClick(todo.get('id'))}
//       />
//     )}
//   </ul>
// )

const styles = StyleSheet.create({
    list: {
        flex: 1,
        padding: 30,
        backgroundColor: 'rgb(39, 174, 96)'
    },
    row: {
        margin: 8,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 20,
        color: 'white'
    }
})

// TodoList.propTypes = {
//   todos: ImmutablePropTypes.listOf(
//     ImmutablePropTypes.contains({
//       id: React.PropTypes.string.isRequired,
//       text: React.PropTypes.string.isRequired,
//       completed: React.PropTypes.bool.isRequired
//     })
//   ).isRequired,
//   onTodoClick: PropTypes.func.isRequired
// }

export default TodoList
