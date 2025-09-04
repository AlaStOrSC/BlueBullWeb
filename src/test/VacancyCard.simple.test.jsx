import { describe, test, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, screen } from '@testing-library/react'
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

  test('renders basic vacancy information', () => {
    render(<VacancyCard {...mockVacancy} />)
    
    expect(screen.getByText('Senior Frontend Developer')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /apply/i })).toBeInTheDocument()
  })
})
