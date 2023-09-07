/* SingleCountry.jsx was created 07.09.2023 22:27 */
import css from "./SingleCountry.module.css"

const SingleCountry = ({country}) => {
    const languages = Object.values(country.languages)
    return (
        <div>
            <h1>{country.name.common}</h1>
            <p>Capital: {country.capital[0]}</p>
            <p>Area: {country.area}</p>
            <h3>Languages:</h3>
            <ul>
                { languages.map( lang => <li>{lang}</li> ) }
            </ul>
            <img src={country.flags.svg} alt={country.flags.alt} width="100"/>
        </div>
    )
}
export default SingleCountry;