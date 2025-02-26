import { useState, useEffect } from "react"
import { getNonStaffUsers } from "../../service/userService"
import { User } from "../users/User"
import { Link } from "react-router-dom"
import "./Customers.css"

export const CustomerList = () => {
    const [constumers, setCustomers] = useState([])

    useEffect(() => {
        getNonStaffUsers().then(customerArray => {
            setCustomers(customerArray)
        })
    }, [])

    return <div className="customers">
        {constumers.map(customerObj => {
            return <Link to={`/customers/${customerObj.id}`}><User user={customerObj} key={customerObj.id}/></Link>
        })}
    </div>
    
}