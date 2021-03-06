import React, { useEffect, useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';

import api from '../../services/api';

import logoImg from '../../assets/logo.svg';

import {
  ProfileHeader,
  ProfileContainer,
  IncidentList,
  IncidentItem,
  HeaderButton,
  DeleteButton
} from './styles';

import ThemeChangerContext from '../../context/ThemeChangerContext';

export default function Profile() {
  const [incidents, setIncidents] = useState([]);
  const { colors, title } = useContext(ThemeContext);
  const toggleTheme = useContext(ThemeChangerContext);

  const ongName = localStorage.getItem('ongName');
  const ongId = localStorage.getItem('ongId');

  const history = useHistory();

  useEffect(() => {
    api
      .get('/profile', {
        headers: {
          Authorization: ongId
        }
      })
      .then(response => {
        setIncidents(response.data);
      });
  }, [ongId]);

  async function handleDeleteIncident(id) {
    try {
      await api.delete(`/incidents/${id}`, {
        headers: {
          Authorization: ongId
        }
      });

      setIncidents(incidents =>
        incidents.filter(incident => incident.id !== id)
      );
    } catch (error) {
      alert('Erro ao deletar caso, tente novamente.');
    }
  }

  function handleLogout() {
    localStorage.clear();

    history.push('/');
  }

  return (
    <ProfileContainer>
      <ProfileHeader>
        <img src={logoImg} alt='Be The Hero' />
        <span>Bem vinda, {ongName}</span>
        <Switch
          className='theme-switcher'
          onChange={toggleTheme}
          checked={title === 'dark'}
          checkedIcon={false}
          uncheckedIcon={false}
          height={10}
          width={40}
          handleDiameter={20}
          onColor={colors.primary}
        />
        <Link className='button' to='/incidents/new'>
          Cadastrar novo caso
        </Link>
        <HeaderButton onClick={handleLogout}>
          <FiPower size={18} color='#E02041' />
        </HeaderButton>
      </ProfileHeader>

      <h1>Casos Cadastrados</h1>
      <IncidentList>
        {incidents.map(incident => (
          <IncidentItem key={incident.id}>
            <strong>Caso</strong>
            <p>{incident.title}</p>

            <strong>Descrição</strong>
            <p>{incident.description}</p>

            <strong>Valor</strong>
            <p>
              {Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              }).format(incident.value)}
            </p>

            <DeleteButton onClick={() => handleDeleteIncident(incident.id)}>
              <FiTrash2 size={20} color='#a8a8b3' />
            </DeleteButton>
          </IncidentItem>
        ))}
      </IncidentList>
    </ProfileContainer>
  );
}
