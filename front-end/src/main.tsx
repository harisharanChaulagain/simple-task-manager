import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TaskCompletion from "./components/TaskCompletion/TaskCompletion";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/completed" element={<TaskCompletion />} />
    </Routes>
  </BrowserRouter>
);
