import React, {useEffect}from 'react'
import ServiceAPI from "../../util/ServiceAPI"
const ServiceCard = ({optionSelected}) => {

  useEffect(() => {
    ServiceAPI.addService()
  },[])
  return (
    <div>


    </div>
  )
}

export default ServiceCard