import React, {Component} from 'react';

class Form extends Component {

    constructor(props) {
        super(props);
        
        this.initialState = {
            task: ''
        };

        this.state = this.initialState;
    }

    handleChange = event => {
        // name = task
        const { name, value } = event.target;

        this.setState({
            // name = task and value is value
            [name] : value
        });
    }

    onFormSubmit = (event) => {
        event.preventDefault();

        // valid state valid
        if(this.state.task !== '') {
            this.props.handleSubmit(this.state)
        }

        this.setState(this.initialState);
    }


    render() {
        const {task} = this.state

        return (
            <form onSubmit={this.onFormSubmit}>
                <label htmlFor="new-todo">
                    What needs to be done? 
                </label>
                <input 
                    type="text" 
                    name="task" 
                    id="new-todo"
                    value={task}
                    onChange={this.handleChange}
                />
                <button type="submit">
                    Add #{this.props.items.length + 1}
                </button>
            </form>
        );
    }
}

export default Form;
