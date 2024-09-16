import React from 'react'

function ImgsCard({src,alt}) {
  return (
    <div className="w-11/12 border border-black rounded-2xl">
        <img className="object-cover w-full rounded-2xl" src={src} alt={alt}/>
    </div>
  )
}

export default ImgsCard;