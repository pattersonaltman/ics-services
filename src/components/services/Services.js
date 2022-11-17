import React , { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { serviceData } from "../../util/ServiceData";

const Services = () => {

  const baseUrl = "http://localhost:8080/api/user/"
  const [service, setService] = useState({});
const navigate = useNavigate()
const {id} = useParams()

useEffect(() => {
  if(id){
    const fetchData = async () =>{
      const serviceData = await axios.get(baseUrl + id)
      setService(serviceData)
     }
     fetchData()
  }

}, []);

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
        <label for="" class="form-label">Internet</label>
        <select class="form-select form-select-lg" name="" id="">
            <option selected>Select one</option>
            <option value="Basic">Basic</option>
            <option value="Advance">Advance</option>
            <option value="High Speed">High Speed</option>
            <option value="Ultra-High Speed">Ultra-High Speed</option>
        </select>
        </div>
        <div class="mb-3">
        <label for="" class="form-label">Cable</label>
        <select class="form-select form-select-lg" name="" id="">
            <option selected>Select one</option>
            <option value="Basic">Basic</option>
            <option value="Extra">Extra</option>
            <option value="Premium">Premium</option>
            <option value="VIP">VIP</option>
        </select>
     </div>
     <h3>Select Services</h3>
     {serviceData.map(({ name, type, price }, index) => {
          return (
            <div key={index}>
              <div className="toppings-list-item">
                <div className="left-section">
                  <input
                    type="checkbox"
                    id={index}
                    name={name}
                    value={name}
                  />
                  {" "}
           <label htmlFor={index}>{name}</label>
                </div>
                {/* <div className="right-section">{price}</div> */}
              </div>
            </div>
          )
        })}
        </div>
       <br/>
      <button type="submit" className="btn btn-primary">
      Submit
      </button>
    </form>
 
  )
}

export default Services