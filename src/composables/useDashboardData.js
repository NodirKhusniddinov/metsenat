import { reactive } from 'vue'

export function useDashboardData() {
  const prices = reactive({
    total_paid: 0,
    total_need: 0,
    total_must_pay: 0,
  })

  const fetchDashboardData = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/api/v1/dashboard/`,
      )
      if (!response.ok) throw new Error('Network response error')
      const data = await response.json()
      Object.assign(prices, data)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  return { prices, fetchDashboardData }
}
