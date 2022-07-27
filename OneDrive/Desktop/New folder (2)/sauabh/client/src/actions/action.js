// export  const callApi =(dispatch:any)=>{

//      let url ="https://facebook.github.io/react-native/moves.json";
//      let result = fetch(url).then((data)=>data.json()).then((data)=>data)
//     return dispatch({
//         type:"CALL_API",
//         data:data
//     })
//   }


export const  callApi =(api)=>{
  return{
    type:"CALL_API",
    payload:api,
  }
}


export const filterApi =(api) =>{
  return{
    type:"FITER_API",
    payload:api
  }
}