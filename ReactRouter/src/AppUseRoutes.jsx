import { Link, useRoutes } from 'react-router-dom'

const routes = [
  {
    path: '/',
    element: (
      <div>
        <h1>Home</h1>
        <Link to='/search'>Go to search</Link>
      </div>
    )
  },
  {
    path: '/search',
    element: (
      <div>
        <h2>Search</h2>
        <Link to='/search'>Go to home</Link>
      </div>
    )
  }
]

function App () {
  const element = useRoutes(routes)

  return (
    <main>
      <header>
        <h1>Contenido principal del componente App</h1>
      </header>
      {element}
    </main>
  )
}

export default App
