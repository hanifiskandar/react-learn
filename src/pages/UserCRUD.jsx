import { useState } from "react";

export default function UserCRUD() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState("");

  const handleAdd = () => {
    if (newUser.trim() === "") return;

    const user = { id: Date.now(), name: newUser };
    setUsers([...users, user]);
    setNewUser("");
  };

  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div>
      <h2>User CRUD</h2>
      <input
        type="text"
        value={newUser}
        onChange={(e) => setNewUser(e.target.value)}
        placeholder="Enter user name"
      />
      <button onClick={handleAdd}>Add</button>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name}{" "}
            <button onClick={() => handleDelete(user.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
