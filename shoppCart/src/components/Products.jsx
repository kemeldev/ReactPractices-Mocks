/* eslint-disable no-unused-vars */
import { AddToCartIcon, RemoveFromCartIcon } from './icons'
import './products.css'

export default function Products ({ productos }) {
  return (
    <div className="productsContainer">
      <section>
      {
        productos.map((product) => {
          return (
            <div className="product" key={product.id}>
              <img src={product.thumbnail} alt={product.title} />
              <strong>{product.title} - ${product.price}</strong>
              <button>
                <AddToCartIcon></AddToCartIcon>
                <RemoveFromCartIcon></RemoveFromCartIcon>
              </button>

            </div>
          )
        })
      }
      </section>
    </div>
  )
}
