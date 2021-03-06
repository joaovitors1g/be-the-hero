import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';
import logoImg from '../../assets/logo.svg';

import {
  RegisterContainer,
  RegisterContent,
  RegisterForm,
  RegisterHeader,
  InputGroup
} from './styles';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');

  const history = useHistory();

  async function handleRegister(e) {
    e.preventDefault();

    const data = {
      name,
      email,
      whatsapp,
      city,
      uf
    };

    try {
      const response = await api.post('/ongs', data);

      alert(`Seu ID de acesso: ${response.data.id}`);

      history.push('/');
    } catch (error) {
      alert('Erro no cadastro, tente novamente.');
    }
  }

  return (
    <RegisterContainer>
      <RegisterContent>
        <RegisterHeader>
          <img src={logoImg} alt='Be The Hero' />

          <h1>Cadastro</h1>

          <p>
            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem
            os casos da sua ONG.
          </p>

          <Link className='back-link' to='/'>
            <FiArrowLeft size={16} color='#E02041' />
            Voltar para logon
          </Link>
        </RegisterHeader>
        <RegisterForm onSubmit={handleRegister}>
          <input
            placeholder='Nome da ONG'
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
          <input
            type='email'
            placeholder='Email'
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <input
            placeholder='Whatsapp'
            value={whatsapp}
            onChange={e => setWhatsapp(e.target.value)}
            required
          />
          <InputGroup>
            <input
              placeholder='Cidade'
              value={city}
              onChange={e => setCity(e.target.value)}
              required
            />
            <input
              placeholder='UF'
              value={uf}
              onChange={e => setUf(e.target.value)}
              required
              style={{ width: 80 }}
            />
          </InputGroup>
          <button className='button' type='submit'>
            Cadastrar
          </button>
        </RegisterForm>
      </RegisterContent>
    </RegisterContainer>
  );
}
