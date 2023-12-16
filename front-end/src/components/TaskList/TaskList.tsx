import "./TaskList.scss";
import { MdDelete } from "react-icons/md";
import { useTask } from "../../services/GetApi";

const TaskList = () => {
  const { data: taskData } = useTask();
  const incompleteTasks = taskData
    ? taskData.filter((task: any) => !task.status)
    : [];
  return (
    <div className="task-list-main">
      <table>
        <thead>
          <tr>
            <th>S.N.</th>
            <th>Task Name</th>
            <th>Priority Level</th>
            <th>Action</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {incompleteTasks &&
            incompleteTasks.map((task: any, index: number) => (
              <tr key={task._id}>
                <td>{index + 1}</td>
                <td>{task.name}</td>
                <td>{task.priority}</td>
                <td className="MdDelete">
                  <MdDelete />
                </td>
                <td>
                  <input type="checkbox" />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
