import { createContext, useState } from 'react'

export const Context = createContext()

export function ContextProvider ({ children }) {
  const [filters, setFilters] = useState({
    category: 'all',
    price: 0
  })

  const [init, setInit] = useState(true)

  const arr = [1, 2, 3, 4, 5]

  return (

    <Context.Provider value={{
      filters,
      setFilters,
      arr,
      init

    }}>
      {children}
    </Context.Provider>
  )
}
