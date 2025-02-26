import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getSearchedEmployeeById } from "../../service/empoyeeService"

export const EmployeeDetails = () => {
    const { employeeId } = useParams()
    const [employee, setEmployee] = useState({})
    const [employeeTicketLength, setEmployeeTicketLength] = useState(0)

    useEffect(() => {
        let ticket = 0
        getSearchedEmployeeById(employeeId).then(data => {
            const employeeObj = data[0]
            setEmployee(employeeObj)
        })
    }, [])

    return (
        <section className="employee">
                <header className="employee-header">{employee.user?.fullName}</header>
                <div className="employee-info">
                    <span>Email: </span>
                    {employee.user?.email}
                </div>
                <div className="employee-info">
                    <span>Specialty: </span>
                    {employee.specialty}
                </div>
                <div className="employee-info">
                    <span>Rate: </span>
                    {employee.rate}
                </div>
                <footer>currently working on {employee.employeeTickets?.length} tickets</footer>
        </section>
            )
}