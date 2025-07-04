import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function Index() {
    const [students, setStudents] = useState([
        { 'id': 1, 'name': "Hanif"},
        { 'id': 2, 'name': "Sya"},
        { 'id': 3, 'name': "Baby"},
    ])

    return (
        <div>
            <h2>Student List</h2>
        </div>
    )


 }