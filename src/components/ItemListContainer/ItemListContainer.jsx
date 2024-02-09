import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { useNotification } from "../../notification/NotificationService";
import { db } from "../../services/firebase/firebaseConfig";
import { getDocs, collection, query, where } from "firebase/firestore";
import "bootstrap/dist/css/bootstrap.min.css"; // Importa los estilos de Bootstrap

const ItemListContainer = ({ greeting }) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const { categoryId } = useParams();

  const { showNotification } = useNotification();

  useEffect(() => {
    if (categoryId) document.title = "Ecommerce: " + categoryId;

    return () => {
      document.title = "Ecommerce";
    };
  }, [categoryId]);

  useEffect(() => {
    setLoading(true);

    const productsCollection = categoryId
      ? query(collection(db, "products"), where("category", "==", categoryId))
      : collection(db, "products");

    getDocs(productsCollection)
      .then((querySnapshot) => {
        const productsAdapted = querySnapshot.docs.map((doc) => {
          const fields = doc.data();
          return { id: doc.id, ...fields };
        });

        setProducts(productsAdapted);
      })
      .catch((error) => {
        showNotification("error", "Hubo un error");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  if (loading) {
    return <h1>Cargando los productos...</h1>;
  }

  return (
    <div className="container mt-4"> {/* Agrega la clase 'container' de Bootstrap */}
      <h1>{greeting + (categoryId ?? "")}</h1>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
