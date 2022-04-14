import { useGetNewsCatcherQuery } from '../services/newsCatcherApi';
import { useState, useEffect } from 'react';
import React from 'react'
import moment from 'moment';
import newsimg from '../assets/newscatcher.png'

const NewsCatcher = ({simplified, search}) => {
    const {data, isLoading} = useGetNewsCatcherQuery({search}.search);
    const newsData = data?.articles
    

    if(isLoading) return "Loading"

  return (
    <>
    {simplified && (
    <div className='grid grid-cols-1 p-2 lg:w-1/4  '>
        <h1 className='pl-6 font-bold text-xl lg:text-2xl '> NewsCatcher API <img src={newsimg} alt='logo' className='pl-2 inline-flex w-[50px] -mt-[4px]' /></h1>
      {newsData?.map((news, i) => (
        <div className='p-2'>
          <a href={news.link} target='_blank' rel='noreferrer'>
            <div className='p-2 border-2 rounded-lg shadow-md bg-[#FFFFFF] hover:bg-[#d6d8da]'> 
            <div className='flex flex-row'>
              <h1 className=' w-full pb-2 font-bold flex'>{news.title} </h1>
              </div>
            <div className='pl-4 pr-4 flex flex-col justify-between'>
               <span className='text-sm'>{news.rights}</span> <span className='text-xs'>{moment(news.published_date).startOf('ss').fromNow()} </span>
            </div> 
            </div>
          </a>
        </div>
      ))}
    </div>
    )}
    
    {!simplified && (
    <div className='grid grid-cols-1 gap-2 sm:gap-4 p-4 w-1/4 '>
        <h1 className='font-bold'> NewsCatcher API</h1>
      {newsData?.map((news, i) => (
        <div className=' sm:p-4 '>
          <a href={news.link} target='_blank' rel='noreferrer'>
            <div className='p-4 border-2 rounded-md shadow-md bg-[#FFFFFF] hover:bg-[#d6d8da]'> 
            <div className='flex flex-row'>
              <h1 className='sm:text-2xl w-full  font-bold flex'>{news.name} </h1>
              </div>
              <p className='p-2'>{news.summary.length > 300 ? `${news.summary.substring(0,300)}....` : news.summary}</p>
           
            <div className='pl-4 pr-4 py-4 flex justify-between'>
               <span className=''>{news.rights}</span> <span>{moment(news.published_date).startOf('ss').fromNow()} </span>
            </div> 
            </div>
          </a>
        </div>
      ))}
    </div>)}
    </>
  )
}

export default NewsCatcher