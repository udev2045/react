import Part from "./Part/Part";

const Content = ({parts}) => {
  let partsData = parts.map(part => <Part part={part} key={part.id}/>)
    const total = parts.reduce((s, p) => {
       return (s + p.exercises)
    }, 0)
  return (
      <div>
        {partsData}
        <div>total {total}</div>
      </div>

  )
}
export default Content