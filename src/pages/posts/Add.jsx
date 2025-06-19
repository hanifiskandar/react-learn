
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../supabaseClient";

export default function AddPost() {
  // const [title, setTitle] = useState("");
  // const navigate = useNavigate();

  // const handleAdd = async () => {
  //   if (!title.trim()) return;

  //   const { error } = await supabase.from("posts").insert([{ title }]);
  //   if (!error) navigate("/posts");
  // };
  console.log("AddPost rendered");


  return (
    <div>
      <h2>Add Post</h2>
      {/* <input
        type="text"
        placeholder="Post title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={handleAdd}>Save</button> */}
    </div>
  );
}
