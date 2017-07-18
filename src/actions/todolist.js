import { ADD_ONE_TODO, REMOVE_ONE_TODO } from '../base/actionType';

// Action 本质上是 JavaScript 普通对象。我们约定，action 内必须使用一个字符串类型的 type 字段来表示将要执行的动作。


// Action 创建函数 就是生成 action 的方法。“action” 和 “action 创建函数” 这两个概念很容易混在一起，使用时最好注意区分。

export const addOneToDO = (todoItem) => {//这是一个Action 创建函数
    return {
        type: ADD_ONE_TODO,
        todoItem: todoItem
    }
}

export const removeOneToDO = (ids) => {//这是一个Action 创建函数
    return {
        type: REMOVE_ONE_TODO,
        ids: ids
    }
}