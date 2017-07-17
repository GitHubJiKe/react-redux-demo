import { ADD_ONE_TODO, REMOVE_ONE_TODO } from '../base/actionType';


export const addOneToDO = (todoItem)=>{
    console.log('addOneToDO',todoItem);
    return{
        type:ADD_ONE_TODO,
        todoItem:todoItem
    }
}

export const removeOneToDO = (ids)=>{
    console.log('removeOneToDO',ids);
    return{
        type:REMOVE_ONE_TODO,
        ids:ids
    }
}