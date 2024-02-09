import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import { NotificationProvider } from './notification/NotificationService'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import CartView from './components/CartView/CartView'
import Checkout from './components/Checkout/Checkout'


function App() {
  return (
    <>
       <BrowserRouter>
          <NotificationProvider>
            <CartProvider>
              <NavBar />
              <Routes>
                <Route path='/' element={<ItemListContainer greeting={'Listado de todos los productos'}/>}/>
                <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Listado de los productos filtrados: '}/>}/>
                <Route path='/detail/:productId' element={<ItemDetailContainer />} />
                <Route path='/cart' element={<CartView />} />
                <Route path='/checkout' element={<Checkout />} />
                <Route path='*' element={<h1>ERROR 404</h1>} />
              </Routes>
            </CartProvider>
          </NotificationProvider>
      </BrowserRouter>
    </>
  )
}

export default App
