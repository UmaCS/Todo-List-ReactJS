import React, {Component} from 'react';
import NewToDoForm from './NewToDoForm';
import Todo from './Todo'

class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = {todos: []};
        this.createTodo = this.createTodo.bind(this)
    }
    createTodo(newTodo){
        this.setState({todos: [...this.state.todos, newTodo]});
    }
    render(){
        const todoList = this.state.todos
                        .map(todo => <Todo key={todo.id} description={todo.task} />)
        return (
            <div>
                {todoList}
                <NewToDoForm submitNewTodo={this.createTodo}/>
            </div>
        );
    }
}
export default TodoList;