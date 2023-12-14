import { useEffect, useState } from 'react'
import './App.css'

function App () {
  const [randomFact, setRandomFact] = useState('')
  const [threeWords, setThreeWords] = useState()
  const URL = 'https://catfact.ninja/fact'
  const imgURL = `https://cataas.com/cat/cute/says/${threeWords}?fontSize=30`

  const fetchRandomFact = async () => {
    try {
      const response = await fetch(URL)
      const { fact } = await response.json()
      setRandomFact(fact)
      const word = fact.split(' ').slice(0, 3).join(' ')
      setThreeWords(word)
    } catch (error) {
      console.error('Error fetching random fact', error)
      throw new Error(error)
    } finally {
      console.log('Fetching completed')
    }
  }

  useEffect(() => {
    fetchRandomFact()
  }, [])

  const handleFetch = () => {
    fetchRandomFact()
  }

  return (
    <>
      <h1>Cat App</h1>
      <button onClick={handleFetch}>Click here to fetch new data</button>
      <p>{randomFact}</p>
      <img
        src={imgURL}
        alt={threeWords}
        width={400}

      >
      </img>
    </>
  )
}

export default App
