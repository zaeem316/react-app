import React, { useState } from 'react';
import axios from 'axios';
import './App.css';


function App() {
  const [keyword, setKeyword] = useState('')
  const [images, setImages] = useState([]);

  async function getImages() {
    const url = 'https://serverless-api.zaeem316.workers.dev';

    let resp = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({ query: `car` }),
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
    })
    let x = resp
    console.log(x)
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
