import { useState, useEffect } from "react";

import TaskApp from "./pages/TaskApp"; // move your existing task code here
import UserCRUD from "./pages/UserCRUD";

function MyButton() {
  return <button>I'm a button</button>;
}

function MyComponentX() {
  return (
    <>
      <h1>Hello</h1>
      <p>This is wrapped in a fragment</p>
    </>
  );
}



function App() {
  const [currentView, setCurrentView] = useState("task");
  const [car, setCar] = useState("");
  const [carArr, setCarArr] = useState(['Proton', 'Perodua', 'Honda'])
  const [fruits, setFruits] = useState([
    { id: 1, name: "Apple" },
    { id: 2, name: "Perodua" },
    { id: 3, name: "Honda" },
  ]);

  const setNewCar = (e) => {
   const newTT = "ACD CAR";

   setCar(newTT);
  }

  useEffect(() => {
    console.log("car is changing");
    console.log("car updated:", car);

  }, [car]);

  useEffect(() => {
    console.log("Runs once when the component mounts");
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>🧪 CRUD Tester</h1>
      <div style={{ marginBottom: "1rem" }}>
        <button onClick={() => setCurrentView("task")}>Task App</button>
        <button onClick={() => setCurrentView("user")}>User CRUD</button>
      </div>

      {currentView === "user" && <UserCRUD />}
      {currentView === "task" && <TaskApp />}

      <input type="text" onChange={(e) => setCar(e.target.value)} />

      <button onClick={setNewCar}>✏️</button>

      <pre>{JSON.stringify(carArr, null, 2)}</pre>
      <div>
        <ul>
          {carArr.map((carA, index) => (
            <li key="{index}">{carA}</li>
          ))}
        </ul>
      </div>
      <div>/----------------/</div>
      <div>
        <ul>
          {fruits.map((fruit) => (
            <li key="fruit.id">{fruit.name}</li>
          ))}
        </ul>
      </div>

      <MyButton />
      <MyComponentX/>
    </div>
  );
}

export default App;
