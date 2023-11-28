import React from "react";
import Header from "../redux/components/Header";
import Input from "../redux/components/Input";
import TodoList from "../redux/components/TodoList";
import Footer from "../redux/components/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Input />
      <TodoList isActive={true} />
      <TodoList isActive={false} />
      <Footer />
    </div>
  );
};

export default Home;
