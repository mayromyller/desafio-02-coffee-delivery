import styled from 'styled-components'

import { HelperText } from '../../styles/themes/typography'

export const Header = styled.header`
  height: 104px;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.colors['background']};
  z-index: 9999;
`

export const Container = styled.div`
  max-width: 70rem;
  padding: 2rem 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
`

export const Flex = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 12px;
`

export const Location = styled.div`
  height: 2.375rem;
  padding: 10px 8px;
  display: flex;
  align-items: center;
  gap: 4px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors['purple-light']};

  & svg {
    color: ${({ theme }) => theme.colors['purple']};
    fill: ${({ theme }) => theme.colors['purple']};
  }
`

export const Text = styled(HelperText)`
  color: ${({ theme }) => theme.colors['purple-dark']};
`

export const Cart = styled.div`
  height: 2.375rem;
  width: 2.375rem;
  padding: 10px 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors['yellow-light']};
  border-radius: 6px;
  position: relative;

  & svg {
    color: ${({ theme }) => theme.colors['yellow-dark']};
  }

  span {
    position: absolute;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    top: calc(-1.25rem / 2);
    right: calc(-1.25rem / 2);
    color: ${({ theme }) => theme.colors['white']};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    font-weight: bold;
    background-color: ${({ theme }) => theme.colors['yellow-dark']};
  }
`
