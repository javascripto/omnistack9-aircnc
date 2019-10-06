import React, { useState } from 'react';

import api from '../../services/api';


export default function Login() {
  const [ email, setEmail ] = useState('');

  const onChangeEmail = event => setEmail(event.target.value);

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await api.post('/sessions', { email });
    localStorage.setItem('user', response.data._id);
  }

  return (
    <>
      <p>
        Ofereça <strong>spots</strong> para programadores e <strong>encontre</strong> talentos para sua empresa
      </p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">E-Mail *</label>
        <input
          id="email"
          type="email"
          onChange={onChangeEmail}
          placeholder="Seu melhor e-mail"
        />
        <button
          type="submit"
          className="btn">
          Entrar
        </button>
      </form>
  </>
  );
}
