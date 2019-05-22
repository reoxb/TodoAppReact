import React from 'react'

const TableHeader = () => { 
    return (
        <thead>
            <tr>
                <th>Task</th>
                <th>Action</th>
            </tr>
        </thead>
    );
}

const TableBody = props => { 
    const rows = props.items.map((item, index) => {
        return (
            <tr key={index}>
                <td>{item.task}</td>
                <td><button onClick={ () => props.removeTask(index) }>Delete</button></td>
            </tr>
        );
    });

    return <tbody>{rows}</tbody>;
}

class TodoList extends React.Component {
  render() {
    return (
      <table>
          <TableHeader />
          <TableBody 
            items = {this.props.itemData}
            removeTask = {this.props.removeTask}
          />
      </table>
    );
  }
}

export default TodoList;
