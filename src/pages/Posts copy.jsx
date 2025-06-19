import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

export default function Posts() {
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
      <h1>Posts from Supabase</h1>
      <pre>{JSON.stringify(posts, null, 2)}</pre>

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
