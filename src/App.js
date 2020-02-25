import React from 'react';
import logo from './logo.svg';
import './App.css';
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};
function App() {
  return (
    <div >
      
      <Slider {...settings}>
        <div>
          <h3>1</h3>
          <image src(https://duckduckgo.com/?q=puppies&atb=v179-1&iax=images&ia=images&iai=http%3A%2F%2Fcdn.akc.org%2Fcontent%2Farticle-body-image%2Fanatolian_shepherd_header_.jpg)
        </div>
        <div>
          <h3>2</h3>
          image src(https://duckduckgo.com/?q=puppies&atb=v179-1&iax=images&ia=images&iai=http%3A%2F%2Ffarm4.staticflickr.com%2F3026%2F2936620191_4523c4a9c2_z.jpg)
        </div>
        <div>
          <h3>3</h3>
          image src(https://duckduckgo.com/?q=puppies&atb=v179-1&iax=images&ia=images&iai=http%3A%2F%2F1.bp.blogspot.com%2F-U0QOCIf8yj4%2FUIaa1ov-59I%2FAAAAAAAABKc%2F5Up9yQqrS5M%2Fs1600%2FShih_Tzu_Puppies.JPG)
        </div>
        <div>
          <h3>4</h3>
          image src(https://duckduckgo.com/?q=puppies&atb=v179-1&iax=images&ia=images&iai=http%3A%2F%2F1.bp.blogspot.com%2F__82348puvBM%2FTACA7PXeDNI%2FAAAAAAAAAB4%2FDnVPw_0wnjw%2Fs1600%2Fgolden-retriever-puppies.jpg)
        </div>
        <div>
          <h3>5</h3>
          image src(https://duckduckgo.com/?q=puppies&atb=v179-1&iax=images&ia=images&iai=https%3A%2F%2Fi.ytimg.com%2Fvi%2FJZqvuBxEDnw%2Fmaxresdefault.jpg)
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        import React, { useState } from "react";
import "./App.css";

const Todo = ({ todo }) => <div className="todo">{todo.text}</div>;

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}

function App() {
  const [todos, setTodos] = useState([
    { text: "Get psyched to learn React" },
    { text: "Have several meltdowns trying to get code functioning" },
    { text: "Push through and actually make a really cool and useful program" }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}
  export default App;
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
   
    </div>
  );
}

export default App;
