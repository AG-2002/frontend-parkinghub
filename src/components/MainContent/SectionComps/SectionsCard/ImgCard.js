import React from 'react'

function ImgCard({src,alt}) {
  return (
    <div className="w-11/12 border border-black h-4/6 rounded-xl">
        <img className="object-cover w-full h-full rounded-xl" src={src} alt={alt}/>
    </div>
  )
}

export default ImgCard;
