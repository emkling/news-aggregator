import React from 'react'
import { useGetWebSearchQuery } from '../services/webSearchApi'
import moment from 'moment'
import webimg from '../assets/websearch.png'


const WebSearch = ({simplified, search}) => {
    const {data, isLoading} = useGetWebSearchQuery({search}.search);
    const webData = data?.value

    console.log(webData)

    if(isLoading) return "Loading"




  return ( 
    <>
    {simplified && (
    <div className='grid grid-cols-1 p-2 lg:w-1/4 '>
      <h1 className='pl-6 font-bold text-xl lg:text-2xl pb-2'> WebSearch API<img src={webimg} alt='logo' className='pl-2 inline-flex w-[50px] -mt-[4px]' /></h1> 
      {webData?.map((news, i) => (
        <div className='p-2'>
          <a href={news.url} target='_blank' rel='noreferrer'>
            <div className='p-2 border-2 rounded-lg shadow-md bg-[#FFFFFF] hover:bg-[#d6d8da]'> 
            <div className='flex flex-row'>
              <h1 className=' w-full pb-2 font-bold flex'>{news.title} </h1>
              </div>
            <div className='pl-4 pr-4 flex flex-col justify-between'>
               <span className='text-sm'>{news?.provider?.name}</span> <span className='text-xs'>{moment(news?.datePublished).startOf('ss').fromNow()} </span>
            </div> 
            </div>
          </a>
        </div>
      ))}
    </div>
    )}
    </>
     
  )
}

export default WebSearch