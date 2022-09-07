import styled from 'styled-components'

export const Container = styled.div`
  margin: 104px auto 0 auto;
  padding: 2.5rem 1.25rem;
  max-width: 70rem;
`

export const Grid = styled.form`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
`

export const Align = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  flex-direction: row;
`

export const CardForm = styled.div`
  background-color: ${({ theme }) => theme.colors['base-card']};
  padding: 2.5rem;
  border-radius: 6px;
  margin-top: 15px;
`

export const PaymentContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`

export const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.colors['base-button']};
  background-color: ${({ theme }) => theme.colors['base-input']};
  padding: 12px;
  width: 100%;

  border-radius: 6px;
`

export const GridForm = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  margin-top: 2rem;
`

export const FirstFormGroup = styled.div`
  display: grid;
  grid-template-columns: 3fr 4fr 1fr;
  gap: 12px;

  & .complement {
    grid-column: 2 / 4;
  }
`

export const SecondFormGroup = styled.div`
  display: grid;
  grid-template-columns: 3fr 4fr 1fr;
  gap: 12px;
`

export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors['base-card']};
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  border-radius: 6px 44px 6px 44px;
  margin-top: 15px;
  padding: 2.5rem 1.5rem;
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

export const Divider = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 1px;
  background-color: ${({ theme }) => theme.colors['base-button']};
  width: 100%;
  margin: 1rem 0;
`

export const Resume = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`

export const TotalPrice = styled.p`
  font-size: 1.25rem;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
`

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors['yellow']};
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors['white']};
  border: none;
  width: 100%;
  margin-top: 24px;
  padding: 12px;
  border-radius: 6px;
  font-weight: bold;
  font-size: 14px;
  box-shadow: 0 0 0 2px ${({ theme }) => theme.colors['yellow']};
`
