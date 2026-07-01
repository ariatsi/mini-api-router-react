import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Products() {
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        async function loadProducts() {
            try {
                setIsLoading(true)
                setError(null)

                const response = await fetch('https://dummyjson.com/products?limit=12')

                if (!response.ok) {
                    throw new Error('Erreur lors du chargement des produits')
                }

                const data = await response.json()
                setProducts(data.products)
            } catch (err) {
                setError(err.message)
            } finally {
                setIsLoading(false)
            }
        }

        loadProducts()
    }, [])

    if (isLoading) {
        return <p>Chargement des produits...</p>
    }

    if (error) {
        return <p className="error">{error}</p>
    }

    return (
        <section>
            <h2>Produits</h2>

            <div className="products-grid">
                {products.map((product) => (
                    <article className="product-card" key={product.id}>
                        <img src={product.thumbnail} alt={product.title} />

                        <h3>{product.title}</h3>

                        <p>Catégorie : {product.category}</p>

                        <strong>{product.price} €</strong>

                        <Link to={`/products/${product.id}`}>
                            Voir le détail
                        </Link>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default Products