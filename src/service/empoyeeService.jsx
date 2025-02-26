export const getAllEmployees = async() => {
    return fetch(`http://localhost:8088/employees?_expand=user`).then(res => res.json())
} 

export const getEployeeById = async(employeeId) => {
    return fetch(`http://localhost:8088/employees/${employeeId}?_expand=user`).then(res => res.json())
}
export const getSearchedEmployeeById = async(employeeId) => {
    return fetch(`http://localhost:8088/employees?userId=${employeeId}&_expand=user&_embed=employeeTickets`).then(res => res.json())
    
}