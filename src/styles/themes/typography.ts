import styled from 'styled-components'

export const Heading = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.colors['base-title']};
  font-weight: 800;
  font-size: 3rem;
`

export const Title = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.colors['base-subtitle']};
  font-weight: 800;
  font-size: 2rem;
`

export const Subtitle = styled.p`
  font-size: 1.25rem;
  font-weight: 400;
  font-family: 'Roboto', sans-serif;
`

export const CardTitle = styled.h5`
  font-family: ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.colors['base-subtitle']};
  font-size: 1.25rem;
  font-weight: 700;
`

export const CardPrice = styled.h5`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.5rem;
  font-weight: 800;
`

export const TitleForm = styled.h4`
  font-family: ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.colors['base-subtitle']};
  font-size: 1.125rem;
  font-weight: 700;
`

export const Text = styled.p`
  font-size: 1rem;
  font-weight: 400;
  font-family: 'Roboto', sans-serif;
`

export const HelperText = styled.p`
  font-size: 0.875rem;
  font-weight: 400;
  font-family: 'Roboto', sans-serif;
`
