import React, {Component} from 'react';
import { textSpanIsEmpty } from 'typescript';
import NewToDoForm from './NewToDoForm';
import Todo from './Todo'

class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = { todos: [] };
        this.create = this.create.bind(this);
        this.update = this.update.bind(this);
        this.toggleCompletion = this.toggleCompletion.bind(this);
        // this.remove = this.remove.bind(this); 
    }
    create(newTodo){
        this.setState({todos: [...this.state.todos, newTodo]});
    }
    remove(id){
        this.setState({todos: this.state.todos.filter(todo => todo.id !== id)})
    }
    update(id, updatedTask){
        const updatedTodos = this.state.todos.map(todo => {
            if(todo.id === id){
                return {...todo, task: updatedTask}
            }
            return todo;
        })
        this.setState({todos: updatedTodos})
    }
    toggleCompletion(id){
        const updatedTodos = this.state.todos.map(todo => {
            if(todo.id === id){
                return {...todo, completed: !todo.completed}
            }
            return todo;
        })
        this.setState({todos: updatedTodos})
    }
    render(){
        const todoList = this.state.todos.map(todo => {
            return <Todo key={todo.id} 
                         id={todo.id}  
                         task={todo.task}
                         completed={todo.completed}
                         removeTodo={() => this.remove(todo.id)}
                         updateTodo={this.update}
                         toggleTodo={this.toggleCompletion}
                         />
        });
        return (
            <div>
                <ul>{todoList}</ul>
                <NewToDoForm createTodo={this.create} />
            </div>
        );
    }
}
export default TodoList;