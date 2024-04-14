import { useState } from "react";

import CreateTask from "./CreateTask";

export default function Tasks({ onCreate, onDelete, tasks }) {
  const [enteredTask, setEnteredTask] = useState("");

  function handleChange(e) {
    setEnteredTask(e.target.value);
  }

  function handleClick() {
    if (enteredTask.trim() === "") {
      return;
    }
    onCreate(enteredTask);
    setEnteredTask("");
  }

  return (
    <div className='mt-4'>
      <h1 className='text-2xl font-bold text-stone-700 mb-2'>Tasks</h1>
      <div className='mb-4'>
        <input
          onChange={(e) => handleChange(e)}
          value={enteredTask}
          type='text'
          className='bg-stone-200 p-1 w-1/3 rounded-sm border-stone-300 text-stone-600 mr-5'
        />
        <button onClick={handleClick}>Add Task</button>
      </div>
      {tasks.length === 0 && <p>This project does not have any tasks yet.</p>}
      {tasks.length > 0 && (
        <div className='flex flex-col w-3/4 p-5 px-2 bg-stone-100 mt-8'>
          {tasks.map((task) => (
            <CreateTask
              name={task.text}
              deleteTask={onDelete}
              id={task.id}
              key={task.id}
            />
          ))}
        </div>
      )}
    </div>
  );
}
