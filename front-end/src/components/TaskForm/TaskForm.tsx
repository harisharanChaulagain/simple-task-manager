import { MdClose } from "react-icons/md";
import "./TaskForm.scss";
import React, { useState } from "react";
import usePostTask from "../../services/PostApi";
interface TaskProps {
  onClose: () => void;
}

const TaskForm: React.FC<TaskProps> = ({ onClose }) => {
  const [taskName, setTaskName] = useState("");
  const [priority, setPriority] = useState("");
  const postTaskMutation = usePostTask();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    postTaskMutation.mutate({ taskName, priority });
  };

  return (
    <div className="overlay">
      <div className="task-form-container">
        <div className="top-section">
          <h3>Add New Task</h3>
          <div className="mdClose">
            <MdClose onClick={onClose} />
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="items">
            <div>Task Name</div>
            <input
              type="text"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
            />
          </div>
          <div className="items">
            <div>Priority Level</div>
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="priority-select"
            >
              <option value="" disabled hidden>
                Select Priority
              </option>
              <option value="high">High</option>
              <option value="moderate">Moderate</option>
              <option value="low">Low</option>
            </select>
          </div>
          <div className="saveBtn">
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskForm;
