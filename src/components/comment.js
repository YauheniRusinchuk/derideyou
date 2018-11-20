import React from 'react';


export default ({url,displayName,text}) => {
  let img = url ? (<img src={url} alt='img' width="400px" height="400px" />): null
  let name = displayName ? displayName : "GUEST"
  return (
    <div>
      <span>user : {name}</span>
      <p>{text}</p>
      {img}
    </div>
  )
}
