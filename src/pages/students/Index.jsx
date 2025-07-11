import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function Index() {
    const [students, setStudents] = useState([
        { 'id': 1, 'name': "Hanif"},
        { 'id': 2, 'name': "Sya"},
        { 'id': 3, 'name': "Baby"},
    ])
    const isShow = false;
    const isLihat = true;

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