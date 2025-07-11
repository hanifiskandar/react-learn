import { useState } from "react";

export function CarForm({ onSubmit }) {
  const [newCar, setNewCar] = useState({
    title: "",
    content: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setNewCar((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const isValid = Object.values(newCar).every((value) => value.trim() !== "");

    if (!isValid) {
      alert("Please fill in all the fields");
      return;
    }

    onSubmit(newCar);
    setNewCar({ title: "", content: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        name="title"
        placeholder="Post Title"
        value={newCar.title}
        onChange={handleChange}
        className="border p-2 mb-2 w-full"
      />

      <textarea
        name="content"
        placeholder="Post Content"
        value={newCar.content}
        onChange={handleChange}
        className="border p-2 mb-2 w-full"
      />

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add Car
      </button>
    </form>
  );
}