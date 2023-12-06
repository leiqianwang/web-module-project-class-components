import React from 'react'

export default class Form extends React.Component {



            handleSubmit = (e) => {
              e.preventDefault();
              this.props.addTodo();
          }
  
   render() {
    const { handleInputChange, newTodoValue } = this.props;      

    return (
      <form onSubmit={this.handleSubmit}>
            <input type="text" value={newTodoValue} onChange={handleInputChange} />
            <button type="submit">Add Todo</button>

      </form>
    )
  }
}
