import React, { useState } from "react";
import { TodoListForm } from "./TodoListForm";
import { Todo } from "./Todo";

export const TodoList = () => {
  const [todos, setTodo] = useState([]);
  function addTodo(todo) {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const newTodo = [todo, ...todos];
    setTodo(newTodo);
    console.log(newTodo);
    // console.log(todos);
  }
  function removeTodo(id) {
    let filterdarray = todos.filter((todo) => todo.id !== id);
    setTodo(filterdarray);
  }
  function completeTodo(id) {
    console.log("calling complete todo");

    let updatedtodo = todos.map((todo) => {
      if (todo.id == id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });

    setTodo(updatedtodo);
    console.log(updatedtodo);
  }
  function editTodo(id, newtext) {
    console.log("edit todo is called");
    console.log(id,newtext);
    if (newtext== "" || /^\s*$/.test(newtext)) {
      return;
    }
   setTodo(prev=>prev.map(item=>(item.id ==id?newtext:item )))
    console.log(todos);
  }

  return (
    <div>
      <h1>What's the Plan for Today?</h1>
      <TodoListForm onSubmit={addTodo} />
      <Todo todos={todos} removeTodo={removeTodo} completeTodo={completeTodo}  editTodo={editTodo} />
    </div>
  );
};
