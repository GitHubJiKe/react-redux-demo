import { ADD_ONE_TODO, REMOVE_ONE_TODO } from '../base/actionType';
var initState = {
    todolist: []
};
//todoItem:{id:0,content:'todo'}
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