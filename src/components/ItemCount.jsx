import React from 'react'
import { useState } from 'react'

function ItemCount({stock, initial, onAdd}) {
    const [count, setCount] = useState(0)
    return (
        <div class="input-group">
        <div class="input-group-prepend">
          <button class="input-group-text"  type="button" onClick={() => setCount((count) => count + 1)}>
            +</button>
        </div>
        <span type="text" class="form-control">{count}</span>
        <div class="input-group-append">
          <button class="input-group-text" type="button" onClick={() => setCount((count) => count - 1)}>
              -
          </button>
        </div>
        <button type="button" class="btn btn-primary">Agregar al carrito</button>
      </div>
      
    )
}

export default ItemCount
