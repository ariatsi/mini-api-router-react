import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function ProductDetails() {
    const { id } = useParams()

    const [product, setProduct] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        async function loadProduct() {
            try {
                setIsLoading(true)
                setError(null)

                const response = await fetch(`https://dummyjson.com/products/${id}`)

                if (!response.ok) {
                    throw new Error('Produit introuvable')
                }

                const data = await response.json()
                setProduct(data)
            } catch (err) {
                setError(err.message)
            } finally {
                setIsLoading(false)
            }
        }

        loadProduct()
    }, [id])

    if (isLoading) {
        return <p>Chargement du produit...</p>
    }

    if (error) {
        return <p className="error">{error}</p>
    }

    return (
        <section className="product-details">
            <Link to="/products">Retour aux produits</Link>

            <h2>{product.title}</h2>

            <img src={product.thumbnail} alt={product.title} />

            <p>{product.description}</p>

            <p>Catégorie : {product.category}</p>

            <p>Note : {product.rating}</p>

            <strong>Prix : {product.price} €</strong>
        </section>
    )
}

export default ProductDetails