
import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDo("");
    setToDos(currentArray => [toDo, ...currentArray])
  }
  console.log(toDos);
  return <div>
    <h1>To Do List ({toDos.length})</h1>
    <form onSubmit={onSubmit}>
      <input onChange={onChange}
        value={toDo}
        type="text"
        placeholder="write you need to do" />
      <button>Add To Do</button>
    </form>
    <ul>
      {toDos.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>;
}
export default App;
