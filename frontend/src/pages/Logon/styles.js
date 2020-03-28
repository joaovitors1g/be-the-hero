import styled from 'styled-components';

export const LogonContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .form {
    width: 100%;
    max-width: 350px;
    margin-right: 30px;
  }
`;

export const LogonForm = styled.form`
  margin-top: 100px;

  h1 {
    font-size: 32px;
    margin-bottom: 32px;
  }
`;
