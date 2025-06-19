
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../../supabaseClient";

export default function EditPost() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [completed, setCompleted] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    fetchPost();
  }, []);

  const fetchPost = async () => {
    const { data, error } = await supabase
      .from("posts")
      .select("*")
      .eq("id", id)
      .single();
    if (data) setTitle(data.title) ,setCompleted(data.completed);
  };

  const handleUpdate = async () => {
    const { error } = await supabase
      .from("posts")
      .update({ title, completed })
      .eq("id", id);
    if (!error) navigate("/posts");
  };

  return (
    <div>
      <h2>Edit Post</h2>
      <div style={{ marginBottom: "1rem" }}>
        <input
            type="text"
            placeholder="Post title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <label>
          <input
            type="checkbox"
            checked={completed}
            onChange={(e) => setCompleted(e.target.checked)}
          />{" "}
          Completed
        </label>
      </div>
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}
