import React, {Component} from 'react';

class Form extends Component {

    constructor(props) {
        super(props);
        
        this.initialState = {
            name: ''
        };

        this.state = this.initialState;
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name] : value
        });
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }


    render() {
        const {name} = this.state

        return (
            <form onSubmit={this.onFormSubmit}>
                <label htmlFor="new-todo">
                    What needs to be done? 
                </label>
                <input 
                    type="text" 
                    name="name" 
                    id="new-todo"
                    value={name}
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
