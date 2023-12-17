import './App.css'
import { Navigate, useNavigate, Link, Route, Routes, useParams, Outlet, NavLink as NavLinkReacRouter } from 'react-router-dom'
import { useAuth, AuthProvider } from './useAuth'

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
      <Outlet />
      <h3>Tacos</h3>
      {/* Agregado "nombre de ruta dinámica" como texto explicativo */}
      <p>nombre de ruta dinámica: {nombre}</p>
      <Link to='details'>Ir a los detalles del taco</Link>
      <Outlet />
    </div>
  )
}

const Login = () => {
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleClick = () => {
    login()
    navigate('/search-page')
  }
  return (
    <div>
      <button onClick={handleClick}>Login</button>
    </div>
  )
}

const TacoDetails = () => {
  const { nombre } = useParams()

  return (
    <h2>Taco Details {nombre} OUTLET</h2>
  )
}

const NavLinkNuestro = ({ to, children, ...props }) => {
  return (
    <NavLinkReacRouter
      {...props}
      className={({ isActive }) => { return isActive ? 'is-active' : undefined }}
      to={to}

    >{children}

    </NavLinkReacRouter>
  )
}

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth()
  if (!isAuthenticated) {
    return <Navigate to='/login' />
  }
  return children
}

function App () {
  return (
    <AuthProvider>
      <div className='App'>
        <header>
          <h2>Prueba react DOM</h2>
          <nav>
            <ul>
              {/* para hacer una SPA hay que cambiar el a tag por link y href por to */}
              <li><NavLinkNuestro to='/search-page'>Go to search</NavLinkNuestro></li>
              <li>
                {/* Este nav link nos permite tener el classname de activo, y de este modo darle props in CSS,
                Una vez creado el componente podemos eliminar lo de classNmae porque ya lo jalaria del componente, pero lo dejamos para que se vea */}
                <NavLinkNuestro
                  className={({ isActive }) => { return isActive ? 'is-active' : undefined }}
                  to='/'
                >
                  Go to Home
                </NavLinkNuestro>
              </li>
            </ul>
          </nav>

        </header>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search-page' element={<ProtectedRoute><SearchPage /></ProtectedRoute>} />
          <Route path='/login' element={<Login />} />
          <Route path='/tacos/:nombre' element={<Tacos />}>
            <Route path='details' element={<TacoDetails />} />
          </Route>

          Error 404 pirata, el 404 mas adecuado se hace desde el servidor no puede ser creado desde el cliente, que es lo que estamos haciendo aca
          <Route path='*' element={<h1>Not found</h1>} />

        </Routes>
      </div>
    </AuthProvider>
  )
}

export default App
