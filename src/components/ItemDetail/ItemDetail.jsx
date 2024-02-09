import React from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import { useCart } from '../../context/CartContext';
import { useNotification } from '../../notification/NotificationService';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa los estilos de Bootstrap

const ItemDetail = ({ id, name, category, img, price, stock, description }) => {
    const { addItem, getProductQuantity } = useCart();
    const { showNotification } = useNotification();

    const handleOnAdd = (quantity) => {
        const objProductToAdd = {
            id, name, price, quantity
        };
        addItem(objProductToAdd);
        showNotification('info', `Se agregaron correctamente ${quantity} ${name}`);
    };

    const productQuantity = getProductQuantity(id);

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-6 col-12"> {/* Ajusta el tamaño de la card */}
                    <article className="card">
                        <header className="card-header">
                            <h2 className="card-title">
                                {name}
                            </h2>
                        </header>
                        <div className="card-body">
                            <picture>
                                <img src={img} alt={name} className="img-fluid" style={{ maxWidth: '100%' }} />
                            </picture>
                            <section>
                                <p className="card-text">
                                    Categoria: {category}
                                </p>
                                <p className="card-text">
                                    Descripción: {description}
                                </p>
                                <p className="card-text">
                                    Precio: {price}
                                </p>
                            </section>
                        </div>
                        <footer className="card-footer">
                            <ItemCount onAdd={handleOnAdd} stock={stock} initial={productQuantity} />
                        </footer>
                    </article>
                </div>
            </div>
            <div className="mt-2">
                <Link to="/" className="btn btn-secondary">Volver Atrás</Link>
            </div>
        </div>
    );
};

export default ItemDetail;
