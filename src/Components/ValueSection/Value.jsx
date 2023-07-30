import React from 'react'
import simple from '../../assets/simple.png'


export const Value = () => {
  return (
    <div className='mb-[4rem] mt-[6rem]'>
        <h1 className='text-titlecolor text-[25px] py-[2rem pb-[3rem] font-bold w-[400px] block]'>
        La valeur qui nous tient fidèles et responsables 
        </h1>

        <div className='grid gap-[10rem] grid-cols-3 items-center'>
            <div className="singleGrid rounded-md hover:bg-[#d6a53c] p-[1.5rem]">
              <div className="flex items-center gap-3">
                <div className="imgDiv p-[4px] rounded-[.8rem] bg-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
                  <img src={simple} alt="" className='w-[80%]' />
                </div>
                <span className='font-semibold text-titlecolor text-[18px]'>
                  Simplicity
                </span>
              </div>
              <p className='text-[13px] text-textcolor opacity-[.7] py-{1rem] font-semibold'>
                    Things bein made beautiful simple are at heart of everything we do.
              </p>
            </div>

            <div className="singleGrid rounded-md hover:bg-[#1f99c9] p-[1.5rem]">
              <div className="flex items-center gap-3">
                <div className="imgDiv p-[4px] rounded-[.8rem] bg-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
                  <img src={simple} alt="" className='w-[80%]' />
                </div>
                <span className='font-semibold text-titlecolor text-[18px]'>
                  Simplicity
                </span>
              </div>
              <p className='text-[13px] text-textcolor opacity-[.7] py-{1rem] font-semibold'>
                    Things bein made beautiful simple are at heart of everything we do.
              </p>
            </div>

            <div className="singleGrid rounded-md hover:bg-[#eeedf7] p-[1.5rem]">
              <div className="flex items-center gap-3">
                <div className="imgDiv p-[4px] rounded-[.8rem] bg-[#a2aabe] h-[40px] w-[40px] flex items-center justify-center">
                  <img src={simple} alt="" className='w-[80%]' />
                </div>
                <span className='font-semibold text-titlecolor text-[18px]'>
                  Simplicity
                </span>
              </div>
              <p className='text-[13px] text-textcolor opacity-[.7] py-{1rem] font-semibold'>
                    Things bein made beautiful simple are at heart of everything we do.
              </p>
            </div>
        </div>
    </div>
  )
}
export default Value;