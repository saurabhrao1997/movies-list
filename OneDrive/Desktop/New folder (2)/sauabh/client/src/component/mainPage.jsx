import React,{useEffect, useState} from 'react';
import {useSelector,useDispatch} from "react-redux";
import axios from 'axios';
import Navbar from "./navbar";
import Card from "./card";
import {callApi}  from "../actions/action"; 
import "../css/mainPage.css"



export default function mainPage() {
   const[Val,SetVal] = useState("")
   const [Page ,setPage] = useState(2)
    const data = useSelector((state)=>state.reducer.movies);
    const dispatch = useDispatch();

console.log(Page)
const fetchMovies = async ()=>{
let responce =await fetch(`/${Page}.json`)
                      .then((responce)=>responce.json()) 
                      .then((data)=>{
                        return data["Movie List"]
                        // console.log(data)
                      })
                 dispatch(callApi(responce));
}

useEffect(()=>{
    fetchMovies()
    console.log("main movies list",data)
},[Page])




let filterData =data.filter((object)=>{

    if(Val == ""){
        return object
    }else if(object.Title.toLowerCase().includes(Val.toLowerCase())){
        return object
    }
})
console.log(filterData)



const handlePriClick=()=>{
  setPage(1)
}

const handleNextClick=()=>{
setPage(2)
}


//   console.log()
// const {discription,id,title} =data.reducer.product[0]
  return (
    <div className='container py-5'>
   
     
    <h1 className='text-center'>Latest Movies</h1>
    <div className="d-flex justify-content-center pt-5 box"> <input className='inputElement' type="text" value={Val} onChange={(e)=>SetVal(e.target.value)}/><i className="fa-solid fa-magnifying-glass"></i></div>
   
   <div className='row pt-5'>
     
        
      <Card filterData={filterData}/>
     
   </div>
   <div className='d-flex justify-content-between'>
   <button type="button" disabled={Page == 1 ? true : false} className="btn btn-primary" onClick={handlePriClick}>&larr; Privious</button>
   <button type="button" disabled={Page == 2 ? true : false} className="btn btn-primary" onClick={handleNextClick}>next  &rarr;</button>

   </div>
  
 </div>
  )
}
