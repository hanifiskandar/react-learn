import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import TaskApp from "./pages/TaskApp";
import UserCRUD from "./pages/UserCRUD";
import Posts from "./pages/posts/Index";
import AddPost from "./pages/posts/Add";
import EditPost from "./pages/posts/Edit";



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
          <Route path="contact" element={<Contact/>}/>

          <Route path="posts">
            <Route index element={<Posts />} />
            <Route path="add" element={<AddPost />} />
            <Route path="edit/:id" element={<EditPost />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
