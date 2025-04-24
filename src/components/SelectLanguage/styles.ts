import styled from 'styled-components';

export const SelectWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 30px;
`;

export const Select = styled.select`
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.text};
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.text};
  outline: none;
  background: transparent;
  appearance: none;
  cursor: pointer;
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: 50%;
  right: 5px;
  transform: translateY(-50%);
  pointer-events: none;
  transition: all .5s ease;
`;
