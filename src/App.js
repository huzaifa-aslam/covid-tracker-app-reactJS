import React,{useState,useEffect} from 'react';
import './App.css';
import image from './imgs/image.png'
import {Cards,CountryPicker,Charts} from './components'
import {FetchGlobal} from './Api'

function App() {
  const [globalData,setGlobalData]=useState({})
  const [country,setCountry]=useState("")
useEffect(()=>{
  const FetchGlobalData=async()=>{
    const data=await FetchGlobal();
    setGlobalData(data)
  }
  FetchGlobalData()
},[])

const countryData=async(counrty)=>{
  const data=await FetchGlobal(counrty);
  setCountry(counrty)
  setGlobalData(data)
console.log(data)
}

  return (
    <div className="App">
      <img src={image} alt="Covid-19" className="img"/>
    <Cards data={globalData}/>
    <CountryPicker newCounrty={countryData}/>
    <Charts chGlobalData={globalData} country={country} />
    </div>
  );
}

export default App;
