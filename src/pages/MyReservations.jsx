import { useEffect, useState } from 'react'

function MyReservations() {
    const token = localStorage.getItem('token')
    const user = JSON.parse(localStorage.getItem('user'))

    const [privateUser, setPrivateUser] = useState(null)
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        async function loadPrivateData() {
            try {
                setIsLoading(true)
                setError(null)

                const response = await fetch('https://dummyjson.com/auth/me', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })

                if (!response.ok) {
                    throw new Error('Impossible de charger les données privées')
                }

                const data = await response.json()
                setPrivateUser(data)
            } catch (err) {
                setError(err.message)
            } finally {
                setIsLoading(false)
            }
        }

        loadPrivateData()
    }, [token])

    return (
        <section>
            <h2>Mes réservations</h2>

            <p>
                Cette page est protégée. Elle est accessible uniquement si un token est présent dans le localStorage.
            </p>

            {user && (
                <p>
                    Utilisateur connecté : {user.firstName} {user.lastName}
                </p>
            )}

            <p>
                Token présent : {token ? 'oui' : 'non'}
            </p>

            <hr />

            <h3>Test d’une requête privée</h3>

            {isLoading && <p>Chargement des données privées...</p>}

            {error && <p className="error">{error}</p>}

            {privateUser && (
                <div>
                    <p>Données reçues depuis une route protégée :</p>
                    <p>
                        {privateUser.firstName} {privateUser.lastName}
                    </p>
                    <p>Email : {privateUser.email}</p>
                    <p>Rôle : {privateUser.role}</p>
                </div>
            )}
        </section>
    )
}

export default MyReservations