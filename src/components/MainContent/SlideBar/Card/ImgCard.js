import React from 'react'

function ImgCard({src,alt}) {
  return (
    <div className="w-[350px] border border-black rounded-3xl max-md:w-[200px]">
        <img className="object-cover rounded-3xl" src={src} alt={alt}/>
    </div>
  )
}

export default ImgCard;
