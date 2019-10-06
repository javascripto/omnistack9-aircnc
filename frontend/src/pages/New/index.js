import React, { useState, useMemo } from 'react';

import './styles.css';
import api from '../../services/api';
import camera from '../../assets/camera.svg';

export default function New({ history }) {
  const [ techs, setTechs ] = useState('');
  const [ price, setPrice ] = useState('');
  const [ company, setCompany ] = useState('');
  const [ thumbnail, setThumbnail ] = useState(null);

  const preview = useMemo(() => {
    return thumbnail ? URL.createObjectURL(thumbnail) : null
  }, [thumbnail]);

  async function handleSubmit(event) {
    event.preventDefault();
    
    const data = new FormData();
    const user_id = localStorage.getItem('user');

    data.append('techs', techs);
    data.append('price', price);
    data.append('company', company);
    data.append('thumbnail', thumbnail);

    await api.post('/spots', data, {
      headers: { user_id }
    });

    history.push('/dashboard');
  }

  return (
    <form onSubmit={handleSubmit}>
      <label
        id="thumbnail"
        style={{ backgroundImage: `url("${preview}")`}}
        className={thumbnail ? 'has-thumbnail' : ''}
      >
        <input type="file" onChange={event => setThumbnail(event.target.files[0])} />
        <img src={camera} alt="Select thumbnail"/>
      </label>

      <label htmlFor="company">EMPRESA *</label>
      <input
        id="company"
        value={company}
        placeholder="Sua empresa incrível"
        onChange={event => setCompany(event.target.value)}
      />

      <label htmlFor="techs">TECNOLOGIAS * <span>(separadas por vírgula)</span></label>
      <input
        id="techs"
        value={techs}
        placeholder="Quais tecnologias usam?"
        onChange={event => setTechs(event.target.value)}
      />

      <label htmlFor="techs">VALOR DA DIÁRIA * <span>(em branco para GRATUITO)</span></label>
      <input
        id="price"
        value={price}
        placeholder="Valor cobrado por dia"
        onChange={event => setPrice(event.target.value)}
      />

      <button type="submit" className="btn">
        Cadastrar
      </button>
    </form>  
  );
}
