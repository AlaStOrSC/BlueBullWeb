import { describe, test, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { VacancyCard } from '../components/VacancyCard/VacancyCard'

const mockVacancy = {
  id: '123',
  name: 'Senior Frontend Developer',
  recruitingCategory: 'Engineering',
  schedule: 'Full-time',
  office: 'Remote',
  yearsOfExperience: '3-5'
}

describe('VacancyCard', () => {
  beforeEach(() => {
    window.open = vi.fn()
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  test('renders vacancy information correctly', () => {
    render(<VacancyCard {...mockVacancy} />)
    
    expect(screen.getByText('Senior Frontend Developer')).toBeInTheDocument()
    expect(screen.getByText('Engineering • Full-time')).toBeInTheDocument()
    expect(screen.getByText('Remote')).toBeInTheDocument()
    expect(screen.getByText('Years of experience: 3-5')).toBeInTheDocument()
  })

  test('renders Apply button', () => {
    render(<VacancyCard {...mockVacancy} />)
    
    const applyButton = screen.getByRole('button', { name: /apply/i })
    expect(applyButton).toBeInTheDocument()
  })

  test('opens correct Personio URL when clicked', async () => {
    const user = userEvent.setup()
    render(<VacancyCard {...mockVacancy} />)
    
    const applyButton = screen.getByRole('button', { name: /apply/i })
    await user.click(applyButton)
    
    expect(window.open).toHaveBeenCalledWith(
      'https://blue-bull-technology.jobs.personio.com/job/123?language=en&display=en',
      '_blank'
    )
  })

  test('displays separators between content sections', () => {
    render(<VacancyCard {...mockVacancy} />)
    
    const separators = screen.getAllByAltText('Separator')
    expect(separators).toHaveLength(3)
  })

  test('handles missing optional fields', () => {
    const minimalVacancy = {
      id: '456',
      name: 'Test Job'
    }
    
    render(<VacancyCard {...minimalVacancy} />)
    
    expect(screen.getByText('Test Job')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /apply/i })).toBeInTheDocument()
  })
})
