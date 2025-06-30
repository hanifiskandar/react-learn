import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../../supabaseClient";

export default function PostIndex() {
  const [posts, setPosts] = useState([]);
  const statusOptions = ["pending", "approve", "amend"];

  useEffect(() => {
    fetchPosts();
  }, []); 

  const fetchPosts = async () => {
    const { data, error } = await supabase
      .from("posts")
      .select("*")
      .order("id", { ascending: true });

    if (error) console.error(error);
    else setPosts(data);
  };

  const handleDelete = async (id) => {
    const { error } = await supabase.from("posts").delete().eq("id", id);
    if (!error) {
      setPosts(posts.filter((post) => post.id !== id)); // update UI immediately
    }
  };

  return (
    <div>
      <h2>Posts List</h2>
      <h3>Test</h3>
      <h3>Select Status (checkbox)</h3>
      {statusOptions.map((status) => (
        <label key={status} style={{ display: "block" }}>
          <input
            type="checkbox"
            value={status}
            onChange={(e) => console.log("checked.", status, e.target.checked)}
          />
          {status}
        </label>
      ))}
      <p>----------------------------------</p>

      <h3>Select Status (Radio)</h3>
      {statusOptions.map((status) => (
        <label key={status} style={{ display: "block" }}>
          <input
            type="radio"
            name="status"
            value={status}
            onChange={() => console.log("Selected:", status)}
          />
          {status}
        </label>
      ))}

      <p>----------------------------------</p>
      <h3>Select Status (Dropdown)</h3>
      <select onChange={(e) => console.log("selected:", e.target.value)}>
        <option value="">-- Choose Status --</option>
        {statusOptions.map((status) => (
          <option key={status} value={status}>
            {status}
          </option>
        ))}
      </select>
      <p>----------------------------------</p>

      <Link to="/posts/add">Add New Post</Link>
      {/* <pre>{JSON.stringify(posts, null, 2)}</pre> */}

      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {post.title} {post.completed ? "✅" : ""}{" "}
            <Link to={`/posts/edit/${post.id}`}>✏️ Edit</Link>{" "}
            <button onClick={() => handleDelete(post.id)}>🗑️ Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
