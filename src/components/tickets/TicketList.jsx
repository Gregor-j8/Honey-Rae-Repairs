import { useEffect, useState } from "react"
import { getAllTickets } from '../../service/ticketService'
import './Tickets.css'
import { Ticket } from "./Ticket"
import { FilterBar } from "./FilterBar"

export const TicketList = () => {
    const [allTickets, setAllTickets] = useState([])
  const [showEmergency, setShowEmergency] = useState(false)
  const [filteredTickets, setFilteredTickets] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  
  useEffect(() => {
    getAllTickets().then(ticketsArr => {
      setAllTickets(ticketsArr)
    })
  }, []) 

  useEffect(() => {
    if (showEmergency) {
      const emergencyTickets = allTickets.filter(
        (ticket) => ticket.emergency === true
      )
      setFilteredTickets(emergencyTickets)
    } else {
      setFilteredTickets(allTickets)
    }
  }, [showEmergency]) 


  useEffect(() => {
    if (searchTerm) {
      const foundTickets = allTickets.filter(
        (ticket) => ticket.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
      setFilteredTickets(foundTickets)
    }
  }, [searchTerm, allTickets]) 

  return (
    <div className="ticket-container">
      <h2>Tickets</h2>
        <article className="tickets">
          <FilterBar setShowEmergency={setShowEmergency} setSearchTerm={setSearchTerm}/>
        {filteredTickets.map(ticketObj => {
          return (  
            <Ticket ticket={ticketObj} key={ticketObj.id}/>
          )
        })}
      </article>
    </div>
  )
}