import React from 'react'

// comment out = command /


const Suggestions = (props) => {
  console.log(props)
  const options = props.results.map(r => (
    <div key={r.artistId + r.artistNames}>
      <img src={r.artworkUrl60}></img> 
      {r.artistName + " "} 
      {r.trackName} 
      <a href={r.artistViewUrl}>Purchase Now</a>
    </div>
  ))
  return <div>{options}</div>
}



export default Suggestions;

