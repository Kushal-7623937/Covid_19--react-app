import React, { useState } from 'react';
import './App.css';
import axios from 'axios';


function App(){

  const[data , setData]= useState({});
  const[location,setLocation]=useState('');

  const url=`https://disease.sh/v3/covid-19/countries/${location}`

const getDataBase=(e)=>{
        if(e.key === "Enter"){
axios.get(url).then((response)=>{

    setData(response.data)
    console.log(response.data)
})
}
}
return(
  <>
        <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <a className="navbar-brand text-warning" href="#">covid-19</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link text-white" href="#" id="first-nav">Home <span class="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-white" href="#" >Features</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-white" href="#">Pricing</a>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled text-white" href="#">About us</a>
      </li>
    </ul>
  </div>
</nav>
   
    
    <div className="bg-image">
    <h3 className="text-white main-heading"> Get Latest covid-19 updates </h3>
    <input type="text" size="30" placeholder="Search by city name" id="search-filter" value={location} onChange={(e)=>setLocation(e.target.value)} onKeyPress={getDataBase} />
    </div>
    <div className ="container">
    <div className="main-title">
    {data.flag ?<img src={data.flag} />: null}

{data.country ? <h3 className="text-white"> {data.country} </h3> : null}

    </div>
    <div className="container-fluid d-flex flex-row">
    <div className="card " id="first">

    <div className="card1" >
    <i class="fa-solid fa-virus-covid fa-xl"></i>

   <h4 className="first-case"> Total cases</h4>
   <>
   {data.cases? <h4 className="text-dark" id="allData"> {data.cases} </h4> : null}
  </>

    </div>
    </div>
        <div className="card" id="second">

    <div className="card1" >
    <i class="fa-solid fa-mask-face fa-xl"></i>
    <h4 className="second-case"> Total Active </h4>
  {data. active ?<h4 className="text-dark" id="allData">{data.active}</h4>: null}
    </div>
    </div>
        <div className="card" id="third">

    <div className="card1">
<i class="fa-solid fa-viruses fa-xl"></i>
    <h4 className="first-case"> Total Death </h4>
  {data.deaths ?<h4 className="text-dark" id="allData">{data.deaths}</h4>: null}
    </div>
    </div>
     <div className="card" id="fourth">

    <div className="card1" >
<i class="fa-solid fa-comment-medical fa-xl"></i>   
 <h4 className="third-case"> Total tests </h4>
  {data. tests ?<h4 className="text-dark" id="allData">{data.tests}</h4>: null}
    </div>
    </div>
    </div>
    </div>


    </div>
</>




 );

}

export default App;

