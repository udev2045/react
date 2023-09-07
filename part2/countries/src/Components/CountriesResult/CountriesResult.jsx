/* CountriesResult.jsx was created 07.09.2023 21:57 */
import css from "./CountriesResult.module.css"
import SingleCountry from "../SingleCountry/SingleCountry.jsx";

const CountriesResult = ({countries, search}) => {
    const result = countries.filter(country => country.name.common.toLowerCase().indexOf(search.toLowerCase()) >= 0)
    return (
        <div>
            {search === '' ? 'Please enter something for your search' : result.length > 10 ? 'Too many matches, specify another filter' : result.length === 1 ? <SingleCountry country={result[0]}/> : result.map(country => <div key={country.cca2}>{country.name.common}</div>)}
        </div>
    )
}
export default CountriesResult;