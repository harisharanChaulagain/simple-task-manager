const Task = require("../models/Task");

// Get all tasks
exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create a new task
exports.createTask = async (req, res) => {
  const { name, priority } = req.body;

  try {
    const newTask = new Task({ name, priority });
    const savedTask = await newTask.save();
    res.json(savedTask);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//delete task
exports.deleteTaskById = async (req, res) => {
  try {
    const taskId = req.params.id;
    if (!taskId) {
      return res.status(400).json({ error: "Task id is rewuired" });
    }
    const task = await Task.findById(taskId);
    if (!task) {
      return res.status(404).json({ error: "Task not found" });
    }
    await Task.deleteOne({ _id: taskId });
    res.status(200).json({ message: "Task deleted successfuly" });
  } catch (error) {
    console.log("Error deleting task:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
