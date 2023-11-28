import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Detail = () => {
  const paramId = useParams().id;
  const todos = useSelector((state) => state.todos);

  const filteredTodo = todos.filter((item) => {
    return item.id === paramId;
  })[0];

  return (
    <div>
      <div>TODO</div>
      <h3>{filteredTodo.title}</h3>
      <p>{filteredTodo.body}</p>
    </div>
  );
};

export default Detail;
