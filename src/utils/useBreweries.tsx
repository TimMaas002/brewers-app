import { useQuery } from '@tanstack/react-query'
import { api } from '../configs/api'
import type { Brewery } from '../types/breweries'

export const useBreweries = () => {
  return useQuery({
    queryKey: ['breweries'],
    queryFn: async (): Promise<Brewery[]> => {
      const response = await api.get(`/breweries`)
      return response.data
    },
  })
}
