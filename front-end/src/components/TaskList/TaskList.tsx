import "./TaskList.scss";
import { MdDelete } from "react-icons/md";
import { useTask } from "../../services/GetApi";
import { useDeleteTask } from "../../services/DeleteApi";
import useTaskCompleted from "../../services/PutApi";

const TaskList = () => {
  const { data: taskData } = useTask();
  const { mutation: deleteTask } = useDeleteTask();
  const { updateTaskStatus } = useTaskCompleted();
  const incompleteTasks = taskData
    ? taskData.filter((task: any) => !task.status)
    : [];

  const handleDelete = async (taskId: string) => {
    try {
      const userConfirmed = window.confirm("Are you sure to delete?");
      if (userConfirmed) {
        await deleteTask.mutate(taskId);
      }
    } catch (error) {}
  };
  const handleTaskCompletion = (taskId: string) => {
    updateTaskStatus({ taskId, status: true });
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
                  <input
                    type="checkbox"
                    onChange={() => handleTaskCompletion(task._id)}
                  />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
