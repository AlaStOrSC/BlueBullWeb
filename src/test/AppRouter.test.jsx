import { render, screen, waitFor } from '@testing-library/react'
import { BrowserRouter, MemoryRouter } from 'react-router-dom'
import { I18nextProvider } from 'react-i18next'
import { AppRouter } from '../routes/AppRouter'
import i18n from '../i18n'

vi.mock('../screens/BlueBullHomePage/BlueBullHomePage', () => ({
  BlueBullHomePage: () => <div data-testid="home-page">Home Page</div>
}))

vi.mock('../screens/AboutUsPage/AboutUsPage', () => ({
  AboutUsPage: () => <div data-testid="about-page">About Page</div>
}))

vi.mock('../screens/SolutionsPage/SolutionsPage', () => ({
  SolutionsPage: () => <div data-testid="solutions-page">Solutions Page</div>
}))

vi.mock('../screens/ContactPage/ContactPage', () => ({
  ContactPage: () => <div data-testid="contact-page">Contact Page</div>
}))

const AppRouterWrapper = ({ initialEntries = ['/'] }) => (
  <I18nextProvider i18n={i18n}>
    <MemoryRouter initialEntries={initialEntries}>
      <AppRouter />
    </MemoryRouter>
  </I18nextProvider>
)

describe('AppRouter', () => {
  test('renders home page by default', async () => {
    render(<AppRouterWrapper />)
    
    await waitFor(() => {
      expect(screen.getByTestId('home-page')).toBeInTheDocument()
    })
  })

  test('renders about page when navigating to /about', async () => {
    render(<AppRouterWrapper initialEntries={['/about']} />)
    
    await waitFor(() => {
      expect(screen.getByTestId('about-page')).toBeInTheDocument()
    })
  })

  test('renders solutions page when navigating to /solutions', async () => {
    render(<AppRouterWrapper initialEntries={['/solutions']} />)
    
    await waitFor(() => {
      expect(screen.getByTestId('solutions-page')).toBeInTheDocument()
    })
  })

  test('renders contact page when navigating to /contact', async () => {
    render(<AppRouterWrapper initialEntries={['/contact']} />)
    
    await waitFor(() => {
      expect(screen.getByTestId('contact-page')).toBeInTheDocument()
    })
  })

  test('renders 404 page for unknown routes', async () => {
    render(<AppRouterWrapper initialEntries={['/unknown-route']} />)
    
    await waitFor(() => {
      expect(screen.getByText(/page not found/i) || screen.getByTestId('404-page')).toBeInTheDocument()
    })
  })

  test('shows loading state while lazy loading components', () => {
    render(<AppRouterWrapper />)
    
    expect(screen.getByText(/loading/i) || screen.getByTestId('page-loader')).toBeInTheDocument()
  })
})
