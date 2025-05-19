'use client'

import { CatCard } from '@/components/CatCard/CatCard'
import { Controls } from '@/components/Controls/Controls'
import { StatusBar } from '@/components/StatusBar/StatusBar'
import { useCat } from '@/shared/hooks/useCat/useCat'

import { GlobalStyle, Container, Title } from './styles'

export default function Home() {
  const catHook = useCat()

  return (
    <>
      <GlobalStyle />
      <Container>
        <Title>Cat Viewer</Title>
        <StatusBar {...catHook} />
        <Controls {...catHook} />
        <CatCard {...catHook} />
      </Container>
    </>
  )
}
