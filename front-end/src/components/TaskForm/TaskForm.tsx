import { MdClose } from "react-icons/md";
import "./TaskForm.scss";
interface TaskProps {
  onClose: () => void;
}

const TaskForm: React.FC<TaskProps> = ({ onClose }) => {
  return (
    <div className="overlay">
      <div className="task-form-container">
        <div className="top-section">
          <h3>Add New Task</h3>
          <div className="mdClose">
            <MdClose onClick={onClose} />
          </div>
        </div>
        <form>
          <div className="items">
            <div>Task Name</div>
            <input type="text" />
          </div>
          <div className="items">
            <div>Description</div>
            <textarea rows={4} cols={63} style={{ resize: "none" }} />
          </div>
          <div className="items">
            <div>Priority</div>
            <select defaultValue="" className="priority-select">
              <option value="" disabled hidden>
                Select Priority
              </option>
              <option value="high">High</option>
              <option value="moderate">Moderate</option>
              <option value="low">Low</option>
            </select>
          </div>
          <div className="saveBtn">
            <button>Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskForm;
