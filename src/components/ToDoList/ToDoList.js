import React, { Component } from 'react';
import ToDOItem from '../ToDOItem';
import styles from './ToDoList.css';

class ToDoList extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = { ids: [], inputValue: '' };
        this.delete = this.delete.bind(this);
    }

    getNextId() {
        var todolist = this.props.todolist.todolist;
        var length = todolist.length;
        var id = -1;
        if (length > 1) {
            var max = { id: -1 };
            todolist.forEach(v => {
                if (v.id > max.id) max = v;
            });
            id = max.id + 1;
        } else if (length === 0) {
            id = length;
        } else {
            id = todolist[0].id + 1;
        }
        return id;
    }

    delete(id) {
        this.setState((preState) => {
            preState.ids.push(id);
            return { ids: preState.ids };
        });
    }

    render() {
        var { actions, todolist } = this.props;
        var { ids, inputValue } = this.state;
        return (
            <div className="ToDoList">
                <input className="input" type="text" placeholder="input something" value={inputValue} onChange={(e) => { this.setState({ inputValue: e.currentTarget.value }) }} />
                <button onClick={() => { actions.addOneToDO({ id: this.getNextId(), content: inputValue }); this.setState({ inputValue: '' }) }}>Add</button>
                <button onClick={() => { actions.removeOneToDO(ids); this.setState({ ids: [] }) }}>Remove</button>
                {todolist.todolist.map((v, idx) => <ToDOItem key={idx} {...v} getId={this.delete} />)}
            </div>
        );
    }
}



export default ToDoList
