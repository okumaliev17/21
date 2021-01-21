import React, {useState} from 'react'
import Form from './Components/Form'
import { API ,KEY } from './config'
import Output from './Components/Output'


export default function App() {
const [data, setData] = useState([])

  const searchGiphyByName = async (name) =>{
  const responce = await fetch(API+name+KEY+'&limit=5')
  const request = await responce.json()
  setData(request.data)
  }

  return (
    <div>
  <h1>GIPHY</h1>
  <Form
   search={searchGiphyByName}
  />
  <Output
    data = {data}
  />
    </div>
  )
  
}
  