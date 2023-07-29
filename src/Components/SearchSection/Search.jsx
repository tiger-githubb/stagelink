import Input from 'postcss/lib/input'
import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import {BsHouseDoor} from 'react-icons/bs'
import {CiLocationOn} from 'react-icons/ci'


export const Search = () => {
  return (
    <div className='searchDiv grid gap-10 bg-[#F1F4F8] rounded-[10px] p-[3rem]'>

      <form action=""> 
        <div className="firstDiv flex justify-between items-center rounded-[8px] gap-[10px] bg-[#FFFFFF] p-5 shadow-lg shadow-[#f1f4f8]-700">

            <div className="flex gap-2 items-center">
            <AiOutlineSearch className='text-[25px] icon'/>
            <input type='text' className='gb-transparent text-blue-500 focus:outline-none w-[100%]' placeholder='Recherche de stage ...'/>
            <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6] hover:text-[#252b36] icon'/>
            </div>


            <div className="flex gap-2 items-center">
            <BsHouseDoor className='text-[25px] icon'/>
            <input type='text' className='gb-transparent text-blue-500 focus:outline-none w-[100%]' placeholder='Recherche par entreprise ...'/>
            <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6] hover:text-[#252b36] icon'/>
            </div>


            <div className="flex gap-2 items-center">
            <CiLocationOn className='text-[25px] icon'/>
            <input type='text' className='gb-transparent text-blue-500 focus:outline-none w-[100%]' placeholder='Recherche par lieu ...'/>
            <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6] hover:text-[#252b36] icon'/>
            </div>


            <button className='bg-[#001E65] h-full p-5 px-10 rounded-[10px] text-[#ffffff] cursor-pointer hover:bg-blue-300'>Recherche</button>

        </div>
      </form>

      <div className="secDiv flex items-center gap-10 justify-center">
        <div className="singleSearch flex items-center gap-2">
            <label htmlFor="relevance" className='text-[#808080] font-semibold'>Trier par: </label>

            <select name="" id="relevance" className='bg-white rounded-[3px] px-4 py-1'>
              <option value="">Pertinence</option>
              <option value="">Inclusive</option>
              <option value="">Commencer avec</option>
              <option value="">Contains</option>

            </select>
        </div>

        <div className="singleSearch flex items-center gap-2">
            <label htmlFor="type" className='text-[#808080] font-semibold'>Type: </label>

            <select name="" id="typt" className='bg-white rounded-[3px] px-4 py-1'>
              <option value="">Temps plein</option>
              <option value="">En ligne</option>
              <option value="">Contrat</option>
              <option value="">Temps partielle</option>

            </select>
        </div>

        <div className="singleSearch flex items-center gap-2">
            <label htmlFor="level" className='text-[#808080] font-semibold'>Niveau: </label>

            <select name="" id="level" className='bg-white rounded-[3px] px-4 py-1'>
              <option value="">Senior</option>
              <option value="">Debutant</option>
              <option value="">Intermediaire</option>
              <option value="">Avancé</option>

            </select>
        </div>

        <span className='text-[#a1a1a1]'>Reinitialiser</span>

        

      </div>
      
      </div>
  )
}
export default Search