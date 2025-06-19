
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../../supabaseClient";

export default function EditPost() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
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
    if (data) setTitle(data.title);
  };

  const handleUpdate = async () => {
    const { error } = await supabase
      .from("posts")
      .update({ title })
      .eq("id", id);
    if (!error) navigate("/posts");
  };

  return (
    <div>
      <h2>Edit Post</h2>
      <input
        type="text"
        placeholder="Post title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}
