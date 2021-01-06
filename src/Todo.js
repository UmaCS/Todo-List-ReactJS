import React, {Component} from 'react';

class Todo extends Component {
    render(){
        return (
            <div>
                <p>{this.props.description}</p>
                <button>edit</button>
                <button>X</button>
            </div>
        );
    }
}
export default Todo