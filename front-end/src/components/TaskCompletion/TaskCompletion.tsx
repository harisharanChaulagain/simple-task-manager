import { MdDelete } from "react-icons/md";
import { IoArrowBack } from "react-icons/io5";
import "./TaskCompletion.scss";
import { useNavigate } from "react-router-dom";

const TaskCompletion = () => {
  const navigate = useNavigate();
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
            <th>Action</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1.</td>
            <td>this is new task</td>
            <td>high</td>
            <td className="MdDelete">
              <MdDelete />
            </td>
            <td>Completed</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TaskCompletion;
