/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { products as InitialProducts } from './mocks/prod.json'
import { Header } from './components/Header'
import Footer from './components/Footer'
import Cart from './components/Cart'
import Products from './components/Products'

function App () {
  const [filters, setFilters] = useState({
    category: 'all',
    price: 0
  })

  const filterProducts = (arr) => {
    return [...arr].filter(producto => {
      return (
        producto.price >= filters.price &&
        (
          filters.category === 'all' || producto.category === filters.category
        )
      )
    })
  }

  return (
    <>
      <Header changeFilters={setFilters} ></Header>
      {/* <Cart></Cart> */}
      <Products productos={filterProducts(InitialProducts)}/>
      <Footer></Footer>
    </>
  )
}

export default App
