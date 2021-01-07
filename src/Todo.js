import React, {Component} from 'react';

class Todo extends Component {
    constructor(props){
        super(props);
        this.state = {
            isEditting: false,
            task: this.props.task
        }
        this.toggleForm = this.toggleForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }
    handleUpdate(e){
        e.preventDefault();
        this.props.updateTodo(this.props.id, this.state.task);
        this.setState({isEditting: false});
    }
    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    toggleForm(e){
        e.preventDefault();
        this.setState({isEditting: !this.state.isEditting});
    }
    render(){
        let result;
        if(this.state.isEditting){
            result = <form onSubmit={this.handleUpdate}>
                        <input type="text" name='task' value={this.state.task} onChange={this.handleChange} />
                        <button>Save</button>
                     </form>
        }else{
            result = <div>
                        <button onClick={this.toggleForm}>Edit</button>
                        <button onClick={this.props.removeTodo}>X</button>
                        <li>{this.props.task}</li>
                    </div>
        }
         return result;
    }
}
export default Todo