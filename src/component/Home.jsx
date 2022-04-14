
import { useState, useEffect } from 'react';
import { BingNews, GoogleNews, NewsCatcher, WebSearch, News, WebSearch2 } from '.'
import moment from 'moment'

import logo from '../assets/logo.png'

const Home = () => {

  const [newsSearch, setNewsSearch] = useState("Politics");
  const [timePeriod, setTimePeriod] = useState('2022-01-13');
  const [input, setInput] = useState("News");
  const [timeSelect, setTimeSelect] = useState("1d")

  const timeOptions = ["1d", "3d", "7d", "30d", "90d", "180d"]

  const handleSubmit = (e) => {
    e.preventDefault();
    setNewsSearch({input}.input)
    {/*setTimePeriod({timeSelect}.timeSelect)*/}
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [newsSearch])
  


  return (
    <>
    <div className='w-full'> 
    <div className='w-full fixed h-[140px] lg:h-[100px] flex justify-center '>
      <div className='flex lg:flex-row w-full justify-between px-24 bg-[#d7d3e4] flex-col'> 
        <div>
          <img src={logo} alt='logo' className='w-[250px] -mt-[15px]' />
        </div>
      
        <div className='flex justify-center items-center'> 
          <form onSubmit={handleSubmit} className="flex gap-4">
            <div> 
            <input className='border-2 rounded-lg lg:py-1 lg:px-6' placeholder='Search' type='text' value={input} onChange={(e) => setInput(e.target.value)}/>
            </div>
            <div>
              <button className='text-white hover:bg-[#c4bceb] hover:text-[#332c54] border-2 rounded-lg px-4 lg:py-1 lg:px-8 bg-[#332c54] ' type='submit' > Enter </button>
            </div>
            
          </form>
         {/*<select  className='w-[70px] border-2 rounded-lg' onChange={(e)=> setTimeSelect(moment().subtract(parseInt(e.target.value.slice(0,-1)), 'days').format("YYYY-MM-DD").toString())} >
            {timeOptions.map((date) => <option value={date} key={date}> {date} </option>)}
      </select>*/} 
        </div>
      </div>
    </div>
    
    </div>
    <div className='w-full flex pt-[180px] lg:pt-[140px]  flex-col lg:flex-row bg-[#eeedf1]'> 
    

        <BingNews simplified={true} search={newsSearch}/>

        <GoogleNews simplified={true} search={newsSearch} />


        <NewsCatcher simplified={true} search={newsSearch} />

        <WebSearch simplified={true} search={newsSearch} />
      
   
    </div>
    </>
  )
}

export default Home