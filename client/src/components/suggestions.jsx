import React from 'react'




const Suggestions = (props) => {
  console.log(props)
  const options = props.results.map(r => (
    <div key={r.artistId + r.artistNames}>
      {r.artistName}
    </div>
  ))
  return <div>{options}</div>
}



export default Suggestions;

