import "./TaskList.scss";
import { MdDelete } from "react-icons/md";
import { useTask } from "../../services/GetApi";
import { useDeleteTask } from "../../services/DeleteApi";

const TaskList = () => {
  const { data: taskData } = useTask();
  const { mutation: deleteTask } = useDeleteTask();
  const incompleteTasks = taskData
    ? taskData.filter((task: any) => !task.status)
    : [];

  const handleDelete = async (productId: string) => {
    try {
      const userConfirmed = window.confirm("Are you sure to delete?");
      if (userConfirmed) {
        await deleteTask.mutate(productId);
      }
    } catch (error) {}
  };

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
                <td className="MdDelete" onClick={() => handleDelete(task._id)}>
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
