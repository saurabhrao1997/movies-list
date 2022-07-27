import React from 'react';
import {useSelector,useDispatch} from "react-redux";
import { useParams,useNavigate } from "react-router-dom";
import "../css/mainPage.css"
export default function moviesDetails() {
   let navigate = useNavigate();
    const {moviesId}  =useParams();
    const data = useSelector((state)=>state.reducer.movies);
      const findMovie = (data,moviesId)=>{
        const index1 =data.findIndex((object,index)=>{
         return object.IMDBID === moviesId;
        })
        return data[index1]

      }

let moviesDetail = findMovie(data,moviesId)


console.log(moviesDetail)
let second = moviesDetail.Runtime
let hours = Math.floor(second/60);
let min = second % 60
  return (
<>

    
   
<div className="container py-5" >

    <div className="row">
        <div className="col-lg-12 col-md-10 " style={{boxShadow:"0 0 0 rgba()"}}>
            
        
            <img src={moviesDetail["Movie Poster"]} style={{width:"100%"}} alt="loading" /> 
               
                <h3 style={{paddingTop:"20px"}}> {moviesDetail.Title}</h3> 
               
              
              <h5>Summary :</h5>
                <p>{moviesDetail.Summary}</p>

                <h5>Genres :</h5>
                <p>{moviesDetail.Genres ? moviesDetail.Genres.split("|"):"unknow" }</p>

              
                <h5>Director :</h5>
                <p>{moviesDetail.Director}</p>
              
                <h5>Cast :</h5>
                <p>{moviesDetail.Cast ? moviesDetail.Cast.split("|"):"unknown" }</p>
              
                <h5>Year :</h5>
                <p>{moviesDetail.Year}</p>
                
                <h5>hours :</h5>
                <p>{hours}:{min} min</p>

                <h5>Writers :</h5>
                <p>{moviesDetail.Writers}</p>
                
                <h5>Rating :</h5>
                <p>{moviesDetail.Rating}</p>


              
               {/* <table>
              
               
               <tr>
                <th>Director :</th>
                <td>{moviesDetail.Director}</td>
               </tr>
               <tr>
                <th>Cast :</th>
                <td>{moviesDetail.Cast}</td>
               </tr>

               <tr>
               <th>Year :</th>
                <td>{moviesDetail.Year}</td>
               </tr>
               <tr>
               <th>hours :</th>
                <td>{hours}:{min} min</td>
               </tr>

               <tr>
               <th>Writers :</th>
                <td>{moviesDetail.Writers}</td>
               </tr>


               <tr>
               <th>Rating :</th>
                <td>{moviesDetail.Rating}</td>
               </tr>
         
               
               <tr>
               <th>Genres :</th>
                <td>{moviesDetail.Genres ? moviesDetail.Genres.split("|"):"unknow" }</td>
               </tr>


              </table>  */}




            
        </div>
        <div className='d-flex justify-content-center'><button className='btn btn-outline-primary btn-lg' onClick={()=>{navigate("/")}}>go back</button></div>
    </div>
</div>
</>
  )
}
