import styled from 'styled-components'

export const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.colors['base-button']};
  background-color: ${({ theme }) => theme.colors['base-input']};
  color: ${({ theme }) => theme.colors['base-text']};
  font-size: 0.875rem;
  padding: 12px;
  width: 100%;

  border-radius: 6px;
`
