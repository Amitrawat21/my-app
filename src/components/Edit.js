import React , {useState , useEffect} from 'react'
import {useParams , useNavigate} from "react-router-dom"

const Edit = () => {
    const {id} = useParams()
    const history = useNavigate()
    console.log(id , "this is id")
    const [edituser, setedituser] = useState("")

    const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [location, setLocation] = useState("");


  
  useEffect(() => {
    fetch(`http://localhost:8003/getuser/${id}`)
      .then((response) => response.json())
      .then((data) => setedituser(data));
      setName(edituser.name)
      setAge(edituser.age)
      setEmail(edituser.email)
      setMobile(edituser.mobile)
      setLocation(edituser.location)
  
  }, [edituser._id]);
  
  console.log(edituser)

  const hanleEditSubmit = async (event) => {
    event.preventDefault();
    const data = { name, age, email, mobile, location };
    const response = await fetch(`http://localhost:8003/updateuser/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    history("/")
    console.log(result);
  };






  return (
    <>
    <h1 style={{display  : "flex" , justifyContent : "center"}}>edit user detail</h1>
     <form  onSubmit={hanleEditSubmit}  className="form-container">
    <label>
      Name:
      <input type="text" value={name} onChange={(e)=> setName(e.target.value)}  />
    </label>
    <label>
      Age:
      <input type="number" value={age} onChange={(e)=>setAge(e.target.value)}  />
    </label>
    <label>
      Email:
      <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}   />
    </label>
    <label>
      Mobile:
      <input type="text" value={mobile} onChange={(e)=>setMobile(e.target.value)}   />
    </label>
    <label>
      Location:
      <input type="text" value={location} onChange={(e)=> setLocation(e.target.value)}  />
    </label>
    <button type="submit" className="submit-button">Submit</button>
  </form>

    </>
   
  )
}

export default Edit
