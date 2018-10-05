import React from 'react'




const Suggestions = (props) => {
  console.log(props)
  const options = props.results.map(r => (
    <div key={r.artistId + r.artistNames}>
      {r.artistName}
      <a href={r.artistViewUrl}>view in store</a>
    </div>
  ))
  return <div>{options}</div>
}



export default Suggestions;

