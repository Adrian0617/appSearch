import { useEffect, useState } from 'react'

import './App.css'
import axios from 'axios';
import { ListOfDocuments } from './components/ListOfDocuments';
import { Header } from './components/Header';

function App() {

  const [dataFetch, setDataFetch] = useState([])

  async function fetchingData() {

    const { data } = await axios.get("https://y76g48mgpg.execute-api.us-west-2.amazonaws.com/Prod/api/transactions", {
      headers: {
        'Authorization': "GvXcYnWD!&TuP0&8wtC6TXWG4JmonqAf3Xaj5@TTANm5aqW*FQSjMa$n6S^ksDxWQampAhceFTd3&dil3DF^5glHwb9E%p#Mfyb"
      }
    }
    )
    setDataFetch(data)
  }
  const formatFileAndDate = dataFetch.map(item => {
    const convertDate = String(item.created)
    const convertFile = item.file.split('/')
    const formatedFile = convertFile[convertFile.length -1]
    const formatDate = convertDate.split("T")[0]
    return {...item, file: formatedFile, created: formatDate}
  })

  useEffect(() => {
    fetchingData()
  }, [])

  return (
    <>
      <Header/>
      <ListOfDocuments 
        formatFileAndDate={formatFileAndDate} 
        setDataFetch={setDataFetch}
      />
    </>
  )
}

export default App
