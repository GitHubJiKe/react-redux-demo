import { ADD_ONE_TODO, REMOVE_ONE_TODO } from '../base/actionType';
var initState = {
    todolist: []
};
// todoItem:{id:0,content:'todo'}

//reducer 应该是一个纯函数 接收两个参数，分别是当前的 state 树和要处理的 action，返回新的 state 树 
export default function todolist(state = initState, action) {
    switch (action.type) {
        case ADD_ONE_TODO:
            var todolist = state.todolist;
            todolist.push(action.todoItem);
            return { ...state, todolist };
        case REMOVE_ONE_TODO:
            var todolist = [];
            state.todolist.forEach(v => {
                if (!action.ids.includes(v.id)) {
                    todolist.push(v);
                }
            })
            return { ...state, todolist };
        default:
            return { ...state };
    }
}