import { createFileRoute } from '@tanstack/react-router'
import { useBreweries } from '../utils/useBreweries'

const Index = () => {
  const breweries = useBreweries()
  return (
    <div className="p-2">
      <h3>Welcome Home!</h3>
      <div>
        {breweries.data?.map((brewery) => {
          return brewery.name
        })}
      </div>
    </div>
  )
}

export const Route = createFileRoute('/')({
  component: Index,
})
