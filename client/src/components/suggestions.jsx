import React from 'react'




const Suggestions = (props) => {
  console.log(props)
  const options = props.results.map(r => (
    <li key={r.artistId + r.artistNames}>
      {r.artistName}
    </li>
  ))
  return <ul>{options}</ul>
}



export default Suggestions;

