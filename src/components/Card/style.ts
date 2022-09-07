import styled from 'styled-components'

export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors['base-card']};
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  border-radius: 6px 36px 6px 36px;
`

export const CardHeader = styled.div`
  position: relative;
  width: 100%;
  height: 60px;
`

export const CoffeeCardImage = styled.img`
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const CardContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const TagContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  flex-direction: row;
  flex-wrap: wrap;
`

export const Tag = styled.div`
  padding: 4px 8px;
  border-radius: 100px;
  background-color: ${({ theme }) => theme.colors['yellow-light']};
  margin-top: 12px;
  display: inline-block;
  text-align: center;
`

export const TagText = styled.p`
  text-transform: uppercase;
  font-size: 0.625rem;
  color: ${({ theme }) => theme.colors['yellow-dark']};
  font-weight: bold;
`

export const Box = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.5rem;

  & h5,
  & p {
    text-align: center;
  }
`

export const CardFooter = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 1rem;
`

export const PriceContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: center;
  gap: 6px;

  & span {
    font-size: 14px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors['base-text']};
  }
`

export const Actions = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 0.5rem;
`

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
