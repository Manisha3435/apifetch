 import { useState } from "react";
 import { List } from "./components/List";
 import Sign from "../src/Sign"
 import "./App.css";

 function App() {
   const [todo, setTodo] = useState("");
 const [input, setInput] = useState([]);

   const addItem = () => {
     const newTodo = {
       id: Math.random(),
       item: todo,
       done: false,
     };
     setInput((prev) => [...prev, newTodo]);
     setTodo("");
   };

   const onDelete = (index) => {
     setInput((prev) => {
       const updatedInput = [...prev];
       updatedInput.splice(index, 1);
       return updatedInput;
     });
   };

   return (
     <>
       <div className="App">
         <h1>Todo List</h1>
         <div className="adder">
           <input
             type="text"
             placeholder="enter your test"
             value={todo}
             onChange={(e) => setTodo(e.target.value)}
           />
           <button onClick={addItem}>+</button>
         </div>
       </div>
       <List input={input} onDelete={onDelete} />
       <Sign />
     </>
   );
 }

 export default App;


