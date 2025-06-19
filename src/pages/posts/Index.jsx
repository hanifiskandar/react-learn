

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

  return (
    <div>
      <h2>Posts List</h2>
      <Link to="/posts/add">Add New Post</Link>
      {/* You can fetch and display posts here like you did earlier */}

      <ul>
        {posts.map((posts) => (
          <li key={posts.id}>
            {posts.title} {posts.completed ? "✅" : ""}
          </li>
        ))}
      </ul>
    </div>
  );
}
