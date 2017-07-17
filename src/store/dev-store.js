import { createStore, combineReducers, compose } from 'redux';

import todolist from '../reducers/todolist';

const reducer = combineReducers({ todolist });
export default createStore(reducer);
