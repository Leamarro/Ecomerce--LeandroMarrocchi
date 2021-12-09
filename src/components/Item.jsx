import React from 'react'
import './Item.css'

function Item() {
    return (
        <div class="tarjeta">
        <div class="card">
  <img class="card-img-top" src="https://topperarg.vteximg.com.br/arquivos/ids/256986-1200-1200/59647.jpg?v=637705461625170000" alt="Card image cap"/>
  <div class="card-body">
    <h4 class="card-title">Zapatillas</h4>
    <p class="card-text">
     Stock: 5
    </p>
    <a href="#!" class="btn btn-primary">Ver Detalles del Producto</a>
  </div>
</div>
<div class="card">
  <img class="card-img-top" src="https://www.remerasya.com/pub/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/r/e/remera_azul_lisa_2.jpg" alt="Card image cap"/>
  <div class="card-body">
    <h4 class="card-title">Remera</h4>
    <p class="card-text">
      Stock: 3
    </p>
    <a href="#!" class="btn btn-primary">Ver Detalles del Producto</a>
  </div>
</div>
<div class="card">
  <img class="card-img-top" src="https://www.guantexindustrial.com.ar/807-large_default/pantalon-jeans-talle-56.jpg" alt="Card image cap"/>
  <div class="card-body">
    <h4 class="card-title">Pantalon</h4>
    <p class="card-text">
      Stock: 4
    </p>
    <a href="#!" class="btn btn-primary">Ver Detalles del Producto</a>
  </div>
</div>
</div>
    )
}

export default Item
