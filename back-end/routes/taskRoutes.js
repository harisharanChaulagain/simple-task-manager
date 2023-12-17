const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskController");

router.route("/v1/tasks").get(taskController.getAllTasks);
router.route("/v1/tasks").post(taskController.createTask);
router.route("/v1/tasks/:id").delete(taskController.deleteTaskById);

module.exports = router;
