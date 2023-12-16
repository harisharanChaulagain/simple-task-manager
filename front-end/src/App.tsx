import TaskList from "./components/TaskList/TaskList";
import "./App.scss";
import { useState } from "react";
import TaskForm from "./components/TaskForm/TaskForm";

const App = () => {
  const [newTask, setNewTask] = useState(false);

  return (
    <div>
      <div className="app-main">
        <div className="left">My Tasks</div>
        <div className="right">
          <button className="add-new" onClick={() => setNewTask(true)}>
            Add New Task
          </button>
          <button className="view-task">View Completed Task</button>
        </div>
      </div>
      <TaskList />
      {newTask && <TaskForm onClose={() => setNewTask(false)} />}
    </div>
  );
};

export default App;
