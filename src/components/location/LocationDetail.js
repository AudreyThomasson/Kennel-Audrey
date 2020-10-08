import React, { useContext, useEffect, useState } from "react"
import { useParams, useHistory } from "react-router-dom"
import { LocationContext } from "./LocationProvider"
import "./Location.css"

export const LocationDetail = () => {
    const { getLocationById } = useContext(LocationContext)
	
	const [location, setLocation] = useState({})
	const [employees, setEmployees] = useState({})
	const [animals, setAnimals] = useState({})
	
	const {locationId} = useParams();
	const history = useHistory();

    useEffect(() => {
        getLocationById(locationId)
        .then((response) => {
			setLocation(response)
			setEmployees(response.employees)
			setAnimals(response.animals)
		})
			}, [])

    return (
        <section className="location">
            <h3 className="location__name">{location.name}</h3>
            <div className="location__breed">{location.address}</div>
           
            <h5 className="location__employees">Employees:</h5>
            <p>
                {
                    employees.map(employee => {
                        return employee.name
                    }).join(", ")
                }
            </p>
            

            <h5 className="location__animals">Current Guests:</h5>
            <p>
                {
                    animals.map(animal => {
                        return animal.name
                    }).join(", ")
                }
            </p>
			
            
        </section>
    )
}
