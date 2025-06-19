import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../../supabaseClient";

export default function PostIndex() {
  const [posts, setPosts] = useState([]);

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
      <Link to="/posts/add">Add New Post</Link>

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
