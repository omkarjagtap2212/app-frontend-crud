import { useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";

const Createpost = () => {


  const navigate = useNavigate()
  const [Name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [Age, setAge] = useState(0);




  const handleData = async (e) => {
    e.preventDefault()

    if (Name?.trim() === "") {
      return alert("name cannot be empty")

    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return alert("please enter a valid email id ")

    }

    if (Age <= 0) {
      return alert("please enter valid age")
    }


    //trying to sending data to the backend using axios or fectch


    try {
      const response = await axios.post("http://localhost:8000", {
        name: Name,
        email: email,
        age: Age
      })

      console.log("Response from bakckend", response.data)

      setName("");
      setEmail("");
      setAge(0);

      alert("Data submitted successfully!")
      navigate("/read")


    } catch (error) {
      console.log(error)

    }






    console.log(Age, email, Name)






  }


  return <div className="container my-2">
    <h2 className="text-center">Enter the Data </h2>
    <form onSubmit={handleData}>


      <div className="mb-3">
        <label className="form-label">Name</label>
        <input type="text" className="form-control" value={Name} onChange={(e) => setName(e.target.value)} />
      </div>

      <div className="mb-3">
        <label className="form-label">Email address</label>
        <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>

      <div className="mb-3">
        <label className="form-label">Age</label>
        <input type="number" className="form-control" value={Age} onChange={(e) => setAge(e.target.value)} />

      </div>


      <button type="submit" className="btn btn-primary">Submit</button>
    </form>



  </div>;
};

export default Createpost;
