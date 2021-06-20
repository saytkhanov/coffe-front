import { useEffect, useState } from 'react'
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './Header'
import Main from './Main'
import APIContext from "../src/context/ApiContext";
import Preloader from './Preloader'



function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch('http://localhost:3005/drinks')
      .then(res => res.json())
      .then(json => {
        setData(json)
        setIsLoading(false)
      })
  }, []);


  const handleDelete = (_id) => {
    fetch(`http://localhost:3005/drinks/${_id}`, {
      method: 'DELETE',  headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        window.location.reload()
      })
  }
  return (
    <div>
      {isLoading ? (
          <Preloader/>
        ) : <Router>
          <Header/>
          <APIContext.Provider value={{ data, handleDelete }}>
            <div className="App">
              <Main/>
            </div>
          </APIContext.Provider>
        </Router>
      }
    </div>
  )
}

export default App;
