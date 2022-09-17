import React,{useState} from 'react';
import {MdOutlineSearch} from "react-icons/md";
function Search({weathersearch}) {
  const [city, setCityname]=useState('');
  return (
    <div className="search_form">
      <form onSubmit={(e)=>{
        e.preventDefault();
        weathersearch(`q=${city}`)
        }}>
       <input type="text" placeholder="Search City" onChange={(e)=>setCityname(e.target.value)}/>
        <button className='search_btn' onClick={(e)=>weathersearch(`q=${city}`)}>
        <MdOutlineSearch/>
        </button>
        </form>
    </div>
  )
}

export default Search