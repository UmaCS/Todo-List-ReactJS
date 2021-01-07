import React, {Component} from 'react'; 
const {v4: uuidv4} = require('uuid');

class NewToDoForm extends Component {
    constructor(props){
        super(props);
        this.state = {task: ''}
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleSubmit(e){
        e.preventDefault();
        const newTodo = {task: this.state.task, id: uuidv4()};
        this.props.createTodo(newTodo);
        this.setState({task: ''});
    }
    handleChange(e){
        this.setState({[e.target.name]: e.target.value});
    }
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
            <label htmlFor="task">New Todo</label>
                <input
                type="text" 
                name="task" 
                id="task" 
                placeholder="New Todo"
                value={this.state.task}
                onChange={this.handleChange}
                />
                <button>Add Todo</button>
            </form>
        );
    }
}
export default NewToDoForm;