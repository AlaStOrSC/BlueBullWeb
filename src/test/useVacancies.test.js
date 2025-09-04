import { describe, test, expect, vi, beforeEach } from 'vitest'
import { renderHook, waitFor } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useVacancies } from '../hooks/useVacancies'

const createWrapper = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  })
  
  return ({ children }) => (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}

const mockFetch = vi.fn()
global.fetch = mockFetch

const mockXMLData = `
  <workzag-jobs>
    <position>
      <id>123</id>
      <name>Frontend Developer</name>
      <recruitingCategory>Engineering</recruitingCategory>
      <schedule>Full-time</schedule>
      <office>Remote</office>
      <yearsOfExperience>2-4</yearsOfExperience>
    </position>
    <position>
      <id>456</id>
      <name>Backend Developer</name>
      <recruitingCategory>Engineering</recruitingCategory>
      <schedule>Full-time</schedule>
      <office>Madrid</office>
      <yearsOfExperience>3-5</yearsOfExperience>
    </position>
  </workzag-jobs>
`

describe('useVacancies', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  test('fetches and parses vacancy data successfully', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      text: () => Promise.resolve(mockXMLData),
    })

    const { result } = renderHook(() => useVacancies(), {
      wrapper: createWrapper(),
    })

    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true)
    })

    expect(result.current.data).toHaveLength(2)
    expect(result.current.data[0]).toEqual({
      id: '123',
      name: 'Frontend Developer',
      recruitingCategory: 'Engineering',
      schedule: 'Full-time',
      office: 'Remote',
      yearsOfExperience: '2-4'
    })
  })

  test('handles fetch errors gracefully', async () => {
    mockFetch.mockRejectedValueOnce(new Error('Network error'))

    const { result } = renderHook(() => useVacancies(), {
      wrapper: createWrapper(),
    })

    await waitFor(() => {
      expect(result.current.isError).toBe(true)
    })

    expect(result.current.error).toBeInstanceOf(Error)
    expect(result.current.data).toBeUndefined()
  })

  test('shows loading state initially', () => {
    mockFetch.mockImplementationOnce(() => new Promise(() => {}))

    const { result } = renderHook(() => useVacancies(), {
      wrapper: createWrapper(),
    })

    expect(result.current.isLoading).toBe(true)
    expect(result.current.data).toBeUndefined()
  })
})
