import { useGetGoogleNewsQuery } from "../services/googleNewsApi";
import { useState } from "react";
import moment from 'moment'
import google from '../assets/google.png'

import React from 'react'

const GoogleNews = ({simplified, search}) => {
    const {data, isLoading} = useGetGoogleNewsQuery({search}.search);
    const googleNews = data?.articles.slice(0,25);
    console.log(googleNews)

 if(isLoading) return "Loading Google News"

  return (

    <>
    {simplified && (
    <div className='grid grid-cols-1 p-2 lg:w-1/4 '>
        <h1 className='pl-6 font-bold pb-2 text-xl lg:text-2xl'> Google News <img src={google} alt='logo' className='pl-1 inline-flex w-[50px] -mt-[4px]' /></h1>
      {googleNews?.map((news, i) => (
        <div className='p-2'>
          <a href={news.url} target='_blank' rel='noreferrer'>
            <div className='p-2 border-2 rounded-lg shadow-md bg-[#FFFFFF] hover:bg-[#d6d8da]'> 
            <div className='flex flex-row'>
              <h1 className=' w-full pb-2 font-bold flex'>{news.title} </h1>
              </div>
            <div className='pl-4 pr-4  flex flex-col justify-between'>
               <span className='text-sm'>{news.source?.title}</span> <span className='text-xs'>{moment(news?.published).startOf('ss').fromNow()} </span>
            </div> 
            </div>
          </a>
        </div>
      ))}
    </div>
    )}
    
    {!simplified && (
    <div className='grid grid-cols-1 gap-2 sm:gap-4 p-4 w-1/4 '>
        <h1 className='font-bold'> Google News</h1>
      {googleNews.map((news, i) => (
        <div className=' sm:p-4 '>
          <a href={news.url} target='_blank' rel='noreferrer'>
            <div className='p-4 border-2 rounded-md shadow-md bg-[#FFFFFF] hover:bg-[#d6d8da]'> 
            <div className='flex flex-row'>
              <h1 className='sm:text-2xl w-full pb-3 font-bold flex'>{news.title} </h1>

              </div>
    
            <div className='pl-4 pr-4 py-4 flex justify-between'>
               <span className=''>{news.source?.title}</span> <span>{moment(news?.published).startOf('ss').fromNow()} </span>
            </div> 
            </div>
          </a>
        </div>
      ))}
    </div>)}
    </>
  )
}

export default GoogleNews
