import { useState } from 'react'
import './App.css'

function App() {

  let [input, setinput] = useState('');
  let [task, settask] = useState([]);
  let [edittask, setedittask] = useState(null)

  const todo = (e) => {
    console.log(e.target.value);
    setinput(e.target.value);
  };

  const addTodo = () => {
    if (input === "") {
      return;
    }
    if (edittask !== null) {

      let updatetask = [...task]
      updatetask[edittask] = input;
      settask(updatetask);
      setedittask(null);
    }

    else {
      settask([...task, input]);
      console.log([...task, input]);

    }

    setinput('');
  }

  const deltodo = (index) => {

    let updatearr = task.filter((value, i) => {
      if (i !== index) {
        return value
      }
    })
    console.log(updatearr)
    settask(updatearr)
  }

  const edittodo = (index) => {
    setinput(task[index])
    setedittask(index)
  }


  return (
    <>
      <h1>Todo App</h1>
      <input type="text" value={input} onChange={todo} />
      <button onClick={addTodo}>Add</button>
      <ol>
        {
          task.map((e, index) => {
            return <li key={index}>{e} <button onClick={() => deltodo(index)}>delete</button> <button onClick={() => edittodo(index)}>Edit</button></li>
          })
        }
      </ol>
    </>
  )
}

export default App
