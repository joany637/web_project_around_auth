import { useState } from 'react';

function Register({ onRegister }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    onRegister({ email, password });
  }

  return (
    <main className="auth">
      <form className="auth__form" onSubmit={handleSubmit}>
        <h2 className="auth__title">Registrarse</h2>

        <input
          id="register-email"
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
          id="register-password"
          name="password"
          className="auth__input"
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="new-password"
          required
        />

        <button className="auth__button" type="submit">
          Registrarse
        </button>
      </form>
    </main>
  );
}

export default Register;