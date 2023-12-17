import { IoArrowBack } from "react-icons/io5";
import "./TaskCompletion.scss";
import { useTask } from "../../services/GetApi";
import { useNavigate } from "react-router-dom";

const TaskCompletion = () => {
  const navigate = useNavigate();
  const { data: taskData } = useTask();
  const completedTasks = taskData
    ? taskData.filter((task: any) => task.status)
    : [];
  return (
    <div className="completed-task">
      <div className="top-section">
        <div className="back-button">
          <button onClick={() => navigate(-1)}>
            <IoArrowBack />
            Back
          </button>
        </div>
        <h3>List of All Completed Task</h3>
      </div>
      <table>
        <thead>
          <tr>
            <th>S.N.</th>
            <th>Task Name</th>
            <th>Priority Level</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {completedTasks &&
            completedTasks.map((task: any, index: number) => (
              <tr key={task._id}>
                <td>{index + 1}</td>
                <td>{task.name}</td>
                <td>{task.priority}</td>
                <td>Completed</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskCompletion;
