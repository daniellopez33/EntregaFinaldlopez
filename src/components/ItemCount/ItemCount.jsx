import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemCount = ({ initial = 1, stock, onAdd }) => {
    const [count, setCount] = useState(initial);

    const decrement = () => {
        if (count > 1) {
            setCount((prev) => prev - 1);
        }
    };

    const increment = () => {
        if (count < stock) setCount((prev) => prev + 1);
    };

    return (
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <button className="btn btn-outline-secondary" type="button" onClick={decrement}>
                    -
                </button>
            </div>
            <input type="text" className="form-control text-center" value={count} readOnly />
            <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button" onClick={increment}>
                    +
                </button>
            </div>
            <div className="input-group-append">
                <button className="btn btn-primary" type="button" onClick={() => onAdd(count)}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    );
};

export default ItemCount;
