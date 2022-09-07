import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

import { Heading, Subtitle, Text } from '../../styles/themes/typography'

import CoffeeHero from '../../assets/coffee-hero.png'

import * as S from './style'

export function Content() {
  return (
    <S.Background>
      <S.Container>
        <S.Wrapper>
          <S.Box>
            <Heading>
              Encontre o café perfeito
              <br />
              para qualquer hora do dia
            </Heading>
            <Subtitle>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              <br />
              qualquer hora
            </Subtitle>
            <S.Items>
              <S.Grid>
                <S.Box>
                  <S.Flex>
                    <S.ItemBackground color="yellow-dark">
                      <ShoppingCart size={18} weight="fill" />
                    </S.ItemBackground>
                    <Text>Compra simples e segura</Text>
                  </S.Flex>

                  <S.Flex>
                    <S.ItemBackground color="yellow">
                      <Timer size={18} weight="fill" />
                    </S.ItemBackground>
                    <Text>Entrega rápida e rastreada</Text>
                  </S.Flex>
                </S.Box>

                <S.Box>
                  <S.Flex>
                    <S.ItemBackground color="base-text">
                      <Package size={18} weight="fill" />
                    </S.ItemBackground>
                    <Text>Embalagem mantém o café intacto</Text>
                  </S.Flex>
                  <S.Flex>
                    <S.ItemBackground color="purple">
                      <Coffee size={18} weight="fill" />
                    </S.ItemBackground>
                    <Text>O café chega fresquinho até você</Text>
                  </S.Flex>
                </S.Box>
              </S.Grid>
            </S.Items>
          </S.Box>

          <img src={CoffeeHero} alt="" />
        </S.Wrapper>
      </S.Container>
    </S.Background>
  )
}
