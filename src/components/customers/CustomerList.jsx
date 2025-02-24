import { useState, useEffect } from "react"
import { getNonStaffUsers } from "../../service/userService"
import { User } from "../users/User"

export const CustomerList = () => {
    const [constumers, setCustomers] = useState([])

    useEffect(() => {
        getNonStaffUsers().then(customerArray => {
            setCustomers(customerArray)
        })
    }, [])

    return <div className="customers">
        {constumers.map(customerObj => {
            return (
                <User user={customerObj} key={customerObj.id}/>
            )
        })}
    </div>
    
}