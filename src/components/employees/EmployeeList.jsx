import { useEffect, useState } from "react"
import { getStaffUsers } from "../../service/userService"
import { User } from "../users/User"

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
                return <User user={employeesObj} key={employeesObj.id}/>
            })}
        </div>
    )
}