import React, { useContext } from 'react'
import  APIContext  from './context/ApiContext'
function Main () {

    const { data, handleDelete } = useContext(APIContext);
  return (
    <div className='container-xxl'>
      {data.map((item, _id) => {
      return(
                <div className="card" style={{ width: '18rem' }} key={item._id}>
                  <img src="https://images.wallpaperscraft.ru/image/kofe_kniga_ochki_140830_225x300.jpg" className="card-img-top w-100" alt="coffee"/>
                    <div className="card-body">
                      <h5 className="card-title">{item.name}</h5>
                      <p className="card-text">{item.cost}</p>
                      <button onClick={() => handleDelete(item._id)} className="btn btn-primary">Удалить</button>
                    </div>
                </div>
       )})}
    </div>
  )
}

export default Main