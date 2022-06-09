import React, { useState } from "react"
import { orderCake, restockCake } from "../features/cake"
import { useSelector, useDispatch } from "react-redux"

export default function Orders() {
  const [order, setOrder] = useState(0)
  const [restock, setRestock] = useState(0)
  const dispatch = useDispatch()
  const allCakes = useSelector(({ cake }) => cake.numOfCakes)

  return (
    <div>
      <h4>Cakes</h4>
      <p>NumberOfCakes:{allCakes}</p>
      <label htmlFor="cake">OrderCake</label>
      <input
        type="number"
        id="cake"
        placeholder="num of cakes..."
        onChange={(e) => setOrder(e.target.value)}
      />
      <button onClick={() => dispatch(orderCake(order))}>Order</button>

      <div>
        <label htmlFor="restock">Restock</label>
        <input
          type="number"
          id="restock"
          placeholder="restock amount..."
          onChange={(e) => setRestock(e.target.value)}
          />
        <button onClick={() => dispatch(restockCake(restock))}>Restock</button>
      </div>
    </div>
  )
}
