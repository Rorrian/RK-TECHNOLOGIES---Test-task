import { Loader, Card, Img } from './styles'

type CatCardProps = {
  catImage: {
    id: string
    url: string
  } | null
  isLoading: boolean
}

export const CatCard = ({ catImage, isLoading }: CatCardProps) => {
  if (isLoading) return <Loader>…</Loader>
  if (!catImage) return null

  return (
    <Card key={catImage.id}>
      <Img src={catImage.url} alt="cat" />
    </Card>
  )
}
