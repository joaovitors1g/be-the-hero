import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import {
  NewIncidentContainer,
  NewIncidentContent,
  NewIncidentForm,
  LeftSide
} from './styles';

import api from '../../services/api';

import logoImg from '../../assets/logo.svg';

export default function NewIncident() {
  const ongId = localStorage.getItem('ongId');

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');

  const history = useHistory();

  async function handleNewIncident(e) {
    e.preventDefault();

    const data = {
      title,
      description,
      value
    };

    try {
      await api.post('/incidents', data, {
        headers: {
          Authorization: ongId
        }
      });
      history.push('/profile');
    } catch (error) {
      alert('Erro ao cadastrar o caso, tente novamente.');
    }
  }

  return (
    <NewIncidentContainer>
      <NewIncidentContent>
        <LeftSide>
          <img src={logoImg} alt='Be The Hero' />

          <h1>Cadastro</h1>

          <p>
            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem
            os casos da sua ONG.
          </p>

          <Link className='back-link' to='/profile'>
            <FiArrowLeft size={16} color='#E02041' />
            Voltar para home
          </Link>
        </LeftSide>
        <NewIncidentForm onSubmit={handleNewIncident}>
          <input
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder='Titulo do caso'
          />
          <textarea
            value={description}
            onChange={e => setDescription(e.target.value)}
            placeholder='Descrição'
          />
          <input
            value={value}
            onChange={e => setValue(e.target.value)}
            placeholder='Valor em reais'
          />
          <button className='button' type='submit'>
            Cadastrar
          </button>
        </NewIncidentForm>
      </NewIncidentContent>
    </NewIncidentContainer>
  );
}
