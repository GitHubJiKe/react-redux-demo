import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ToDoList from './components/ToDoList';
import { Provider } from 'react-redux';
import store from './store/dev-store';


ReactDOM.render(
    <Provider store={store}>
        <ToDoList />
    </Provider>, document.getElementById('root'));
