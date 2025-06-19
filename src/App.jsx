import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import TaskApp from "./pages/TaskApp";
import UserCRUD from "./pages/UserCRUD";
import Posts from "./pages/posts/Index";
import AddPost from "./pages/posts/Add";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="tasks" element={<TaskApp />} />
          <Route path="users" element={<UserCRUD />} />
          {/* <Route path="posts" element={<Posts />} /> */}

          <Route path="posts">
            <Route index element={<Posts />} />
            <Route path="add" element={<AddPost />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
