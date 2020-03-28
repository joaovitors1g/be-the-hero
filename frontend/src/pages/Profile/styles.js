import styled from 'styled-components';

export const ProfileContainer = styled.div`
  width: 100%;
  max-width: 1180px;
  padding: 0 30px;
  margin: 32px auto;

  h1 {
    margin-top: 80px;
    margin-bottom: 24px;
    color: ${props => props.theme.colors.text};
  }
`;

export const ProfileHeader = styled.header`
  display: flex;
  align-items: center;

  span {
    font-size: 20px;
    margin-left: 24px;
    color: ${props => props.theme.colors.text};
  }

  img {
    height: 64px;
  }

  a {
    width: 260px;
    margin-left: auto;
    margin-top: 0;
  }

  .theme-switcher {
    margin-left: auto;
  }
`;

export const HeaderButton = styled.button`
  height: 60px;
  width: 60px;
  border-radius: 4px;
  border: 1px solid #dcdce6;
  background: transparent;
  margin-left: 16px;
  transition: border-color 0.2s;

  &:hover {
    border-color: #999;
  }
`;

export const IncidentList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 24px;
  list-style: none;
`;

export const IncidentItem = styled.li`
  background: ${props => props.theme.colors.card.background};
  padding: 24px;
  border-radius: 8px;
  position: relative;

  strong {
    display: block;
    margin-bottom: 16px;
    color: ${props => props.theme.colors.card.title};
  }

  p + strong {
    margin-top: 32px;
  }

  p {
    color: ${props => props.theme.colors.card.value};
    line-height: 21px;
    font-size: 16px;
  }
`;

export const DeleteButton = styled.button`
  position: absolute;
  right: 24px;
  top: 24px;
  border: 0;
  background: transparent;

  &:hover {
    opacity: 0.8;
  }
`;
