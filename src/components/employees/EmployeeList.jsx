import { useEffect, useState } from "react"
import { getStaffUsers } from "../../service/userService"
import { User } from "../users/User"
import "./employeeList.css"
import { Link } from "react-router-dom"

export const EmployeeList = () => {
    const [employees, setEmployees] = useState([])

    useEffect(() => {
        getStaffUsers().then(employeesArray => {
            setEmployees(employeesArray)
        })
    }, [])
    
    return ( 
        <div className="employees">
            {employees.map(employeesObj => {
                return <Link to={`/employees/${employeesObj.id}`}><User user={employeesObj} key={employeesObj.id}/></Link>
            })}
        </div>
    )
}