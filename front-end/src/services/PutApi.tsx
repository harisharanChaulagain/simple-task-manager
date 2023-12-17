import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

interface UpdateTaskStatusRequest {
  taskId: string;
  status: boolean;
}

const useTaskCompleted = () => {
  const queryClient = useQueryClient();

  const updateTaskStatusRequest = async ({
    taskId,
    status,
  }: UpdateTaskStatusRequest) => {
    try {
      const response = await axios.put(
        `http://localhost:3001/api/v1/tasks/${taskId}`,
        { status }
      );

      console.log("Response from API:", response.data);

      queryClient.invalidateQueries("tasks");
    } catch (error) {
      console.error("Error updating task status:", error);
      throw error;
    }
  };

  const mutation = useMutation(updateTaskStatusRequest);

  return { updateTaskStatus: mutation.mutate };
};

export default useTaskCompleted;
