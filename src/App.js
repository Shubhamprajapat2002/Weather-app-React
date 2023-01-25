import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import './App.css';


function App() {

  const apiKey = "e35250ac694b7c559c56bbd4231be088"
  const [inputCity, setInputCity] = useState("")
  const [data, setData] = useState({})

  const getWeatherDetails = (cityName) => {

    if (!cityName) return
    const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey
    axios.get(apiURL).then((res) => {
      console.log("response", res.data)

      setData(res.data)

    }).catch((err) => {
      console.log("err", err)
    })
  }

  const handleChangeInput = (e) => {
    console.log("value", e.target.value)
    setInputCity(e.target.value)

  }

  const handleSearch = () => {
    getWeatherDetails(inputCity)
  }



  return (
    <>



      <div className="col-md-12">
        <div className="weatherBg">
          <h1>Weather App</h1>


          <input type="text" className='form-control' placeholder='Enter City' value={inputCity} onChange={handleChangeInput} />
          <button className='btn btn-primary' onClick={handleSearch}  >Search</button>


          {/* {Object.keys(data).length > 0 && */}
         
            <div className="col-md-12  mt-5 ">
              <div className="shadow rounded weatherResultBox ">
                <img className='weatherIcon' src="http://store-images.s-microsoft.com/image/apps.60423.13664108468657913.8218191b-9e2a-49f4-8455-3c027b985a5d.30a38556-a2f8-4e20-835b-d8d914491b8b" alt="" />
                <h5 className="weatherCity">{data?.name}</h5>
                <h6 className="weatherTemp">{((data?.main?.temp) - 273.15).toFixed(2)}°C</h6>
              </div>
            </div>
          {/* } */}


          
          
            
          <div >

          <div className="card">
            <div className="container">
              <h5>↓ Min</h5>
              <p>{((data?.main?.temp_min) - 273.15).toFixed(2)}°C</p>
            </div>
          </div>

          <div className="card">
            <div className="container">
              <h5>↑ Max</h5>
              <p>{((data?.main?.temp_max) - 269.15).toFixed(2)}°C</p>
            </div>
          </div>


          </div>
        
          <div >

          <div className="card">
            <div className="container">
              <h5>☺️Feels Like</h5>
              <p>{((data?.main?.feels_like) - 273.15).toFixed(2)}°C</p>
            </div>
          </div>

          <div className="card">
            <div className="container">
              <h5>🌫️Pressure</h5>
              <p>{data?.main?.pressure}hPa</p>
            </div>
          </div>

              

          </div>

          <div >

<div className="card">
  <div className="container">
    <h5>Humidity</h5>
    <p>{data?.main?.humidity}%</p>
  </div>
</div>

<div className="card">
  <div className="container">
    <h5>💨Wind Speed</h5>
    <p>{data?.wind?.speed}m/s</p>
  </div>
</div>

    

</div>


        </div>
        
      </div>
    </>
  );
}

export default App;
