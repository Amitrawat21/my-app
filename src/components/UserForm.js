
import React, { useState } from "react";
import "./UserDetailsForm.css";

function UserForm() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  // const [location, setLocation] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = { name, age, email, mobile };
    const response = await fetch("http://localhost:8003/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    console.log(result);
  };

  return (
    <>
    <h1 style={{display  : "flex" , justifyContent : "center"}}>add user detail</h1>
      <form onSubmit={handleSubmit} className="form-container">
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Age:
          <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Mobile:
          <input type="text" value={mobile} onChange={(e) => setMobile(e.target.value)} />
        </label>
        {/* <label>
          Location:
          <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
        </label> */}
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </>
     
    
    );
  
  
}

export default UserForm;