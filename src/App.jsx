import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import TaskApp from "./pages/TaskApp";
import UserCRUD from "./pages/UserCRUD";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="tasks" element={<TaskApp />} />
          <Route path="users" element={<UserCRUD />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
