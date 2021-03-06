import styled from 'styled-components';

export const NewIncidentContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  .form {
    width: 100%;
    max-width: 350px;
    margin-right: 30px;
  }
`;

export const NewIncidentContent = styled.div`
  width: 100%;
  padding: 96px;
  background: ${props => props.theme.colors.card.background};
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LeftSide = styled.section`
  width: 100%;
  max-width: 380px;

  h1 {
    margin: 64px 0 32px;
    font-size: 32px;
    color: ${props => props.theme.colors.text};
  }

  p {
    font-size: 18px;
    /*color: #737380;*/
    color: ${props => props.theme.colors.text};
    line-height: 32px;
  }

  .back-link {
    color: ${props => props.theme.colors.text};
  }
`;

export const NewIncidentForm = styled.form`
  width: 100%;
  max-width: 450px;

  input,
  textarea {
    margin-top: 8px;
    color: ${props => props.theme.colors.form.placeholder};
  }
`;
