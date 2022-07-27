import React from 'react'
import {useSelector,useDispatch} from "react-redux";
import {Link} from "react-router-dom";

export default function card({filterData}) {

  console.log(filterData)
  const data = useSelector((state)=>state.reducer.movies);

 
  console.log(data)
  return (

<>



{


filterData.map((object,index)=>{

    const {Title,Year,Cast,Director,Genres,IMDBID,Rating,Summary} = object

    // console.log(typeof(Cast))
    let val = Cast.split("|");
    // console.log(val)
    return(


     
          <div className='col-md-6 col-lg-4 col-12 my-4'>
                        
                    <div className="card" style={{ "width": "18rem"}}>
                    <Link to={`/${IMDBID}`} style={{textDecoration:"none",color:"black"}}>
                        <img src={object["Movie Poster"]} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{Title.slice(0,20)}..</h5>
                            <p className="card-text">{Genres ? Genres.split("|"): "unknown"}</p>
                            <h5>Summary</h5>
                            <p className="card-text">{Summary.slice(0,200)}...</p>
                            <p className="card-text"><span style={{"fontWeight":"bolder"}}>Director : </span>{Director}</p>
                            <p className="card-text"><span  style={{"fontWeight":"bolder"}}>Year : </span>{Year}</p>
                            <p className="card-text"><span  style={{"fontWeight":"bolder"}}>Rating : </span>{Rating}</p>
                          </div>
                       </Link>
                        <a href={object["YouTube Trailer"]} className="btn btn-primary">Trailer</a>
                    </div>
                   
  
          </div>
    

    )
  })



}




</>

 




 
  )
}
