import React from 'react'
import { BiTimeFive } from 'react-icons/bi';
import logo1 from '../../assets/skm pepiniere.png'

const Data=[
  {
    id:1,
    image: logo1,
    title: 'Developpeur Mobile',
    time: 'Now',
    location: 'Lome',
    desc:'  Lorem ipsum dolor sit, amet consectetur adipisicing elit. esse autem ex voluptas minus magni iste porro eum numquam maxime?',
    company: 'TechPro.co'
  },
  {
    id:1,
    image: logo1,
    title: 'Developpeur Mobile',
    time: 'Now',
    location: 'Lome',
    desc:'  Lorem ipsum dolor sit, amet consectetur adipisicing elit. esse autem ex voluptas minus magni iste porro eum numquam maxime?',
    company: 'TechPro.co'
  },
  {
    id:1,
    image: logo1,
    title: 'Developpeur Mobile',
    time: 'Now',
    location: 'Lome',
    desc:'  Lorem ipsum dolor sit, amet consectetur adipisicing elit. esse autem ex voluptas minus magni iste porro eum numquam maxime?',
    company: 'TechPro.co'
  },
  {
    id:1,
    image: logo1,
    title: 'Developpeur Mobile',
    time: 'Now',
    location: 'Lome',
    desc:'  Lorem ipsum dolor sit, amet consectetur adipisicing elit. esse autem ex voluptas minus magni iste porro eum numquam maxime?',
    company: 'TechPro.co'
  },
  {
    id:1,
    image: logo1,
    title: 'Developpeur Mobile',
    time: 'Now',
    location: 'Lome',
    desc:'  Lorem ipsum dolor sit, amet consectetur adipisicing elit. esse autem ex voluptas minus magni iste porro eum numquam maxime?',
    company: 'TechPro.co'
  },
  {
    id:1,
    image: logo1,
    title: 'Developpeur Mobile',
    time: 'Now',
    location: 'Lome',
    desc:'  Lorem ipsum dolor sit, amet consectetur adipisicing elit. esse autem ex voluptas minus magni iste porro eum numquam maxime?',
    company: 'TechPro.co'
  },
  {
    id:1,
    image: logo1,
    title: 'Developpeur Mobile',
    time: 'Now',
    location: 'Lome',
    desc:'  Lorem ipsum dolor sit, amet consectetur adipisicing elit. esse autem ex voluptas minus magni iste porro eum numquam maxime?',
    company: 'TechPro.co'
  },
  {
    id:1,
    image: logo1,
    title: 'Developpeur Mobile',
    time: 'Now',
    location: 'Lome',
    desc:'  Lorem ipsum dolor sit, amet consectetur adipisicing elit. esse autem ex voluptas minus magni iste porro eum numquam maxime?',
    company: 'TechPro.co'
  }

]

export const Stage = () => {
  return (
    <div>
      <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">
       {
        Data.map(({id,image,title,time,location,desc,company})=>{
          return(
            <div key={id} className="group group/item singleJob w-[250px] p-[15px]  bg-white rounded-md hover:bg-primary shadow-lg shadow-greyIsh-400/700 hover:shadow-lg">
            <span className='flex justify-between items-center gap-4'>
                <h1 className='text-[16px] font-semibold text-titlecolor group-hover:text-white'>
                  {title}
                </h1>
                <span className='flex items-center text-[#ccc] gap-1'> 
                    <BiTimeFive/>{time}
                </span>
  
               
            </span>
             <h6 className='text-[#ccc]'>{location}</h6>
  
                <p className='text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white'>
                      {desc}
                </p>
  
                <div className="company flex items-center gap-2">
                  <img src={image} alt="Company logo" className='w-[20%]' />
                  <span className='text-[14px] py-[1rem] block group-hover:text-white'>{company}</span>
                </div>
  
                <button className='border-[2px] rounded-md block p-[10px] w-full text-[14px] font-semibold text-textcolor hover:bg-white group-hover/item:text-textcolor'>
                  Postuler maintenant
                </button>
          </div>
          )
        }

        )
       }
      </div>
    </div>
  )
}
export default Stage;