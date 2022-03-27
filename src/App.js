import React, { useState } from 'react';
import axios from 'axios';
import './App.css';


function App() {
  const [keyword, setKeyword] = useState('')
  const [images, setImages] = useState([]);

  function getImages() {

    axios.post(`https://serverless-api.zaeem316.workers.dev`, { query: `car` }, {mode: 'no-cors'})
      .then(res => {
        console.log(res);
        console.log(res.data);
      })

    // fetch('https://serverless-api.zaeem316.workers.dev', {
    //   method: 'POST', // or 'PUT'
    //   mode: 'no-cors',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({ query: `car` }),
    // })
    // .then(data => data[body].json())
    // .then(a => console.log(a))
    // const imagesArray = await resp.json();
    // const imagesArray = resp.body;
    // console.log(imagesArray)
    // setImages(data)
  }

  return (
    <div>
      <div className='d-flex justify-content-center pt-4'>
        <div className='w-50'>
          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Search Images" onChange={(e) => setKeyword(e.target.value)} />
            <div className="input-group-append">
              <button className="btn btn-outline-success" type="button" onClick={() => { getImages() }}>
                Button
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className='mt-4 d-flex flex-wrap justify-content-around'>

        {images.map((data, index) => {
          return (
            <div>
              <img className='pt-4' src={data.image} key={index} />
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
