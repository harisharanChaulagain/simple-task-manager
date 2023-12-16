import { useQuery } from "react-query";
import axios from "axios";

const fetchTaskData = async (): Promise<any> => {
  try {
    const response = await axios.get("http://localhost:3001/api/v1/tasks");
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch task data from API");
  }
};

export const useTask = () => {
  return useQuery<any>("taskData", fetchTaskData);
};
