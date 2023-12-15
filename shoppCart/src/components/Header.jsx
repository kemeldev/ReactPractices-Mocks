import './header.css'
import { Filters } from './Filters'

export function Header ({ changeFilters }) {
  return (
    <div className='headerContainer'>
    <h1>React Shop 🛒</h1>
      <Filters changeFilters={changeFilters} ></Filters>
    </div>
  )
}
