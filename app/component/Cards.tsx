import React from 'react'

const Card = () => {
        const cards = [
          {
            img: "/images/web.png",
            title: "Web Development",
            para: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla?",
          },
        ]

  return (
    <div>
        <div className="py-[50px] px-[10%] text-center">
            <h2 className='text-orange-700 text-3xl font-bold mb-10'>Our Services</h2>
            <div className="flex flex-wrap justify-center gap-6">
              {cards.map((data) =>(
                <div className="bg-white text-black min-w-[280px] p-[25px] rounded-2xl w-[30%] text-left">  
                    <img src={data.img} alt={data.title} className='w-full h-[230px] object-cover rounded-2xl  mb-10' />
                    <h3>{data.title}</h3>
                    <p>{data.para}</p>
                    <button className=''>Hire Me</button>
                </div> 
              ))}
                   
            </div>
        </div>
    </div>
  )
}

export default Card