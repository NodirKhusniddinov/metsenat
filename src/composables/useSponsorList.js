import { reactive } from 'vue'

export function useSponsorList() {
  const list = reactive([])

  const fetchSponsorList = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/api/v1/sponsor-list/`,
      )
      if (!response.ok) throw new Error('Network response error')
      const data = await response.json()
      Object.assign(list, data)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  return { list, fetchSponsorList }
}

