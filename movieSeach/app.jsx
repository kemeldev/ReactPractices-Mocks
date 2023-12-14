import { useEffect, useRef, useState } from 'react'
import debounce from 'just-debounce-it'

export default function App () {
  const textInputRef = useRef()
  const fetchedMoviesRef = useRef([])
  const [search, setSeach] = useState('')
  const [errors, setError] = useState('')
  const [sorted, setSorted] = useState(true)
  const [fetchedMovies, setFetchedMovies] = useState([])

  const API_KEY = '4287ad07'
  const URL = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`
  // const mock = https://www.omdbapi.com/?apikey=4287ad07&s=Transformers

  const fetchMovies = async () => {
    const response = await fetch(URL)
    const { Search } = await response.json()
    setFetchedMovies(Search)
    console.log(search)

    fetchedMoviesRef.current = Search
  }

  const sortMovies = () => {
    let sortedMovies
    setSorted(prevState => !prevState)

    if (sorted) {
      sortedMovies = [...fetchedMovies].sort((a, b) => a.Title.localeCompare(b.Title))
      setFetchedMovies(sortedMovies)
    } else {
      sortedMovies = fetchedMoviesRef.current
    }

    setFetchedMovies(sortedMovies)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    // const dataUsingRef = textInputRef.current.value

    const SearchWord = new FormData(e.target)
    const data = SearchWord.get('query')
    setSeach(data)

    if (data === '') {
      const newError = 'No se puede buscar una pelicula vacia'
      setError(newError)
      return
    }
    if (data.match(/\d+/)) {
      const newError = 'No pueden ser solo numeros'
      setError(newError)
      return
    }
    if (data.length < 3) {
      const newError = 'Al menos 3 letras para buscar la pelicula'
      setError(newError)
    }
  }

  const handleSort = () => {
    setError('')
    if (search === '') {
      const newError = 'Primero debe buscar peliculas antes de poder ordenarlas'
      setError(newError)
      return
    }
    sortMovies()
  }

  const handleEliminate = () => {
    let elminatedMovies
    setSorted(prevState => !prevState)

    if (sorted) {
      elminatedMovies = [...fetchedMovies].filter(movie => movie.Poster !== 'N/A')
      setFetchedMovies(elminatedMovies)
    } else {
      elminatedMovies = fetchedMoviesRef.current
    }
  }

  const onSyncSeach = debounce(() => {
    const dataUsingRef = textInputRef.current.value
    setSeach(dataUsingRef)
  }, 1000)

  useEffect(() => {
    fetchMovies()
  }, [search])

  return (
    <>
      <header>
        <form onSubmit={handleSubmit} action="/search" method="get" className="form">
          <h2>Buscador de películas</h2>
          <label htmlFor="movieSearchInput">
            Escribe la pelicula y presiona el botton submit o enter
            <input name='query' type="text" placeholder="Avengers, Matrix ..." id="movieSeach" />
          </label>

          <label htmlFor="syncMovieSearch">
            Busca tu pelicula aca de manera sincrónica
            <input onChange={onSyncSeach} name='syncQuery' type="text" placeholder="Avengers, Matrix ..." id="syncMovieSearch" ref={textInputRef}/>
          </label>

          <label htmlFor="checkboxSort">Ordenar alfabeticamente
            <input onChange={handleSort} type="checkbox" id="checkboxSort"></input></label>

          <label htmlFor="checkboxDelete">Eliminar tiulos sin imagen
            <input onChange={handleEliminate} type="checkbox" id="checkboxDelete"></input></label>
          <button type="submit">Buscar</button>
        </form>
      </header>

      <main>
        {
          errors === '' ? null : <h2>{errors}</h2>
        }
        {
          search === ''
            ? null
            : (
            <Movies
            movies={fetchedMovies}
            errors={errors}
          />
              )
        }

      </main>
    </>

  )
}

export function Movies ({ movies, errors }) {
  return (
    <div className="movieContainer">
    {
       movies && movies.length > 0
         ? (
             movies.map((movie, index) => {
               return (
            <div
              className="movie"
              key={movie.imdbID}
            >
              <h3>{movie.Title}</h3>
              <h4>{movie.Year}</h4>
              <img
                src={movie.Poster}
                width={200}
                alt={movie.Title}
              />
            </div>
               )
             })
           )
         : null
    }
    </div>

  )
}
