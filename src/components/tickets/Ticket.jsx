import { useState, useEffect } from "react"
import { getEployeeById } from "../../service/empoyeeService"

export const Ticket = ({ticket}) => {
    const [assignedEmployee, setassignedEmployee] = useState('')

    useEffect(() => {
    if(ticket.employeeTickets.length) {
        getEployeeById(ticket.employeeTickets[0].employeeId).then((employee) => {
            setassignedEmployee(employee)
        })
    }   
    }, [ticket])
        
    return (
        <section className="ticket">
                <header className="ticket-info">{ticket.id}</header>
                <div>{ticket.description}</div>
                <footer>
                    <div>
                        <div className="ticket-info">Assignee</div>
                        <div>{assignedEmployee ? assignedEmployee.user?.fullName : "None"}</div>
                    </div>
                  <div>
                    <div className="ticket-info">emergency</div>
                    <div>{ticket.emergency ? "yes" : "no"}</div>
                  </div>
                </footer>
            </section>
    )
}