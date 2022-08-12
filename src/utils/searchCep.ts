import { api } from '../services/api'

export async function searchCep(value: string) {
  const response = await api.get(`${value}/json`)

  return response.data
}
