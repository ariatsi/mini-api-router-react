function MyReservations() {
    const token = localStorage.getItem('token')
    const user = JSON.parse(localStorage.getItem('user'))

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
        </section>
    )
}

export default MyReservations