import { Link } from "react-router-dom"
import { useCart } from "../../context/CartContext"

const CartView = () => {

    const { cart, total, removeItem } = useCart()

    return (
        <>
            <h1>CART</h1>
            <section>
            {
                cart.map(prod => {
                    return (
                        <div key={prod.id} style={{ width: '100%', display: "flex", justifyContent: 'space-around'}}>
                            <h3>{prod.name}</h3>
                            <h4>Cantidad: {prod.quantity}</h4>
                            <h4>Precio por unidad: ${prod.price}</h4>
                            <h4>Subtotal: ${prod.quantity * prod.price}</h4>
                            <button onClick={() => removeItem(prod.id)}>Remover</button>
                        </div>
                    )
                })
            }
            </section>
            <section>
                <h1>Total: ${total}</h1>
            </section>
            <section>
                <Link to='/checkout'>Checkout</Link>
            </section>
        </>
    )
}

export default CartView