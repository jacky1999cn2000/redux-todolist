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
import Icon from 'react-native-vector-icons/FontAwesome';
import {fromJS, is} from 'immutable';

const coffeeIcon = (<Icon name="coffee" size={10} color="black" />)
const bookmarkIcon = (<Icon name="bookmark" size={10} color="black" />)

class TodoList extends React.Component {
  constructor(){
    super(...arguments);

    this.ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => !is(r1, r2)
    })

  }

  render(){
    return (
      <ListView style={styles.list}
        dataSource={this.ds.cloneWithRows(this.props.todos.toArray())}
        enableEmptySections={true}
        renderRow={this.onRenderRow} />
    )
  }

  onRenderRow = (rowData, sectionID, rowID) => {
    let textStyle = {
      textDecorationLine: rowData.get('completed') ? 'line-through' : 'none'
    };
    let myIcon = rowData.get('completed') ? coffeeIcon : bookmarkIcon;

    return (
      <TouchableHighlight
        underlayColor="gray"
        onPress={() => this.props.onTodoClick(rowData.get('id'))}
      >
        <View style={styles.row}>
          <View style={styles.icon}>
            {myIcon}
          </View>
          <View style={styles.item}>
            <Text style={textStyle}>
              {rowData.get('text')}
            </Text>
          </View>
        </View>
      </TouchableHighlight>
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



// const renderRow = (rowData, sectionID, rowID) => {
//
//   return (
//     <TouchableHighlight
//       underlayColor="gray"
//       onPress={() => this.props.onTodoClick(rowData.get('id'))}
//     >
//       <View style={styles.row}>
//         <View style={styles.icon}>
//           {coffeeIcon}
//         </View>
//         <View style={styles.item}>
//           <Text>
//             {rowData.get('text')}
//           </Text>
//         </View>
//       </View>
//     </TouchableHighlight>
//   )
// }

const styles = StyleSheet.create({
    list: {
      flex: 1,
      padding: 30
    },
    row: {
      margin: 8,
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    icon: {
      width: 10,
      marginRight: 15,
      alignSelf: 'center'
    },
    item: {
      flex: 1,
      alignSelf: 'center'
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
