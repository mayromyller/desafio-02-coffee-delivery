import styled, { css } from 'styled-components'

export const Container = styled.div`
  input {
    visibility: hidden;
    appearance: none;
  }

  input:checked + div {
    ${({ theme }) => css`
      border-color: ${theme.colors['purple']};
      background-color: ${theme.colors['purple-light']};
    `}
  }
`

export const OptionPay = styled.div`
  background-color: ${({ theme }) => theme.colors['base-button']};
  border: 1px solid ${({ theme }) => theme.colors['base-button']};
  color: ${({ theme }) => theme.colors['base-text']};
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  gap: 12px;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 0.75rem;
  min-width: 180px;
  white-space: nowrap;
  user-select: none;

  svg {
    color: ${({ theme }) => theme.colors['purple']};
  }
`
