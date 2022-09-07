import { Title } from '../../styles/themes/typography'
import { Card } from '../Card'

import { coffees } from './content/coffee_store_data'

import * as S from './style'

export function Products() {
  return (
    <S.Container>
      <Title>Nossos cafés</Title>

      <S.Grid>
        {coffees.map((coffee) => (
          <Card coffee={coffee} />
        ))}
      </S.Grid>
    </S.Container>
  )
}
