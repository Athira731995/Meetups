import React, { useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import { TodoListForm } from "./TodoListForm";
export const Todo = ({ todos, removeTodo, completeTodo, editTodo }) => {
    const[edit,setEdit]= useState({
    id:null,
    text:""
  })
  function submitUpdate(value){
    editTodo(edit.id,value)
    setEdit({
      id:null,
      text:""
    })
  }

  if(edit.id){
    console.log(edit)
    return <TodoListForm  edit={edit}  onSubmit={submitUpdate}/>
  }

  return todos.map((todo) => (
    <div className={todo.isComplete ? "todo-row complete" : "todo-row"}>
      <div
        key={todo.id}
        onClick={() => {
          completeTodo(todo.id);
        }}
      >
        {todo.text}
      </div>
      <div className="icons">
        <RiCloseCircleLine
          className="delete-icon"
          onClick={() => {
            removeTodo(todo.id);
          }}
        />
        <TiEdit
          className="edit-icon"
          onClick={() => {setEdit({id:todo.id,value:todo.text})}}
        />
      </div>
    </div>
  ));
};
