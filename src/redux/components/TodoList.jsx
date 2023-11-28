import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { deleteTodo, switchTodo } from "../modules/todos";

function TodoList({ isActive }) {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const HandleCompleteButton = (id) => {
    dispatch(switchTodo(id));
  };
  const HandleDeleteButton = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <StTodoList>
      <h3>{isActive ? "해야할 일" : "완료된 일"}</h3>
      {todos
        .filter((item) => item.isDone !== isActive)
        .map((item) => {
          return (
            <StTodo key={item.id}>
              <h4>{item.title}</h4>
              <p>{item.body}</p>
              <button onClick={() => HandleCompleteButton(item.id)}>
                {isActive ? "완료" : "취소"}
              </button>
              <button onClick={() => HandleDeleteButton(item.id)}>삭제</button>
              <button
                onClick={() => {
                  navigate(`/${item.id}`);
                }}
              >
                상세보기
              </button>
            </StTodo>
          );
        })}
    </StTodoList>
  );
}

export default TodoList;

const StTodoList = styled.div`
  background-color: beige;
  padding: 20px;
`;

const StTodo = styled.div`
  border: 1px solid black;
  padding: 20px;
  margin: 10px;
`;
