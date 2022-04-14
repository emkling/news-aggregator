import React from 'react'
import { useGetNewsApiSearchQuery } from '../services/newsApi'
import moment from 'moment';
import newsApiImg from '../assets/newsApi.png'


const News = ({simplified, search}) => {
    const {data, isLoading} = useGetNewsApiSearchQuery({search}.search )
    const newsApiData = data?.articles;

    if (isLoading) return "Loading"

    
  return (
    <>
    {simplified && (
    <div className='grid grid-cols-1 p-2 lg:w-1/5 '>
        <h1 className='pl-6 font-bold text-xl lg:text-2xl'> News API <img src={newsApiImg} alt='logo' className='pl-2 inline-flex w-[50px] -mt-[8px]' /> </h1>
      {newsApiData?.map((news, i) => (
        <div className='p-2'>
          <a href={news.url} target='_blank' rel='noreferrer'>
            <div className='p-2 border-2 rounded-lg shadow-md bg-[#FFFFFF] hover:bg-[#d6d8da]'> 
            <div className='flex flex-row'>
              <h1 className=' w-full pb-2 font-bold flex'>{news.title} </h1>
              </div>
            <div className='pl-4 pr-4  flex flex-col justify-between'>
               <span className='text-sm'>{news?.source?.name}</span> <span className='text-xs'>{moment(news?.publishedAt).startOf('ss').fromNow()} </span>
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

export default News