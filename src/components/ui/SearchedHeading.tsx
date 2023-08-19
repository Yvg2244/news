import React from 'react'
import {  useSelector } from 'react-redux'

type Props = {}

const SearchedHeading = (props: Props) => {

  const keyword=useSelector((state:any)=>state.newsReducer.value.newsKeyWord)
  return (
    <div className='flex flex-col gap-2 text-3xl font-extrabold px-8 my-4'>
        <p>Showing news realted with :  </p>
        <h2 className='text-4xl'>{keyword!=""?keyword:"All news"}</h2>
    </div>
  )
}

export default SearchedHeading