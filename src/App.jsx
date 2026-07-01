import { Link, Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Products from './pages/Products.jsx'
import ProductDetails from './pages/ProductDetails.jsx'
import About from './pages/About.jsx'
import Login from './pages/Login.jsx'
import MyReservations from './pages/MyReservations.jsx'
import PrivateRoute from './components/PrivateRoute.jsx'

function App() {
  const navigate = useNavigate()
  const token = localStorage.getItem('token')

  function handleLogout() {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    navigate('/')
  }

  return (
      <div className="app">
        <header className="header">
          <h1>Catalogue API</h1>

          <nav>
            <Link to="/">Accueil</Link>
            <Link to="/products">Produits</Link>
            <Link to="/about">À propos</Link>

            {token ? (
                <>
                  <Link to="/my-reservations">Mes réservations</Link>
                  <button onClick={handleLogout}>Déconnexion</button>
                </>
            ) : (
                <Link to="/login">Connexion</Link>
            )}
          </nav>
        </header>

        <main className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />

            <Route
                path="/my-reservations"
                element={
                  <PrivateRoute>
                    <MyReservations />
                  </PrivateRoute>
                }
            />

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
  )
}

export default App