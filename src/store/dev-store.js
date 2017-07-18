import { createStore, combineReducers} from 'redux';

import todolist from '../reducers/todolist';

const reducer = combineReducers({ todolist });//combineReducers 将多个reducer结合成一个，接受参数是一个Object 也可以写成：combineReducers({todolist：todolist })

export default createStore(reducer);//createStore(reducer, [preloadedState], enhancer) 创建store 接受三个参数 详情：http://cn.redux.js.org/docs/api/createStore.html
