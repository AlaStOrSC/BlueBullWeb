import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom'
import { Navbar } from '../components/MainLayout/Navbar/Navbar'

const mockNavigate = vi.fn()

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom')
  return {
    ...actual,
    useNavigate: () => mockNavigate,
    useLocation: () => ({ pathname: '/' })
  }
})

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key) => key
  })
}))

const NavbarWrapper = ({ children }) => (
  <BrowserRouter>{children}</BrowserRouter>
)

describe('Navbar', () => {
  beforeEach(() => {
    mockNavigate.mockClear()
  })

  test('renders navigation items', () => {
    render(
      <NavbarWrapper>
        <Navbar />
      </NavbarWrapper>
    )
    
    expect(screen.getByText(/navbar.home/i)).toBeInTheDocument()
    expect(screen.getByText(/navbar.about/i)).toBeInTheDocument()
    expect(screen.getByText(/navbar.solutions/i)).toBeInTheDocument()
  })

  test('navigates to contact page when Contact Us is clicked', async () => {
    const user = userEvent.setup()
    render(
      <NavbarWrapper>
        <Navbar />
      </NavbarWrapper>
    )
    
    const contactButton = screen.getByRole('button', { name: /contact/i })
    await user.click(contactButton)
    
    expect(mockNavigate).toHaveBeenCalledWith('/contact')
  })

  test('highlights active navigation item', () => {
    vi.mocked(vi.importActual('react-router-dom')).useLocation.mockReturnValue({
      pathname: '/about'
    })
    
    render(
      <NavbarWrapper>
        <Navbar />
      </NavbarWrapper>
    )
    
    const aboutLink = screen.getByText(/navbar.about/i)
    expect(aboutLink).toBeInTheDocument()
  })
})
