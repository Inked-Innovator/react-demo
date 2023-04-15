import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Todoinput from './components/Todoinput';
import Todolist from './components/Todolist';

function App() {
  const [listTodo, setListTodo] = useState([]);

  const addList = (inputText) => {
    if (inputText !== "") {
      setListTodo([...listTodo, inputText]);
    }
  };

  const deleteListitem = (key) => {
    let newListTodo = [...listTodo];
    newListTodo.splice(key, 1);
    setListTodo([...newListTodo]);
  };

  return (
    <div className="App">
      <nav className="navbar">
        <div className="logo">Logo</div>
        <div className="nav-links">
          <a href="#" className="nav-link">
            Home
          </a>
          <a href="#" className="nav-link">
            About
          </a>
          <a href="#" className="nav-link">
            Contact
          </a>
        </div>
      </nav>
      <div className="input-container">
        <Header />
        <Todoinput addList={addList} />
        <h1 className="app-heading">To Do List</h1>
        <hr />
        {listTodo.map((listItem, i) => (
          <Todolist
            key={i}
            index={i}
            item={listItem}
            deleteitem={deleteListitem}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
