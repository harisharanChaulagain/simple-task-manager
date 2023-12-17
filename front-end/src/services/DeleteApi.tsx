import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

// Delete task
export const useDeleteTask = () => {
  const queryClient = useQueryClient();

  const deleteRequest = async (taskId: string) => {
    try {
      const response = await axios.delete(
        `http://localhost:3001/api/v1/tasks/${taskId}`
      );

      console.log("Response from API:", response.data);

      queryClient.invalidateQueries("tasks");
    } catch (error) {
      console.error("Error deleting tasks:", error);
      throw error;
    }
  };

  const mutation = useMutation(deleteRequest);

  return { mutation };
};
