import styled from 'styled-components';

export const InputWrapper = styled.div`
  position: relative;

  & input {
    width: 100%;
    padding: 10px 0;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 30px;
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.text};
    outline: none;
    background: transparent;
    transition: 0.5s;

    &:focus {
      border-bottom: 1px solid ${({ theme }) => theme.colors.accent};
    }

    &:focus ~ label {
      top: -20px;
      left: 0;
      color: ${({ theme }) => theme.colors.accent};
      font-size: 12px;
    }
  }

  & label {
    position: absolute;
    top: 0;
    left: 0;
    padding: 10px 0;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.text};
    pointer-events: none;
    transition: 0.5s;
  }
`;
