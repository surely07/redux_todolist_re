import React, { useState } from "react";
import { useDispatch } from "react-redux";
import shortid from "shortid";
import { styled } from "styled-components";
import { addTodo } from "../modules/todos";

function Input() {
  const [title, setTitle] = useState();
  const [body, setBody] = useState();

  const dispatch = useDispatch();

  const HandleAddTodo = (e) => {
    e.preventDefault();

    const newTodo = {
      id: shortid.generate(),
      title,
      body,
      isDone: false,
    };
    dispatch(addTodo(newTodo));
    setTitle("");
    setBody("");
  };

  const HandleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const HandleBodyChange = (e) => {
    setBody(e.target.value);
  };

  return (
    <StInput>
      <StForm onSubmit={HandleAddTodo}>
        <label>제목</label>
        <input value={title} onChange={HandleTitleChange} type="text" />
        <label>내용</label>
        <input value={body} onChange={HandleBodyChange} type="text" />
        <button type="submit">추가하기</button>
      </StForm>
    </StInput>
  );
}

export default Input;

const StInput = styled.div`
  background-color: #b5e5be;
  padding: 20px;
`;

const StForm = styled.form`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;
