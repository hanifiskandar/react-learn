import { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";
import { CarForm } from "../components/style1/CarForm";
// import { CarList } from "../components/style1/CarList";
//

export default function App() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCars = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("cars")
      .select("*")
      .order("id", { ascending: true });

    if(error)
        console.error("Error fetching cars: ", error)
    else
        setCars(data);
        setLoading(false);
  };

  const addCar = async (car) => {
    const { data, error } = await supabase
    .from("cars")
    .insert([car])

    if(error)
        console.error("Error adding car:", error)
    else
        setCars([...cars,...data])
  }

  const updateCar = async (id, updateCar) => {
    const { data, error } = await supabase
    .from("cars")
    .update(updateCar)
    .eq("id",id)

    if(error)
        console.error("Error updating car:", error)
    else
        setCars(cars.map(car => (car.id === id ? data[0] : car))) 
  }

  const deleteCar = async(id) => {
    const { error } = await supabase
    .from("cars")
    .delete()
    .eq("id", id)
    
    if(error)
        console.error("Error deleting data:", error)
    else
        setCars(cars.filter(car => car.id !== id))
  }

  //watch || onMounted()
  useEffect(() =>{
    fetchCars();
  },[])

  return (
    <div className="p-6 max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-4"> React + Supabase CRUD</h1>

        <CarForm onSubmit={addCar} />

        {loading ? (
            <p> Loading cars...</p>
        ) : (
            <p>Test</p>
            // <CarList cars={cars} onUpdate=(updateCar) onDelete={deleteCar} />
        )}

    </div>
  )



}
