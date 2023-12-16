import "./TaskList.scss";
import { MdDelete } from "react-icons/md";

const TaskList = () => {
  return (
    <div className="task-list-main">
      <table>
        <thead>
          <tr>
            <th>S.N.</th>
            <th>Task Name</th>
            <th>Priority</th>
            <th>Action</th>
            <th>Completed</th>
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
            <td>
              <input type="checkbox" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
