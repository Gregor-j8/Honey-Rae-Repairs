export const getAllEmployees = async() => {
    return fetch(`http://localhost:8088/employees?_expand=user`).then(res => res.json())
} 

export const getEployeeById = async(employeeId) => {
    return fetch(`http://localhost:8088/employees/${employeeId}?_expand=user`).then(res => res.json())
}