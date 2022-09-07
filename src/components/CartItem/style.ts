import styled from 'styled-components'

export const Actions = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 0.5rem;
`

export const Item = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2.5rem;
  align-items: flex-start;

  & > div {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  & img {
    width: 64px;
    height: 64px;
  }
`

export const DeleteButton = styled.button`
  background-color: ${({ theme }) => theme.colors['base-button']};
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors['base-text']};
  font-size: 0.75rem;
  white-space: nowrap;
  display: flex;
  height: 38px;
  align-items: center;
  gap: 8px;
  padding: 8px;
  border-radius: 6px;
  border: none;

  svg {
    color: ${({ theme }) => theme.colors['purple']};
  }
`

export const Details = styled.div`
  display: flex;

  flex-direction: column;
  gap: 8px;
`

export const Price = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors['base-text']};
  font-weight: bold;
  white-space: nowrap;
`
