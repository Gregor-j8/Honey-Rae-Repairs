export const FilterBar = ({setShowEmergency, setSearchTerm}) => {
    return (
        <div className="filter-bar">
<button className="filter-btn btn-primary" onClick={() => {
  setShowEmergency(true)
}}
>
  Emergency
</button>
<button className="filter-btn btn-info"
onClick={() => {
  setShowEmergency(false)
}}
>
  ShowAll
</button>
<input onChange={(event) => {setSearchTerm(event.target.value)}}
type="text" placeholder="Search Tickets" className="ticket-search"/>
</div>
    )
}

