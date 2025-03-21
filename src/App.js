import { useEffect, useState } from 'react';
import './App.css';
import React from 'react';

const Card=(props)=>{
  return <div className='card'>
    <img src={props.data.thumbnail} alt={props.data.brand}></img>
    <p>{props.data.title}</p>
  </div>
}

const App=()=>{
  const [result,setResult]=useState([])
  const FetchData=async()=>{
    const data=await fetch("https://dummyjson.com/products?limit=500")
    const json=await data.json()
    console.log(json.products)
    setResult(json?.products)
  }
  useEffect(()=>{
    FetchData()
  },[])
  return <div className='App'>
    <h3>Pagination</h3>
    <div className='btn-container'>
      {[...Array(10).keys().map((x)=>{
        return <button>{x}</button>
      })]}
    </div>
    <div className='flex'>
    {result.map((x)=>{
      return <Card key={x.id} data={x}/>
    })}
    </div>
  </div>
}
export default App;
