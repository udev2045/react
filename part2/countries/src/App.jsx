import { useState, useEffect } from 'react'
import service from "./services/Countries.js";
import CountriesResult from "./Components/CountriesResult/CountriesResult.jsx";

function App() {
    const [countries, setCountries] = useState([])
    const [search, setSearch] = useState('')
    useEffect(() => {
        service.getAllCountries().then(response => {
            setCountries(response)
        })
    }, [])
  const handlerGetCountries = (event) => {
      setSearch(event.target.value)
  }

  return (
   <>
    <h1>Countries</h1>
     <div>Find countries <input type="text" value={search} onChange={handlerGetCountries}/></div>
     <CountriesResult countries={countries} search={search}/>
   </>
  )
}

export default App
