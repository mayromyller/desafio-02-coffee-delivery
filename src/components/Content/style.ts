import styled from 'styled-components'
import heroImg from '../../assets/hero.png'

export const Background = styled.div`
  width: 100%;
  background: url(${heroImg}) no-repeat center center;
  margin-top: 104px;
`

export const Container = styled.div`
  max-width: 70rem;
  margin: 0 auto;
  padding: 5.6rem 1.25rem;
`

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  justify-content: center;
`

export const Items = styled.div`
  margin-top: 4.125rem;
`

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`

type ItemBackgroundProps = {
  color: 'yellow-dark' | 'yellow' | 'base-text' | 'purple'
}

export const ItemBackground = styled.span<ItemBackgroundProps>`
  height: 32px;
  width: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: ${({ theme, color }) => theme.colors[color]};

  & svg {
    color: ${({ theme }) => theme.colors['white']};
  }
`

export const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-direction: row;
`
