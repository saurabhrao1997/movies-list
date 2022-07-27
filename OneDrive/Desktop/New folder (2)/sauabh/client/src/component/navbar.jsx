import React,{useEffect, useState} from 'react'
import {useSelector,useDispatch} from "react-redux";
import {filterApi}  from "../actions/action"; 
import {Link} from "react-router-dom"
export default function navbar() {
  let filterArr = []
  const [Search,SetSearch] = useState("")
  const data = useSelector((state)=>state.reducer.movies);
  const filterData1 = useSelector(state => state)

   console.log(filterData1)

  const dispatch = useDispatch();
  let title  = data.map((object)=>{
       return object.Title
  })

   

  let filterData =data.filter((object)=>{

    if(Search == ""){
        return object
    }else if(object.Title.toLowerCase().includes(Search.toLowerCase())){
        return object
    }
  })

useEffect(()=>{
dispatch(filterApi(filterData))
},[])


  return (
    <nav className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Movies4You</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
         
        
          
        </ul>
     
      </div>
    </div>
  </nav>

  )
}
