import React from 'react'

// comment out = command /


const Suggestions = (props) => {
  console.log(props)
  const options = props.results.map(r => (
    <div key={r.artistId + r.artistNames}>
      {r.artistName}
      <a href={r.trackViewUrl}></a>
      

    </div>
  ))
  return <div>{options}</div>
}



export default Suggestions;

