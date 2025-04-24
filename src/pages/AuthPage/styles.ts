import styled from 'styled-components';

export const FormWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  padding: 40px;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => theme.colors.card};
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
  border-radius: 10px;

  @media (max-width: 420px) {
    width: 340px;
    padding: 20px;
  }

  & h2 {
    color: #fff;
    margin-bottom: 30px;
    font-size: 37px;
    line-height: 39px;
    letter-spacing: 5px;
    font-family: ${({ theme }) => theme.fonts.title};
    color: ${({ theme }) => theme.colors.accent};
    text-align: center;
  }

  & span {
    color: ${({ theme }) => theme.colors.accentHover};
    cursor: pointer;

    &:hover {
      border-bottom: 1px solid ${({ theme }) => theme.colors.accentHover};
    }
  }
  & button {
    background-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.card};
    border-radius: 15px;
    display: block;
    margin: 15px auto;
    padding: 15px 25px;
    width: 100%;
    font-size: 16px;
    cursor: pointer;
    opacity: 1;
    -webkit-transition: all 0.3s ease;

    &:hover {
      background-color: ${({ theme }) => theme.colors.accentHover};
    }
  }

  & .error-message {
    margin-bottom: 20px;
    color: ${({ theme }) => theme.colors.error};
  }
`;
