import { QueryClient } from '@tanstack/react-query'

const staleTime = 5 * 60 * 1000 // 5 min
export const queryClientOptions = {
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
      staleTime,
    },
  },
}
export const queryClient = new QueryClient(queryClientOptions)
