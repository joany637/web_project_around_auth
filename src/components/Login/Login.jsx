import { useState } from 'react';

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    onLogin({ email, password });
  }

  return (
    <main className="auth">
      <form className="auth__form" onSubmit={handleSubmit}>
        <h2 className="auth__title">Iniciar sesión</h2>

        <input
          id="login-email"
          name="email"
          className="auth__input"
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
          required
        />

        <input
          id="login-password"
          name="password"
          className="auth__input"
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
          required
        />

        <button className="auth__button" type="submit">
          Iniciar sesión
        </button>
      </form>
    </main>
  );
}

export default Login;