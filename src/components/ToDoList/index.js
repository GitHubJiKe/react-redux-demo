import ToDoList from './ToDoList.js';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/todolist';

export default connect(
    state=>({...state}),
    dispatch => ({actions: bindActionCreators(actions, dispatch)})
)(ToDoList)
