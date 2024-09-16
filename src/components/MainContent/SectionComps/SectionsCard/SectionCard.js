import React from 'react'

export default function SectionCard({src,alt,title, summary}) {
  return (
    <div className="flex flex-col items-center py-4 gap-y-2 md:flex-row md:justify-evenly">
        <img src={src} alt={alt} className="w-32 h-32 md:w-24 md:h-24" />
        <div className='flex flex-col items-center w-11/12 md:w-4/6 md:items-start gap-y-4'>
        <h1 className='text-xl font-bold md:text-2xl'>{title}</h1>
        <p className='text-lg leading-loose text-center md:text-start md:text-slate-600'>{summary}</p>
        </div>
    </div>
  )
}
