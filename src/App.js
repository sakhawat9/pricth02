import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [country, setCountry] = useState([])
  useEffect(() => {
    fetch(`https://restcountries.eu/rest/v2/all`)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setCountry(data)})
  }, [])
  // const country = [{name: 'Abir', email: 'abir@gmail.com'}, {name: 'Sojib', email: 'sojib@gmail.com'}, {name: 'Titu', email: 'titu@gmail.com'}, {name: 'Robin', email: 'robin@gmail.com'}]
  return (
    <div className="App">
      <CountryCount ></CountryCount>
      {
        country.map(cr => <Countries name={cr.name} capital={cr.capital} flag= {cr.flag} alpha2Code={cr.alpha2Code} area={cr.area}></Countries>)
      }
      
    </div>
  );
}

function CountryCount(){
  const [count, setCount] = useState(0);
  const handleClick = () => setCount(count + 1)
  return(
    <div>
      <button onClick={handleClick}>Add country</button>
      <h3>Number of country: {count}</h3>
      <CountryNewCount country={count + 5}></CountryNewCount>
      <CountryNewCount country={count + 10}></CountryNewCount>
    </div>
  )
}

function CountryNewCount(props){
  return(
    <div>
      <h4>Number of new country : {props.country}</h4>
    </div>
  )
}

function Countries(props){
  const countryStyle = {
    border: '2px solid #6047EC',
    margin: '10px',
    width: '400px',
    backgroundColor: '#DEE1E6',
  }
  return(
    <div style={countryStyle}>
      <img style={{width: '200px',}} src={props.flag} alt="Picture"/>
      <h3>Country Name : {props.name}</h3>
      <h3>Capital : {props.capital}</h3>
      <p><span>Alpha2Code : {props.alpha2Code},</span> <span> Area : {props.area}</span></p>
    </div>
  )
}

export default App;
