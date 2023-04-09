import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './UserTable.css';

function UserTable() {
  const history  = useNavigate()
  const [users, setUsers] = useState([]);

  function handleDelete(user) {
    console.log(user)
    fetch(`http://localhost:8003/deleteuser/${user._id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => {
        const updatedUsers = users.filter((u) => u._id !== user._id);
     
        setUsers(updatedUsers);
      })
      .catch((error) => {
        console.error("Error deleting user:", error);
      });
  }



  function handleEdit(user){
    history(`/edit/${user._id}`)

  }

  function handlelocation(user){
    history(`/location/${user._id}`)
    
  }

  useEffect(() => {
    fetch("http://localhost:8003/getdata")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);


console.log(users)

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Email</th>
          <th>Mobile</th>
          <th>Location</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.age}</td>
            <td>{user.email}</td>
            <td>{user.mobile}</td>
            <td>
              <button onClick={() => handlelocation(user)} >see your location</button>
            </td>
           
            <td>
              <button onClick={() => handleEdit(user)} >Edit</button>
            </td>
            <td>
              <button onClick={() => handleDelete(user)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default UserTable;
