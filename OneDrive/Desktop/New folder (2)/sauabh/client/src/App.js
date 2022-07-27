import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Card from "./component/card";
import Navbar from "./component/navbar";
import MainPage from './component/mainPage';
import MoviesDetails from './component/moviesDetails';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import {} from "./component/navbar";
export default function App() {
  return (

<BrowserRouter>
<Navbar/>
<Routes>

 <Route exact path="/" element={<MainPage/>}/>
 <Route exact path="/Card" element={<Card/>}/>
 <Route exact path="/:moviesId" element={<MoviesDetails/>}/>



   <Route>404 page is not found</Route>

   

</Routes>

</BrowserRouter>



    
  )
}
