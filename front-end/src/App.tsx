import TaskList from "./components/TaskList/TaskList";
import "./App.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TaskForm from "./components/TaskForm/TaskForm";

const App = () => {
  const [newTask, setNewTask] = useState(false);
  const navigate = useNavigate();

  return (
    <div>
      <div className="app-main">
        <div className="left">My Tasks</div>
        <div className="right">
          <button className="add-new" onClick={() => setNewTask(true)}>
            Add New Task
          </button>
          <button className="view-task" onClick={() => navigate("/completed")}>
            View Completed Task
          </button>
        </div>
      </div>
      <TaskList />
      {newTask && <TaskForm onClose={() => setNewTask(false)} />}
    </div>
  );
};

export default App;
