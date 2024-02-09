import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../../services/firebase/firebaseConfig';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css'; // Importa un archivo CSS personalizado

const NavBar = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const categoriesCollection = query(collection(db, 'categories'), orderBy('name', 'desc'));

        getDocs(categoriesCollection)
            .then(querySnapshot => {
                const categoriesAdapted = querySnapshot.docs.map(doc => {
                    const fields = doc.data();
                    return { id: doc.id, ...fields };
                });

                setCategories(categoriesAdapted);
            });
    }, []);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to='/'>BiciShop</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    {
                        categories.map(cat => (
                            <li key={cat.id} className="nav-item">
                                <Link className="nav-link" to={`/category/${cat.slug}`}>{cat.name}</Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className="ml-auto"> {/* Mueve el carrito a la derecha */}
                <CartWidget />
            </div>
        </nav>
    );
}

export default NavBar;
