import { reactive } from 'vue'

export function useStudentList() {
  const list = reactive([])

  const fetchStudentList = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/api/v1/student-list/`,
      )
      if (!response.ok) throw new Error('Network response error')
      const data = await response.json()
      Object.assign(list, data)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  return { list, fetchStudentList }
}
