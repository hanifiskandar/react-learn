import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../supabaseClient";

export default function AddPost() {
  const [title, setTitle] = useState("");
  const [completed, setCompleted] = useState(false);
  const navigate = useNavigate();

  const handleAdd = async () => {
    if (!title.trim()) return;

    const { error } = await supabase.from("posts").insert([
      {
        title,
        completed, // include the checkbox value
      },
    ]);

    if (!error) navigate("/posts");
  };

  return (
    <div>
      <h2>Add Post</h2>

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

      <button onClick={handleAdd}>Save</button>
    </div>
  );
}
