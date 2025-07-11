import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { supabase } from "../../supabaseClient";

export default function Index() {
    const [students, setStudents] = useState([
        { 'id': 1, 'name': "Hanif"},
        { 'id': 2, 'name': "Sya"},
        { 'id': 3, 'name': "Baby"},
    ])
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);
    const [newStudent, setNewStudent] =useState({name: '', grade: ''})
    const isShow = false;
    const isLihat = true;

    const getStudents = async () => {
      try {
        setLoading(true);
        const {data, error} = await supabase
        .from('students')
        .select('*');

        if(error) throw error;

        setStudents(data);
        setError(null)
      } catch (err) {
        setError(err.message);
        console.error("Error fetching students",  err)
      } finally {
        setLoading(false);
      }
    }

    const createStudent = async (studentData) => {
      try {
        const { data, error } = await supabase
        .from('students')
        .insert([studentData])
        .select();

        if (error) throw error;

        setStudents([...students, data[0]]);
        setError(null);

        setNewStudent({name: '', grade: ''});


      } catch (err) {
        setError(err.message);
        console.error("Error creating student", err)
      }
    }

    return (
      <div>
        {isShow &&  <div>Student X</div>}
        {isLihat && <div>Student Lihat</div>}
        {isLihat ? <div> AA</div> : <div>BB</div>}
        <h2>Student List</h2>
        <table>
          <tr>
            <th>Id</th>
            <th>Name</th>
          </tr>
          <tbody>
            {students.map((std) => (
              <tr key={std.id}>
                <td>{std.id}</td>
                <td>{std.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );


 }