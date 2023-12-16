import './App.css'
import { Link, Route, Routes, useParams } from 'react-router-dom'

const Home = () => <h3>Home  .... Contenido de la pagina</h3>

const SearchPage = () => {
  const tacos = [
    'cochinita',
    'chili',
    'pastor',
    'quesadilla'
  ]

  return (
    <div>
      <h3>Search Tacos  .... Lista de tacos</h3>
      <ul>
        {
        tacos.map(taco => (
          <li key={taco}><Link to={`/tacos/${taco}`}>{taco}</Link></li>
        ))
      }
      </ul>
    </div>
  )
}

const Tacos = () => {
  const { nombre } = useParams()
  return (
    <div>
      <h3>Tacos</h3>
      {/* Agregado "nombre de ruta dinámica" como texto explicativo */}
      <p>nombre de ruta dinámica: {nombre}</p>
    </div>
  )
}

function App () {
  return (
    <>
      <div className='App'>
        <header>
          <h2>Prueba react DOM</h2>
          <nav>
            <ul>
              {/* para hacer una SPA hay que cambiar el a tag por link y href por to */}
              <li><Link to='/search-page'>Go to search</Link></li>
              <li><Link to='/'>Go to Home</Link></li>
            </ul>
          </nav>

        </header>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search-page' element={<SearchPage />} />
          <Route path='/tacos/:nombre' element={<Tacos />} />

        </Routes>
      </div>
    </>
  )
}

export default App
