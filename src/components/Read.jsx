import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Read = () => {
  // const [errors, seterrors] = useState("");

  const [data, setdata] = useState([]);

  const fetchData = async () => {
    const response = await axios.get("https://technotes-api.onrender.com")
    const result = response.data
    setdata(result)
    console.log(data)


  }


  useEffect(() => {
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  



  const handleDelete = async (id) => {
    const response = await fetch(`https://technotes-api.onrender.com/${id}`, {
      method: "DELETE"
    })

    const result = await response.json()

    if (!response.ok) {
      console.log(result.error)

    }

    if (response.ok) {
      setTimeout(() => {
        fetchData()
      }, 2000);
    }



  }
  return <div className="container my-2 mybodys">
    <h2 className="text-center">ALL DATA</h2>
    <div className="row">

      {
        data && data.map((user) => (
          <div key={user._id} className="col-4">
            <div className="card mybody" >

              <div className="card-body">
                <h5 className="card-title">{user.name}</h5>
                <p><strong>{user.email}</strong></p>

                <p><strong>{user.age}</strong></p>

                <Link to={`/${user._id}`} className="btn btn-success">Edit</Link>
                <a href="#" className="btn btn-danger" onClick={() => handleDelete(user._id)}>DELETE</a>
              </div>

            </div>
          </div>
        ))
      }


    </div>





    {/* {
  data &&data.map((user)=>(
    <div className="box" key={user._id}>
      <h1>{user.name}</h1>
      <h1>{user.email}</h1>
      <h1>{user.age}</h1>
    </div>
  ))
} */}



  </div>;
};

export default Read;
