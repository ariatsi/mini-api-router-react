import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
    const [username, setUsername] = useState('emilys')
    const [password, setPassword] = useState('emilyspass')
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate()

    async function handleSubmit(event) {
        event.preventDefault()

        try {
            setIsLoading(true)
            setError(null)

            const response = await fetch('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                    expiresInMins: 30
                })
            })

            if (!response.ok) {
                throw new Error('Identifiants incorrects')
            }

            const data = await response.json()

            localStorage.setItem('token', data.accessToken)
            localStorage.setItem('user', JSON.stringify(data))

            navigate('/my-reservations')
        } catch (err) {
            setError(err.message)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <section className="login-page">
            <h2>Connexion</h2>

            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="username">Nom d’utilisateur</label>
                <input
                    id="username"
                    type="text"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                />

                <label htmlFor="password">Mot de passe</label>
                <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />

                <button type="submit" disabled={isLoading}>
                    {isLoading ? 'Connexion...' : 'Se connecter'}
                </button>
            </form>

            {error && <p className="error">{error}</p>}

            <p>
                Identifiants de test : emilys / emilyspass
            </p>
        </section>
    )
}

export default Login