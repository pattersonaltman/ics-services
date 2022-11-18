import React , { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { serviceData } from "../../util/ServiceData";
import ServiceAPI from "../../util/ServiceAPI"
import { IndeterminateCheckBoxRounded } from "@mui/icons-material";
import ServiceCard from "../serviceCard/ServiceCard";
import { letterSpacing } from "@mui/system";

const Services = () => {
  const [service, setServiceList] = useState([]);
  const [serviceOption, setServiceOption] = useState("")
  const [serviceCheckbox, setServiceCheckbox] = useState("")
  const [selectedService, setSelectedService] = useState("")

const {id} = useParams()

useEffect( () => {
  ServiceAPI.getAll(setServiceList)
}, [] )


console.log(service)
  // const handleChange = (event) => {
  //   const { id, value } = event.target;
    //setService({ ...service, [id]: value });
  // };

  const handleDropDown = (event) => {
		setServiceOption(event.target.value);
	};

  const handleCheckBoxChange =(event) => {
    const {checked} = event.target;
    if(checked){
      setServiceCheckbox(event.target.value)
    }
}
 const handleSubmit = (event) => {
event.preventDefault();
if(id){
  
} else {
  //axios.post(baseUrl, service)
}

 }



 
   
    const optionSelected =  service.filter(serv => serv.name === serviceOption)

  




const {name, type, price} = service
  return (<>
    <form className="container" onSubmit={handleSubmit}>
      <div className="form-row">
        <div class="mb-3">
        <label for="" class="form-label">Internet</label>
        <select 
        class="form-select form-select-lg" 
        value={serviceOption}
        onChange={handleDropDown}
        >
            <option selected>Select one</option>
            <option value="Basic">Basic</option>
            <option value="Advance">Advance</option>
            <option value="High Speed">High Speed</option>
            <option value="Ultra-High Speed">Ultra-High Speed</option>
        </select>
        </div>
        <div class="mb-3">
        <label for="" class="form-label">Cable</label>
        <select class="form-select form-select-lg" 
         value={serviceOption}
         onChange={handleDropDown}
        >
            <option selected>Select one</option>
            <option value="Basic">Basic</option>
            <option value="Extra">Extra</option>
            <option value="Premium">Premium</option>
            <option value="VIP">VIP</option>
        </select>
     </div>
     <h3>Select Services</h3>
     {
     serviceData.map(({  name, type, price }, index) => {
          return (
            <div key={index}>
              <div className="Service-list-item">
                <div className="left-section">
                  <input
                    type="checkbox"
                    id={index}
                    name={name}
                    value={serviceCheckbox}
                    onChange={handleCheckBoxChange}
                   
                  />
                  {" "}
           <label htmlFor={index}>{name}</label>
                </div>
                
              </div>
            </div>
          )
        })
        }
        </div>
       <br/>
      <button type="submit" className="btn btn-primary">
      Submit
      </button>
    </form>
  <ServiceCard optionSelected={optionSelected}/>
    </>
  )
}

export default Services