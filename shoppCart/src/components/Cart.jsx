import './cart.css'
import { CartIcon } from './icons'

export default function Cart () {
  return (
    <div className='cart'>
      <div className='cartIcon' >
        <CartIcon/>
      </div>
      <aside className='carContainer'>
        <img src="https://i.dummyjson.com/data/products/3/thumbnail.jpg" alt="pending" />
        <p>Information here</p>
        <p>Price</p>
        <strong>Quantity = </strong>
        <hr />
        <button className='removeCart'>
          <CartIcon/>
        </button>
      </aside>
    </div>
  )
}
