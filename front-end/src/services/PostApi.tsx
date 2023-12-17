import { useMutation, useQueryClient } from "react-query";
import axios from "axios";

const postTask = async ({
  taskName,
  priority,
}: {
  taskName: string;
  priority: string;
}) => {
  const response = await axios.post("http://localhost:3001/api/v1/tasks", {
    name: taskName,
    priority,
  });

  return response.data;
};

const usePostTask = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation(postTask, {
    onSuccess: () => {
      queryClient.invalidateQueries("tasks");
    },
  });

  return mutation;
};

export default usePostTask;
