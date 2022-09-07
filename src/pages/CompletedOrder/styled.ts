import styled from 'styled-components'

import { Title } from '../../styles/themes/typography'

export const Container = styled.div`
  width: 100%;
  margin-top: calc(104px + 5rem);
  background-color: ${({ theme }) => theme.colors['background']};
`

export const Wrapper = styled.div`
  max-width: 70rem;
  margin: 0 auto;
  padding: 0 1.5rem;
`

export const Heading = styled(Title)`
  color: ${({ theme }) => theme.colors['yellow-dark']};
`

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  margin-top: 2.5rem;
  align-items: center;
`

export const Details = styled.div`
  padding: 2.5rem;
  border-radius: 6px 36px;
  border: 1px solid ${({ theme }) => theme.colors['yellow']};
  background: ${({ theme }) => theme.colors['background']};
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const Align = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.75rem;
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
