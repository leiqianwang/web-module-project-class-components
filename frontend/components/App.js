import React from 'react'
import Form from './Form';
import TodoList from './TodoList'



     let id = 0;

   let getId = () => ++id;

const initialTodos = [
   {id:  getId(),   task: " Reading more pages of a book", completed: false }, 
   {id:  getId(),  task: "learn react", completed: true },
   {id:  getId(),  task: "have some fun", completed: false }

]
            


export default class App extends React.Component {
     state = {
         todos:   initialTodos,
         newTodo: '' // New state property for the input
     }

     addTodo = () => {
      this.setState(prevState => {
          // Create a new todo object
          const newTodo = {
              id: getId(), // Assuming getId() generates a unique ID
              task: prevState.newTodo,
              completed: false
          };

          // Return the updated state
        return {
          todos: [...prevState.todos, newTodo],
          newTodo: '' // Reset the input field after adding
      };
  });
}



              handleInputChange = (e) => {
                this.setState({ newTodo: e.target.value });
              }





            toggleCompletion = id => {
              this.setState(prevState => ({
                todos: prevState.todos.map(td => {
                    if (id === td.id) {
                        return { ...td, completed: !td.completed };
                    }
                    return td;
                })
            }));
        }


  render() {
    return (
      <div>
         
          <TodoList todos={this.state.todos} toggleCompletion={this.toggleCompletion}  />
          <Form addTodo={this.addTodo}  handleInputChange={this.handleInputChange} newTodoValue={this.state.newTodo}/>
          
      </div>
    )
  }
}
