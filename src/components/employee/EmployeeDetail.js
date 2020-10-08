import React, { useContext, useEffect, useState } from "react"
import { useParams, useHistory } from "react-router-dom"
import { EmployeeContext } from "./EmployeeProvider"
import "./Employee.css"

export const EmployeeDetail = () => {
    const { getEmployeeById, fireEmployee } = useContext(EmployeeContext)
	
	const [employee, setEmployee] = useState()

	
	const {employeeId} = useParams();
	const history = useHistory();

    useEffect(() => {
		console.log("useEffect", employeeId)
        getEmployeeById(employeeId)
        .then((response) => {
			setEmployee(response)
		})
			}, [])

    return (
        <section className="employee">
            <h3 className="employee__name">{employee?.name}</h3>
			<div className="employee__location">Location: {employee?.location.name}</div>

            <button onClick={
                () => {
                    fireEmployee(employee.id)
                        .then(() => {
                            history.push("/employees")
                        })
                }}>Fire Employee
            </button>       
            
        </section>
    )
}
