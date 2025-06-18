import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const [testing, setTesting] = useState("");

  const [editingId, setEditingId] = useState(null);
  const [editingTitle, setEditingTitle] = useState("");

  // Add new task
  const handleAddTask = (e) => {
    e.preventDefault(); // prevent page refresh

    if (newTask.trim() === "") return;

    const task = {
      id: Date.now(),
      title: newTask,
      completed: false,
    };

    setTasks([...tasks, task]);
    setNewTask("");
  };

  // Delete
  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle complete
  const handleToggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Start editing
  const handleStartEdit = (task) => {
    setEditingId(task.id);
    setEditingTitle(task.title);
  };

  // Save edited task
  const handleSaveEdit = (id) => {
    if (editingTitle.trim() === "") return;

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, title: editingTitle } : task
      )
    );

    setEditingId(null);
    setEditingTitle("");
  };

  // Cancel edit
  const handleCancelEdit = () => {
    setEditingId(null);
    setEditingTitle("");
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "500px", margin: "auto" }}>
      <h1>📝 Task App</h1>
      <pre>{JSON.stringify(tasks, null, 2)}</pre>
      {/* <pre>{tasks}</pre> */}
      {/* This is not valid, because React tries to render each object as a string.
       But objects can’t be directly rendered, and this causes rendering issues — possibly even a crash depending on the state. */}

      {testing}

      <input type="text" onChange={(e) => setTesting(e.target.value)} />
      
      <form
        onSubmit={handleAddTask}
        style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem" }}
      >
        <input
          type="text"
          placeholder="Enter task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          style={{ flex: 1, padding: "0.5rem" }}
        />
        <button type="submit">Add</button>
      </form>

      {tasks.length === 0 && <p>No tasks yet</p>}

      <ul style={{ listStyle: "none", padding: 0 }}>
        {tasks.map((task) => (
          <li
            key={task.id}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              marginBottom: "0.5rem",
              padding: "0.5rem",
              background: "#f1f1f1",
              borderRadius: "4px",
            }}
          >
            {editingId === task.id ? (
              <>
                <input
                  value={editingTitle}
                  onChange={(e) => setEditingTitle(e.target.value)}
                  style={{ flex: 1 }}
                />
                <button onClick={() => handleSaveEdit(task.id)}>💾</button>
                <button onClick={handleCancelEdit}>❌</button>
              </>
            ) : (
              <>
                <span
                  onClick={() => handleToggleComplete(task.id)}
                  style={{
                    textDecoration: task.completed ? "line-through" : "none",
                    cursor: "pointer",
                    flex: 1,
                  }}
                >
                  {task.title}
                </span>
                <button onClick={() => handleStartEdit(task)}>✏️</button>
                <button onClick={() => handleDelete(task.id)}>🗑️</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
