import styled from 'styled-components'

export const ButtonContainer = styled.div`
  background-color: ${({ theme }) => theme.colors['base-button']};
  display: flex;
  height: 38px;
  align-items: center;
  gap: 8px;
  padding: 8px;
  border-radius: 6px;

  & span {
    color: ${({ theme }) => theme.colors['base-title']};
  }

  & button {
    background: transparent;
    border: none;

    & svg {
      color: ${({ theme }) => theme.colors['purple']};

      &:hover {
        color: ${({ theme }) => theme.colors['purple-dark']};
      }
    }
  }
`

export const InputQuantity = styled.input`
  background: transparent;
  border: none;
  width: 36px;
  height: 100%;
  text-align: right;
`

export const ButtonCart = styled.button`
  display: flex;
  align-items: center;
  height: 38px;
  padding: 8px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors['purple-dark']};
  border: none;

  & svg {
    color: ${({ theme }) => theme.colors['white']};
  }
`
