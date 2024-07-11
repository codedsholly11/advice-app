import React, {useState, useEffect} from 'react'
import divider from '../images/divider.svg'
import dice from '../images/dice.svg'
import divide from '../images/divide.svg'

const Api = () => {
    const [data, setData] = useState(null)
    async function fetchApi(){
            const baseUrl = 'https://api.adviceslip.com/advice'
            const response = await fetch(baseUrl)
            .then((res)=>res.json())
            const newData = await response.slip
            setData(newData)
            console.log(newData)

        }

    useEffect(()=>{
        fetchApi()
    }, [])
  return (
    <>
       
        {
            data && (
                <div className='flex flex-col w-[100%] h-[100vh] bg-slate-300 items-center justify-center' >
                   <div className='flex flex-col md:w-[30vw] w-[90vw] h-[50vh] items-center justify-center bg-cyan-300 gap-[80px] text-center rounded-2xl pt-[20px]'>
                        <div>
                            <h1>ADVICE # <span>{data.id}</span></h1>
                            <p className='font-bold text-2xl'>{data.advice}</p>
                        </div>
                        <div>
                            <img className='w-[25vw]' src={divider} alt="" />
                            <img className='hidden' src={divide} alt="" />
                        </div>
                        <div>
                            <button onClick={fetchApi}><img src={dice} alt="" /></button>
                        </div>
                    </div>
                </div>
            )
        }
    
   
    
     
      
    </>
  )
}

export default Api
