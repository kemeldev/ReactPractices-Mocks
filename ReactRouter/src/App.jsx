import './App.css'
import { Route, Routes } from 'react-router-dom'

const Home = () => <h3>Home  .... Contenido de la pagina</h3>
const SearchPage = () => <h3>Search Page  .... Contenido de la pagina</h3>

function App () {
  return (
    <>
      <div className='App'>
        <header>
          <h2>Prueba react DOM</h2>
          <nav>
            <ul>
              <li><a href='/search-page'>Search-Page</a></li>
              <li><a href='/'>Home</a></li>
            </ul>
          </nav>

        </header>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search-page' element={<SearchPage />} />
        </Routes>
      </div>
    </>
  )
}

export default App
