import { useState } from 'react'
import './header.css'

export function Filters ({ changeFilters }) {
  const [minPrice, setMinPrice] = useState(0)

  const handleChangePrice = (e) => {
    setMinPrice(e.target.value)
    changeFilters(prevState => ({
      ...prevState,
      price: e.target.value
    }))
  }

  const handleChangeCategory = (e) => {
    changeFilters(prevState => ({
      ...prevState,
      category: e.target.value
    }))
  }

  return (

      <div className="filtersContainer">
        <label htmlFor="inputRange" >
          Precio a partir de
          <input
            type="range"
            name="inputRange"
            min="0"
            max="1000"
            onChange={handleChangePrice}
            />
          <span>$ {minPrice}</span>
        </label>

        <label htmlFor="selectCategory">Filtrar por categoria</label>
        <select id="selectCategory" onChange={handleChangeCategory}>
          <option value='all'>Todos</option>
          <option value='laptops'>Laptops</option>
          <option value="smartphones" >Celulares</option>
          <option value="skincare" >Skin Care</option>

        </select>
      </div>
  )
}
