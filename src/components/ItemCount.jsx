import { useState } from "react"

export const ItemCount = () => {
    const [count, setCount] = useState(1)

const stock = 5

const inCreaseCount = () => {
    if (stock > count) {
        setCount((prev) => prev+1)
    }
}

const deCreaseCount = () => {
    if (count > 1) {
        setCount((prev) => prev-1)
    }
}

const onAdd = () => {
    if (count === 1) {
        alert('Producto agregado al carrito')
        return
    }
    alert(`${count} productos agregados al carrito`)
}

    return (
        <div className = 'itemCount'>
            <span onClick={deCreaseCount}>-</span>
            <span>{count}</span>
            <span onClick={inCreaseCount}>+</span>
            <button onClick={onAdd}>Agregar al carrito</button>
        </div>
    )
}