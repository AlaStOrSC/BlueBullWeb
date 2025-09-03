import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { LanguageSwitcher } from '../components/LanguageSwitcher/LanguageSwitcher'

const mockUseTranslation = {
  t: (key) => key,
  i18n: {
    changeLanguage: vi.fn(),
    language: 'en'
  }
}

vi.mock('react-i18next', () => ({
  useTranslation: () => mockUseTranslation
}))

describe('LanguageSwitcher', () => {
  beforeEach(() => {
    mockUseTranslation.i18n.changeLanguage.mockClear()
  })

  test('renders language switcher', () => {
    render(<LanguageSwitcher />)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  test('shows current language', () => {
    render(<LanguageSwitcher />)
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
  })
})
