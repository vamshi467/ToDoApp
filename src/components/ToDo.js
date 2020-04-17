import React, { useState } from "react";
import Logo from "../assets/logo.png";
import ToDoItem from "./ToDoItem";
import "./ToDo.css";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const ToDo = () => {
  const [list, setList] = useState([
    { id: 1, text: "clean the house" },
    { id: 2, text: "buy milk" }
  ]);
  const [toDo, setToDo] = useState("");

  const generateId = () => {
    if (list && list.length > 1) {
      return Math.max(...list.map((t) => t.id)) + 1;
    } else {
      return 1;
    }
  };

  const createNewToDoItem = () => {
    //validate todo
    if (!toDo) {
      alert("Please enter a todo!");
      return;
    }
    const newId = generateId();
    const newToDo = { id: newId, text: toDo };
    setList([...list, newToDo]);
    setToDo("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      createNewToDoItem();
    }
  };

  const handleInput = (e) => {
    setToDo(e.target.value);
  };

  const deleteItem = (id) => {
    setList(list.filter((item) => item.id !== id));
  };

  return (
    <div className="ToDo">
      <img className="Logo" src={Logo} alt="React logo" />
      <h1 className="ToDo-Header">React To Do</h1>
      <div className="ToDo-Container">
        <div className="ToDo-Content">
          {list.map((item) => {
            return <ToDoItem key={item.id} item={item} deleteItem={deleteItem} />;
          })}
        </div>

        <div className="ToDoInput">
          <input type="text" value={toDo} onChange={handleInput} onKeyPress={handleKeyPress} />
          {/* <button className="ToDo-Add" onClick={createNewToDoItem}>
            +
          </button> */}
          <Button variant="contained" color="primary" onClick={createNewToDoItem}>
                   AddItems
          </Button>
          <Grid
  container
  direction="row"
  justify="center"
  alignItems="center"
></Grid>
        </div>
      </div>
    </div>
  );
};

export default ToDo;
