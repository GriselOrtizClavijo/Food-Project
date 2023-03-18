import React, { useEffect } from 'react'
import { useState } from 'react'

const RandomDog = () => {

    const [perrito, setPerrito] = useState({})
    const url = 'https://dog.ceo/api/breeds/image/random'

    const fetchData = () => {
        fetch(url)
        .then ((response) => response.json())
        .then((data) => setPerrito(data))

    }

    useEffect(() => {
        fetchData()
    }, [])

    
    console.log(perrito);


  return (
    <div style ={{display: 'flex', flexDirection: 'column'}}>
        <img src={perrito.message} alt=''/>
        <button onClick={() => fetchData()}>Cambiar perrito</button>
    </div>
  )
}

export default RandomDog