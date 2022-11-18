import React , { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const NewForm = () => {
 
    const baseUrl = "http://localhost:8080/api/user/"
  const [service, setService] = useState({});
const navigate = useNavigate()
const {id} = useParams()
useEffect(() => {
  if(id){
     const fetchData = async () =>{
     const  serviceData = await axios.get(baseUrl + id)
       setService(serviceData)
      
      }
      fetchData()
  }

}, [service]);

  const handleChange = (event) => {
    const { id, value } = event.target;
    setService({ ...service, [id]: value });
  };

 const handleSubmit = (event) => {
event.preventDefault();
if(id){
   axios.put(baseUrl + id, service).then(() => navigate(baseUrl + id)).catch(error => console.log(error))
} else {
  axios.post(baseUrl, service)
}

 }

// console.log(user)
const {name, type, price} = service
  return (
    <form className="container" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="name"
            value={name}
            onChange={handleChange}
          />
        </div>
        <div class="mb-3">
        <label for="" class="form-label">City</label>
        <select class="form-select form-select-lg" name="" id="">
            <option selected>Select one</option>
            <option value="">New Delhi</option>
            <option value="">Istanbul</option>
            <option value="">Jakarta</option>
        </select>
     </div>
        <div className="form-group col-md-6">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            className="form-control"
            id="price"
            placeholder="price"
            value={price}
            onChange={handleChange}
          />
        </div>
        </div>
     
       <br/>
      <button type="submit" className="btn btn-primary">
      Submit
      </button>
    </form>
 
  )
}

export default NewForm