import React from 'react'

function Props2({movies}) {
  return (
    <>
      <div className='w-full h-auto  px-20 mt-20'>
      {movies.map((item,index)=>{
        return<>
        <div key={index} className='w-[70%] h-[300px] px-3 py-3 flex' >
              <div className='flex flex-col w-[50%] bg-gray-800 px-2 py-2 rounded-l-lg text-white'>
                <div className='flex gap-5'>
                  <img src={item.image1} className='w-[80px] h-[125px] object-cover'></img>
                  <div className='flex flex-col gap-3'>
                     <h1 className='text-2xl'>{item.title}</h1>
                     <div className='flex gap-2'>
                          <p>{item.year}</p>
                          <p>{item.actor}</p>
                     </div>
                     <div className='flex gap-2'>
                          <p>{item.time}</p>
                          <p>{item.type}</p>
                     </div>
                  </div>
                </div>
                <p>{item.content}</p>
              </div>
              <div className='w-[40%] h-full' ><img className='w-full h-full object-cover rounded-r-lg' src={item.image2} alt=''></img></div>
            </div>
        </>
      })
           


      }
      </div>
    </>
  )
}

export default Props2