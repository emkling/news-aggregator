import React from 'react'
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi'
import { useState, useEffect } from 'react';
import moment from 'moment';
import bingimg from '../assets/Bing-Logo.png'

const News = ({simplified, search}) => {
  const {data: cryptoNews } = useGetCryptoNewsQuery({search}.search);



  if(!cryptoNews?.value) return <p>Loading Bing News</p>

  return (
    <>
    {simplified && (
    <div className='grid grid-cols-1 m-0 p-2 lg:w-1/4'>
        <h1 className='pl-6 font-bold text-xl lg:text-2xl pb-3'> Bing News Search <img src={bingimg} alt='logo' className='pl-1 inline-flex w-[50px] -mt-[4px]' /> </h1>
      {cryptoNews?.value.map((news, i) => (
        <div className='p-2'>
          <a href={news.url} target='_blank' rel='noreferrer'>
            <div className='p-2 border-2 rounded-lg shadow-md bg-[#FFFFFF] hover:bg-[#d6d8da]'> 
            <div className='flex flex-row'>
              <h1 className=' w-full pb-2 font-bold flex'>{news.name} </h1>
              </div>
            <div className='pl-4 pr-4  flex flex-col justify-between'>
               <span className='text-sm'>{news.provider[0]?.name}</span> <span className='text-xs'>{moment(news.datePublished).startOf('ss').fromNow()} </span>
            </div> 
            </div>
          </a>
        </div>
      ))}
    </div>
    )}
    
    {!simplified && (
    <div className='grid grid-cols-1 gap-2 sm:gap-4 p-4 w-1/4 '>
        <h1 className='font-bold'> Bing News</h1>
      {cryptoNews?.value.map((news, i) => (
        <div className=' sm:p-4 '>
          <a href={news.url} target='_blank' rel='noreferrer'>
            <div className='p-4 border-2 rounded-md shadow-md bg-[#FFFFFF] hover:bg-[#d6d8da]'> 
            <div className='flex flex-row'>
              <h1 className='sm:text-2xl w-full pb-3 font-bold flex'>{news.name} </h1>
                <span className=''> <img src= {news?.image?.thumbnail?.contentUrl} alt="news image" /> </span>
              </div>
              <p className='p-2'>{news.description.length > 300 ? `${news.description.substring(0,300)}....` : news.description}</p>
           
            <div className='pl-4 pr-4 py-4 flex justify-between'>
               <span className=''>{news.provider[0]?.name}</span> <span>{moment(news.datePublished).startOf('ss').fromNow()} </span>
            </div> 
            </div>
          </a>
        </div>
      ))}
    </div>)}
    </>
  )
}

export default News