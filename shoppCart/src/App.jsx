/* eslint-disable no-unused-vars */
import { useContext, useState } from 'react'
import { products as InitialProducts } from './mocks/prod.json'
import { Header } from './components/Header'
import Footer from './components/Footer'
import Cart from './components/Cart'
import Products from './components/Products'
import { Context } from './context/filterContext'

function useFilters () {
  // const [filters, setFilters] = useState({
  //   category: 'all',
  //   price: 0
  // })

  const filters = useContext(Context)
  

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

  return { filterProducts, setFilters }
}

function App () {
  const [initialProducts] = useState(InitialProducts)
  const { filterProducts, setFilters } = useFilters()
  return (
    <>
      <Header changeFilters={setFilters} ></Header>
      {/* <Cart></Cart> */}
      <Products productos={filterProducts(initialProducts)}/>
      <Footer></Footer>
    </>
  )
}

export default App
