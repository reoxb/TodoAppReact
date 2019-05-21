import React from 'react'
import './TodoApp.css'
import TodoList from './TodoList'
import Form from './Form'


class TodoApp extends React.Component {
  // If you don’t initialize state and you don’t bind methods, you don’t need to implement a constructor for your React component.
  constructor(props) {
    super(props) // you should call super(props) before any other statement. Otherwise, this.props will be undefined in the constructor

    this.state = {
      items: []
    } // Initializing local state by assigning an object to this.state.
  }

  handleSubmit = item => {
      this.setState({items: [...this.state.items, item]});
  }

  removeTask = index => {
    const { items } = this.state;

    this.setState({
        items: items.filter((item, i) => { 
            return i !== index;
        })
    });
  }

  render() {

    return (
      <div className="container">
          <h1> TodoApp! </h1> 
          <p>Add a new task to do!</p>
          <TodoList 
            itemData = {this.state.items} 
            removeTask = {this.removeTask} 
          /> 
          <h3>Add New</h3>
          <Form 
            handleSubmit={this.handleSubmit} 
            items = {this.state.items} 
          />
      </div>
    );
  }
}

export default TodoApp;